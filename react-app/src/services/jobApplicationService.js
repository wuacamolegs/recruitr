import client from "./apiClient";
import {
  extractData,
  objectKeysToCamelCase,
  objectKeysToUnderscore,
  buildSkills
} from "../helpers/helpers";

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

export function newJobApplication(params, positionId) {
  return client
    .post("/job_applications", {
      job_application: {
        applicant: {
          ...objectKeysToUnderscore(params),
          skills: buildSkills(params.skills)
        },
        position_id: positionId
      }
    })
    .then(extractData)
    .then(objectKeysToCamelCase)
    .catch(error => console.log(error));
}

export function setRecruiter(jobApplicationId, recruiterId) {
  return client
    .put(`/job_applications/${jobApplicationId}/recruiter`, {
      recruiter_id: recruiterId
    })
    .then(extractData)
    .then(objectKeysToCamelCase)
    .catch(error => console.log(error));
}

export function update(jobApplicationId, changes) {
  return client
    .put(`/job_applications/${jobApplicationId}`, {
      job_application: {
        ...objectKeysToUnderscore(changes)
      }
    })
    .then(extractData)
    .then(objectKeysToCamelCase)
    .catch(error => console.log(error));
}

export default { getJobApplication, getJobApplications, setRecruiter };
