import initialState from './state';
import {ID, CHANGE_ALT_TEXT, CHANGE_TEXT, CHANGE_OBJECT_TEXT, CHANGE_OBJECT} from "./constants";
import changeTextReducer from "./reducers/changeTextReducer";
import changeAltTextReducer from "./reducers/changeAltTextReducer";
import getPreloadState from "utils/redux/getPreloadState";
import changeObjectReducer from "./reducers/changeObjectReducer";
import changeObjectTextReducer from "./reducers/changeObjectTextReducer";

const preloadedInitialState = getPreloadState(ID, initialState);

export default (state = preloadedInitialState, action) => {
    // console.log('Run reducers >>> Home', state, action);
    switch(action.type) {
        case CHANGE_OBJECT:
            return changeObjectReducer(state, action);
        case CHANGE_OBJECT_TEXT:
            return changeObjectTextReducer(state, action);
        case CHANGE_TEXT:
            return changeTextReducer(state, action);
        case CHANGE_ALT_TEXT:
            return changeAltTextReducer(state, action);
        default:
            return state;
    }
}