import ApiProduct from "../../api/apiProducts";

export const getProducts = async ({ type, value }) => {
  const params = { page: 1, label: value, category: type };
  let respones = await ApiProduct.getAll(params);
  console.log(respones);
};
