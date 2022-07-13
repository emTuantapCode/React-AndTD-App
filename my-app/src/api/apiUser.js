import axiosClients from "./axiosClient";

const ApiProduct = {
    getAll: (params) => {
        const url = '/products';
        return axiosClients.post(url, {params});
    },
}

export default ApiProduct;
