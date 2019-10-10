import initialState from './state';
import {ID, INCREASE_COUNTER, CHANGE_ANOTHER_COUNTER} from "./constants";
import increaseCounterReducer from "./reducers/increaseCounterReducer";
import changeAnotherCounterReducer from "./reducers/changeAnotherCounterReducer";
import getPreloadState from "utils/redux/getPreloadState";
const preloadedInitialState = getPreloadState(ID, initialState);

export default (state = preloadedInitialState, action) => {
    switch(action.type) {
        case INCREASE_COUNTER:
            return increaseCounterReducer(state, action);
        case CHANGE_ANOTHER_COUNTER:
            return changeAnotherCounterReducer(state, action);
        default:
            return state;
    }
}