import axios from "axios";

const BASE_URL = "http://localhost:3000";

const client = axios.create({
  baseURL: `${BASE_URL}/v1`,
  headers: {
    Accept: "application/json",
    "Content-type": "application/json"
  }
});

client.interceptors.response.use(
  response => response,
  error => {
    if (error.response && error.response.status === 401) {
      window.location = "/";
      return null;
    }
    return Promise.reject(error);
  }
);

export default client;
