import client from "./apiClient";

function extractData(res) {
  return res.data;
}

export function getJobApplication(applicationId) {
  return client
    .get(`/job_applications/${applicationId}`)
    .then(extractData)
    .catch(error => console.log(error));
}

export function getJobApplications(positionId) {
  return client
    .get(`/positions/${positionId}/applications`)
    .then(extractData)
    .then(data => data["applications"])
    .catch(error => console.log(error));
}

export default { getJobApplication, getJobApplications };
