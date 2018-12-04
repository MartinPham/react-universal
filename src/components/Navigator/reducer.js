import initialState from './state';
import {ID, PUSH} from "./constants";
import {HISTORY_CHANGED, RESET_HISTORY} from "components/App/constants";
import getPreloadState from "utils/redux/getPreloadState";
import resetHistoryReducer from "./reducers/resetHistoryReducer";
import historyChangedReducer from "./reducers/historyChangedReducer";
import pushReducer from "./reducers/pushReducer";

const preloadedInitialState = getPreloadState(ID, initialState);

export default (state = preloadedInitialState, action) => {
    switch(action.type) {
        case PUSH:
            return pushReducer(state, action);
        case RESET_HISTORY:
            return resetHistoryReducer(state, action);
        case HISTORY_CHANGED:
            return historyChangedReducer(state, action);
        default:
            return state;
    }
}