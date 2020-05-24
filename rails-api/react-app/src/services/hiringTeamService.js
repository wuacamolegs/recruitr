import client from "./apiClient";
import { extractData, objectKeysToCamelCase } from "../helpers/helpers";

export function getHiringTeams() {
  return client
    .get("/hiring_teams")
    .then(extractData)
    .then(objectKeysToCamelCase)
    .catch(error => console.log(error));
}

export function getRecruiters(hiringTeamId) {
  return client
    .get(`/hiring_teams/${hiringTeamId}/recruiters`)
    .then(extractData)
    .then(data => data["recruiters"])
    .then(objectKeysToCamelCase)
    .catch(error => console.log(error));
}

export default { getHiringTeams, getRecruiters };
