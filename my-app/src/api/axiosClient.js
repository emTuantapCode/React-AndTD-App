import axios from "axios";
import queryString from "query-string";

const axiosClients = axios.create({
  baseURL: "http://localhost:3006",

  paramsSerializer: (params) => queryString.tringify(params),
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
