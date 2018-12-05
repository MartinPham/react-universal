import {fromJS} from "immutable";

export default (state, action) => {
    let newState = state;

    let transition = action.transition;
    let originPosition = fromJS(action.originPosition);

    newState = newState.set('transition', transition);
    newState = newState.set('originPosition', originPosition);

    return newState;
}