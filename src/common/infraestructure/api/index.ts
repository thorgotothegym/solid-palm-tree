import axios, { AxiosInstance } from "axios";

const api: AxiosInstance = axios.create({
  baseURL: "http://localhost:3004",
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use(async (config) => {
  // here to catch intercertions

  return config;
});

export default api;
