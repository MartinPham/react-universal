import initialState from './state';
import {ID, CHANGE_TEXT} from "./constants";
import changeTextReducer from "./reducers/changeTextReducer";
import getPreloadState from "utils/redux/getPreloadState";
const preloadedInitialState = getPreloadState(ID, initialState);

export default (state = preloadedInitialState, action) => {
    switch(action.type) {
        case CHANGE_TEXT:
            return changeTextReducer(state, action);
        default:
            return state;
    }
}