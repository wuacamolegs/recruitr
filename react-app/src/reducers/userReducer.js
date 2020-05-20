import { getUsers } from "../services/userService";

const INITIAL_STATE = {};

export function fetchUsers(params) {
  return dispatch => {
    return getUsers(params).then(users => {
      return dispatch({ type: "SET_USERS", users });
    });
  };
}

export const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "SET_USERS":
      return { ...action.users };
    default:
      return state;
  }
};

export default userReducer;
