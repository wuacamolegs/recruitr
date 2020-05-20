import axios from "axios";

const BASE_URL = process.env.API_BASE_URL;

const client = axios.create({
  baseURL: `http://localhost:3000/v1`,
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
