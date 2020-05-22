import axios from "axios";

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

const client = axios.create({
  baseURL: `${API_BASE_URL}/v1`,
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
