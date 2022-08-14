const initState = {
  type: "ĐIỆN THOẠI NỔI BẬT NHẤT",
  brand: "Apple",
};

const fillterReducer = (state = initState, action) => {
  switch (action.type) {
    case "FILLTER":
      return {
        ...state,
        type: action.payload.type,
        brand: action.payload.brand,
      };
    default:
      return state;
  }
};
export default fillterReducer;
