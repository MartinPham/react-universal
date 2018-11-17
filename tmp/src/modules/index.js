import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";

import auth from "./auth";
import profile from "./profile";
// import test from "./test";

export default (history, injectedReducers) =>
  combineReducers({
    router: connectRouter(history),
    auth,
    profile,
    ...injectedReducers
  });
