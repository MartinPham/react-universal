import initialState from './state';
import {ID, UPDATE_USER, LOGOUT} from "./constants";


import getPreloadState from "utils/redux/getPreloadState";
import updateUserReducer from "./reducers/updateUserReducer";
import logoutReducer from "./reducers/logoutReducer";

const preloadedInitialState = getPreloadState(ID, initialState);

export default (state = preloadedInitialState, action) => {
    switch(action.type) {
        case UPDATE_USER:
            return updateUserReducer(state, action);
        case LOGOUT:
            return logoutReducer(state, action);
        default:
            return state;
    }
}