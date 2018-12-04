import {fromJS} from "immutable";

export default (state, action) => {
	let newState = state;

	let location = fromJS(action.location);
    if (!location.get('key'))
    {
        location = location.set('key', '');
    }

	const stack = fromJS([location]);

	newState = newState.set('stack', stack);
	newState = newState.set('location', location);

    return newState;
}