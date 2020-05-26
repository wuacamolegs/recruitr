import camelCase from "lodash/camelCase";
import isObject from "lodash/isObject";
import reduce from "lodash/reduce";

export const objectKeysToCamelCase = obj => {
  if (!isObject(obj)) {
    return obj;
  } else if (Array.isArray(obj)) {
    return obj.map(v => objectKeysToCamelCase(v));
  }
  return reduce(
    obj,
    (r, v, k) => {
      return {
        ...r,
        [camelCase(k)]: objectKeysToCamelCase(v)
      };
    },
    {}
  );
};

export const objectKeysToUnderscore = obj => {
  if (!isObject(obj)) {
    return obj;
  } else if (Array.isArray(obj)) {
    return obj.map(v => objectKeysToUnderscore(v));
  }
  return reduce(
    obj,
    (r, v, k) => {
      return {
        ...r,
        [snakeCase(k)]: objectKeysToUnderscore(v)
      };
    },
    {}
  );
};

export const snakeCase = str => {
  return str
    .replace(/(?:^|\.?)([A-Z])/g, (x, y) => {
      return `_${y.toLowerCase()}`;
    })
    .replace(/^_/, "");
};

export function extractData(res) {
  return res.data;
}

export function buildSkills(skills_str) {
  return skills_str.split(",").map(skill => {
    return {
      skill: skill,
      proficiency: 10
    };
  });
}

export function isBlank(str) {
  return !str || str.trim().length === 0;
}
