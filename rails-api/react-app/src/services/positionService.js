import client from "./apiClient";
import {
  extractData,
  objectKeysToCamelCase,
  objectKeysToUnderscore
} from "../helpers/helpers";

export function getPositions(params) {
  return client
    .get("/positions", { params })
    .then(extractData)
    .then(data => data["positions"])
    .then(objectKeysToCamelCase)
    .catch(error => console.log(error));
}

export function getPosition(positionId) {
  return client
    .get(`/positions/${positionId}`)
    .then(extractData)
    .then(objectKeysToCamelCase)
    .catch(error => console.log(error));
}

export function newPosition(params) {
  return client
    .post("/positions", {
      position: {
        ...objectKeysToUnderscore(params),
        skills: buildSkills(params.skills)
      }
    })
    .then(extractData);
}

const buildSkills = skills_str => {
  return skills_str.split(",").map(skill => {
    return {
      skill: skill,
      seniority: 10
    };
  });
};

export default { getPositions, getPosition };
