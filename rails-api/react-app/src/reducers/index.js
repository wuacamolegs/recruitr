import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";

import positionReducer from "./positionReducer";
import jobApplicationReducer from "./jobApplicationReducer";

export default history =>
  combineReducers({
    router: connectRouter(history),
    positions: positionReducer,
    jobApplications: jobApplicationReducer
  });
