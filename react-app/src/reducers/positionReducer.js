import {
  getPositions,
  getApplications,
  getPosition
} from "../services/positionService";

const INITIAL_STATE = { positions: [], currentPosition: {} };

export function fetchPositions(params) {
  return dispatch => {
    return getPositions(params).then(positions => {
      return dispatch({ type: "SET_POSITIONS", positions });
    });
  };
}

export function fetchApplications(positionId) {
  return dispatch => {
    return getApplications(positionId).then(applications => {
      return dispatch({ type: "SET_APPLICATIONS", applications });
    });
  };
}

export function fetchPosition(positionId) {
  return dispatch => {
    return getPosition(positionId).then(position => {
      return dispatch({ type: "SET_CURRENT_POSITION", position });
    });
  };
}

export const positionReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "SET_POSITIONS":
      return { ...state, positions: action.positions, currentPosition: {} };
    case "SET_CURRENT_POSITION":
      return { ...state, currentPosition: action.position };
    case "SET_APPLICATIONS":
      return {
        ...state,
        currentPosition: {
          ...state.currentPosition,
          applications: action.applications
        }
      };
    default:
      return state;
  }
};

export default positionReducer;
