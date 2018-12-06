import {fromJS} from "immutable";

export default (state, action) => {
    let newState = state;

    newState = newState.set('user', fromJS(action.user));
    newState = newState.set('token', action.token);

    return newState;
}