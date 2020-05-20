import client from "./apiClient";

function extractData(res) {
  return res.data;
}

export function getUsers(params) {
  return client
    .get("/users", { params })
    .then(extractData)
    .catch(error => console.log(error));
}

export default { getUsers };
