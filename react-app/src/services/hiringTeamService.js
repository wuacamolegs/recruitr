import client from "./apiClient";
import {
  extractData,
  objectKeysToCamelCase,
  isBlank
} from "../helpers/helpers";

export function getHiringTeams() {
  return client
    .get("/hiring_teams")
    .then(extractData)
    .then(data => data["hiring_teams"])
    .then(objectKeysToCamelCase)
    .catch(error => console.log(error));
}

export function getRecruiters(hiringTeamId, { jobApplicationId, criteria }) {
  const params = { job_application_id: jobApplicationId };
  if (!isBlank(criteria)) {
    params.criteria = criteria;
  }
  return client
    .get(`/hiring_teams/${hiringTeamId}/recruiters`, { params })
    .then(extractData)
    .then(data => data["recruiters"])
    .then(objectKeysToCamelCase)
    .catch(error => console.log(error));
}

export function getAllRecruiters() {
  return client
    .get(`/recruiters`)
    .then(extractData)
    .then(data => data["recruiters"])
    .then(objectKeysToCamelCase)
    .catch(error => console.log(error));
}

export default { getHiringTeams, getRecruiters, getAllRecruiters };
