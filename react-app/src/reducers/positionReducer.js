import {
  getPositions,
  getPosition,
  newPosition
} from "../services/positionService";

const INITIAL_STATE = { positions: [], currentPosition: {} };

export function fetchPositions(params) {
  return dispatch => {
    return getPositions(params).then(positions => {
      return dispatch({ type: "SET_POSITIONS", positions });
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

export function createPosition(params) {
  return dispatch => {
    return newPosition(params).then(position => {
      dispatch({
        type: "SET_CURRENT_POSITION",
        currentPosition: position
      });
      return position;
    });
  };
}

export const positionReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "SET_POSITIONS":
      return { ...state, positions: action.positions, currentPosition: {} };
    case "SET_CURRENT_POSITION":
      return { ...state, currentPosition: action.position };
    default:
      return state;
  }
};

export default positionReducer;
