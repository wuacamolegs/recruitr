import { getHiringTeams, getRecruiters } from "../services/hiringTeamService";

const INITIAL_STATE = { hiringTeams: [], recruiters: [] };

export function fetchHiringTeams(params) {
  return dispatch => {
    return getHiringTeams(params).then(hiringTeams => {
      return dispatch({ type: "SET_HIRING_TEAMS", hiringTeams });
    });
  };
}

export function fetchRecruiters(hiringTeamId, params) {
  return dispatch => {
    return getRecruiters(hiringTeamId, params).then(recruiters => {
      return dispatch({ type: "SET_RECRUITERS", recruiters });
    });
  };
}

export const hiringTeamReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "SET_HIRING_TEAMS":
      return { ...state, hiringTeams: action.hiringTeams };
    case "SET_RECRUITERS":
      return { ...state, recruiters: action.recruiters };
    default:
      return state;
  }
};

export default hiringTeamReducer;
