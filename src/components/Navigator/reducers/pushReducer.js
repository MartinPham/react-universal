import {fromJS} from "immutable";

export default (state, action) => {
    let newState = state;

    let transition = action.transition;

    newState = newState.set('transition', transition);

    return newState;
}