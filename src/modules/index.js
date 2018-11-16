import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";

import auth from "./auth";
import profile from "./profile";

export default history =>
  combineReducers({
    router: connectRouter(history),
    auth,
    profile
  });
