import client from "./apiClient";

function extractData(res) {
  return res.data["positions"];
}

export function getPositions(params) {
  return client
    .get("/positions", { params })
    .then(extractData)
    .catch(error => console.log(error));
}

export default { getPositions };
