import { combineReducers } from "redux";

import reducer from "components/App/reducer";


export default (injectedReducers) =>
    combineReducers({
        App: reducer,
        ...injectedReducers
    });
