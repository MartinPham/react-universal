import {fromJS} from 'immutable';

export default (state, action) => {
    return state.set('object', fromJS(action.object));
}