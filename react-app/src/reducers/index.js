import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";

import positionReducer from "./positionReducer";

export default history =>
  combineReducers({
    router: connectRouter(history),
    positions: positionReducer
  });
