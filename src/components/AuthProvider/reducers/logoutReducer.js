// import {fromJS} from "immutable";

export default (state, action) => {
    let newState = state;


    newState = newState.set('user', null);
    newState = newState.set('token', null);

    return newState;
}