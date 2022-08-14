export const fillterItems = ({ type, value }) => {
  return {
    type: "fillter",
    payload: {
      type: type,
      brand: value,
    },
  };
};
export const loginSuccess = (user) => {
  return {
    type: "loginSuccess",
    payload: user,
  };
};
export const loginStart = () => {
  return {
    type: "loginStart",
  };
};
export const loginError = () => {
  return {
    type: "loginError",
  };
};
