import axiosClients from "./axiosClient";

const apiLoginUser = {
  postAll: (params) => {
    const url = "auth/login";
    return axiosClients.post(url, params);
  },
};

export default apiLoginUser;
