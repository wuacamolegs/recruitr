import client from "./apiClient";
import { extractData, objectKeysToCamelCase } from "../helpers/helpers";

export function getJobApplication(applicationId) {
  return client
    .get(`/job_applications/${applicationId}`)
    .then(extractData)
    .then(objectKeysToCamelCase)
    .catch(error => console.log(error));
}

export function getJobApplications(positionId) {
  return client
    .get(`/positions/${positionId}/applications`)
    .then(extractData)
    .then(data => data["applications"])
    .then(objectKeysToCamelCase)
    .catch(error => console.log(error));
}

export default { getJobApplication, getJobApplications };
