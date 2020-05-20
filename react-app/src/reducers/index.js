import { combineReducers } from "redux";
import positionReducer from "./positionReducer";

export default combineReducers({
  positions: positionReducer
});
