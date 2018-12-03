import routes from '../../../config/routes';
import { parse, stringify } from 'query-string';

export default function(state, action) {
	let path = action.path;
	const data = action.data;
	let transition = action.transition;
	let origin = action.origin;

	// console.log(
	// 	'reduce',
	// 	path,
	// 	transition,
	// 	origin
	// );

	const history = state.getIn(['data', 'history']);
	const transitionHistory = state.getIn(['data', 'transitionHistory']);
	const originHistory = state.getIn(['data', 'originHistory']);

	let newState = state;
	let newHistory = history;
	let newTransitionHistory = transitionHistory;
	let newOriginHistory = originHistory;

	if (path === '@back' || path === '@@back' || path === '@@@back') {
		const orgPath = path;

		// console.log('go back');
		newHistory = history.pop();
		path = newHistory.get(-1);
		// transition = 'right';

		const oldTransition = newTransitionHistory.get(-1);
		newTransitionHistory = transitionHistory.pop();

		const oldOrigin = newOriginHistory.get(-1);
		newOriginHistory = originHistory.pop();

		// console.log(path);
		// console.log(path);
		// console.log(transition);

		if (transition == null) {
			// let oldTransition = newState.getIn(['data', 'transition']);
			// console.log(oldTransition);

			if (orgPath === '@back') {
				transition = `${oldTransition}-back`;
			} else if (orgPath === '@@back') {
				transition = `${oldTransition}-bback`;
			}
		}
		if (origin == null) {
			// let oldTransition = newState.getIn(['data', 'transition']);
			// console.log(oldTransition);

			origin = oldOrigin;
		}
	} else if (path === '@replace') {
		// console.log('go replace');
		newHistory = history.pop();
		path = newHistory.get(-1);
		// transition = 'right';

		const oldTransition = newTransitionHistory.get(-1);
		const oldOrigin = newOriginHistory.get(-1);
		// newTransitionHistory = transitionHistory.pop();

		// console.log(path);
		// console.log(path);
		// console.log(transition);

		if (transition == null) {
			// let oldTransition = newState.getIn(['data', 'transition']);
			// console.log(oldTransition);

			transition = 'right-back';
		}
		if (origin == null) {
			// let oldTransition = newState.getIn(['data', 'transition']);
			// console.log(oldTransition);

			origin = '{"x":0,"y":0,"width":0,"height":0,"top":0,"right":0,"bottom":0,"left":0,"data":null}';
		}
	} else if (path === '@root') {
		// console.log('go root');
		newHistory = history.slice(0, 1);
		path = newHistory.get(0);

		const oldTransition = newTransitionHistory.get(-1);
		newTransitionHistory = transitionHistory.slice(0, 1);
		newOriginHistory = originHistory.slice(0, 1);

		if (transition == null) {
			// let oldTransition = newState.getIn(['data', 'transition']);
			// console.log(oldTransition);

			// transition = oldTransition + '-back';
			transition = 'right';
		}
		if (origin == null) {
			// let oldTransition = newState.getIn(['data', 'transition']);
			// console.log(oldTransition);

			origin = '{"x":0,"y":0,"width":0,"height":0,"top":0,"right":0,"bottom":0,"left":0,"data":null}';
		}
	} else {
		let finalPath = path;
		let finalSearch = '';

		if (path === '@') {
			finalPath = '/';
		} else if (path.substr(0, 1) === '@') {
			finalPath = path.substring(1);

			const questionPosition = finalPath.indexOf('?');
			if (questionPosition > -1) {
				finalSearch = finalPath.substring(questionPosition);

				finalPath = finalPath.substring(0, questionPosition);
			}

			if (routes[finalPath] && routes[finalPath].url) {
				finalPath = routes[finalPath].url;
			} else {
				console.error('Could not found route ', finalPath);
			}
		}

		const finalParams = parse(finalSearch);

		for (const i in finalParams) {
			if (finalPath.indexOf(`/:${i}`) > -1) {
				finalPath = finalPath.replace(`/:${i}`, `/${finalParams[i]}`);
				delete finalParams[i];
			}
		}

		path = `${finalPath}?${stringify(finalParams)}`;
		
		if(path === '/?' && location.pathname === '/')
		{
			return state;
		}

		// console.log('go url ', path);

		newHistory = history.push(path);

		if (transition == null) {
			transition = 'up';
		}

		newTransitionHistory = transitionHistory.push(transition);
		newOriginHistory = originHistory.push(origin);
	}

	// console.log(
	// 	'reducer result',
	// 	[path, transition, newHistory.toJS(), newTransitionHistory.toJS(), newOriginHistory.toJS()]
	// );

	newState = newState.setIn(['data', 'history'], newHistory);
	newState = newState.setIn(['data', 'transitionHistory'], newTransitionHistory);
	newState = newState.setIn(['data', 'originHistory'], newOriginHistory);
	newState = newState.setIn(['data', 'path'], path);
	newState = newState.setIn(['data', 'transition'], transition);
	newState = newState.setIn(['data', 'data'], data);
	newState = newState.setIn(['data', 'origin'], origin);
	// console.log('newState',newState.toJS());

	return newState;
}
