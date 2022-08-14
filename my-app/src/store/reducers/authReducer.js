import actionTypes from "../actions/actionTypes";

const initState = {
  isLoggedIn: false,
  token: null,
  userCurrent: {},
};

const authReducer = (state = initState, action) => {
  switch (action.type) {
    case actionTypes.LOGIN:
      return {
        ...state,
        isLoggedIn: action.data?.token ? true : false,
        token: action.data?.token ? action.data.token : null,
        userCurrent: action.data?.user ? action.data.user : {},
      };

    default:
      return state;
  }
};

export default authReducer;
