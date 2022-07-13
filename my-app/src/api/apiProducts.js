import axiosClients from "./axiosClient";

const ApiProduct = {
    getAll: (params) => {
        const url = '/products';
        return axiosClients.get(url, {params});
    },
    get: (id) =>{
        const url = `/products/${id}`;
        return axiosClients.get(url);
    }
}

export default ApiProduct;
