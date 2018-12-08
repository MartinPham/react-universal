import {fromJS} from 'immutable';

export default (state, action) => {
	
	// console.log('change text..', action.text)
    return state.set('object', fromJS(action.object));
    // return {
    //     ...state,
    //     text: action.text
    // }
}