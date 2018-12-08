import {fromJS} from 'immutable';

export default (state, action) => {
	
	// console.log('change text..', action.text)
    return state.setIn(['object', 'text'], fromJS(action.text));
    // return {
    //     ...state,
    //     text: action.text
    // }
}