import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";

import positionReducer from "./positionReducer";
import jobApplicationReducer from "./jobApplicationReducer";
import hiringTeamReducer from "./hiringTeamReducer";

export default history =>
  combineReducers({
    router: connectRouter(history),
    positions: positionReducer,
    jobApplications: jobApplicationReducer,
    hiringTeams: hiringTeamReducer
  });
