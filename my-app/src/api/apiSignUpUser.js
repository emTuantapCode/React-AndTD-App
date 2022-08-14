import axiosClients from "./axiosClient";

const apiSignUpUser = {
  postAll: (params) => {
    const url = "auth/signup";
    return axiosClients.post(url, params);
  },
};

export default apiSignUpUser;
