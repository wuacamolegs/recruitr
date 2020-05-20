import { getPositions } from "../services/positionService";

const INITIAL_STATE = {};

export function fetchPositions(params) {
  return dispatch => {
    return getPositions(params).then(positions => {
      return dispatch({ type: "SET_POSITIONS", positions });
    });
  };
}

export const positionReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "SET_POSITIONS":
      return { ...action.positions };
    default:
      return state;
  }
};

export default positionReducer;
