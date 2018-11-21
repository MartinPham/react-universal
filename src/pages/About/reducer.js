import initialState from './state';
import {ID, CHANGE_ALT_TEXT, CHANGE_TEXT} from "./constants";
import changeTextReducer from "./reducers/changeTextReducer";
import changeAltTextReducer from "./reducers/changeAltTextReducer";
import getPreloadState from "../../utils/redux/getPreloadState";

const preloadedInitialState = getPreloadState(ID, initialState);


export default (state = preloadedInitialState, action) => {
    switch(action.type) {
        case CHANGE_TEXT:
            return changeTextReducer(state, action);
        case CHANGE_ALT_TEXT:
            return changeAltTextReducer(state, action);
        default:
            return state;
    }
}