import axios from "axios";
import queryString from "query-string";
const axiosClients = axios.create({
  baseURL: "http://localhost:8888/api/v1/",
  headers: {
    "content-type": "application/json",
  },
  paramsSerializer: (params) => queryString.stringify(params),
});

axiosClients.interceptors.request.use(async (config) => {
  let token = window.localStorage.getItem("token");
  if (token) {
    config.headers["access-token"] = token;
  }
  return config;
});

axiosClients.interceptors.response.use(
  (response) => {
    if (response && response.data) {
      return response.data;
    }
    return response;
  },
  (error) => {
    throw error;
  }
);

export default axiosClients;
