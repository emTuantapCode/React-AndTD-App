import axiosClients from "./axiosClient";

const ApiProduct = {
  getAll: (params) => {
    const url = "/products";
    return axiosClients.get(url, { params });
  },
  get: (id) => {
    const url = `/products/product?id=${id}`;
    return axiosClients.get(url, { id });
  },
};

export default ApiProduct;
