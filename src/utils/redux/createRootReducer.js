import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";

import rootReducer from "../../reducer";

export default (history, injectedReducers) =>
    combineReducers({
        router: connectRouter(history),
        root: rootReducer,
        ...injectedReducers
    });
