import initialState from './state';
import {CHANGE_ALT_TEXT, CHANGE_TEXT} from "./constants";
import changeTextReducer from "./reducers/changeTextReducer";
import changeAltTextReducer from "./reducers/changeAltTextReducer";

export default (state = initialState, action) => {
    console.log('Run reducers, state = ', state, ' action = ',action);
    switch(action.type) {
        case CHANGE_TEXT:
            return changeTextReducer(state, action);
        case CHANGE_ALT_TEXT:
            return changeAltTextReducer(state, action);
        default:
            return state;
    }
}