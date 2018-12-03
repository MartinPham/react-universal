import push from '../actions/push';

export default dispatch => ({
	go: (path, data, transition, tmp) => {
		// //log(['go', path, transition, data]);
		// if(typeof transition !== 'string')
		// {
		// 	transition = null;
		// }
		dispatch(push(path, data, transition));
	},
	back: transition => {
		if (typeof transition !== 'string') {
			transition = null;
		}
		dispatch(push('@back', {}, transition));
	},
	replace: transition => {
		if (typeof transition !== 'string') {
			transition = null;
		}
		dispatch(push('@replace', {}, transition));
	},
	rootBack: transition => {
		if (typeof transition !== 'string') {
			transition = null;
		}
		dispatch(push('@root', {}, transition));
	},
});
