import client from "./apiClient";

function extractData(res) {
  return res.data;
}

export function getHiringTeams() {
  return client
    .get("/hiring_teams")
    .then(extractData)
    .then(data => data["hiring_teams"])
    .catch(error => console.log(error));
}

export function getRecruiters(hiringTeamId) {
  return client
    .get(`/hiring_teams/${hiringTeamId}/recruiters`)
    .then(extractData)
    .then(data => data["recruiters"])
    .catch(error => console.log(error));
}

export default { getHiringTeams, getRecruiters };
