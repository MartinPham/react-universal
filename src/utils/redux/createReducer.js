import { combineReducers } from "redux";

import appReducer from "components/App/reducer";
import authProviderReducer from "components/AuthProvider/reducer";
import navigatorReducer from "components/Navigator/reducer";

import {ID as AppID} from "components/App/constants";
import {ID as AuthProviderID} from "components/AuthProvider/constants";
import {ID as NavigatorID} from "components/Navigator/constants";

export default (injectedReducers) =>
    combineReducers({
        [AppID]: appReducer,
        [AuthProviderID]: authProviderReducer,
        [NavigatorID]: navigatorReducer,
        ...injectedReducers
    });
