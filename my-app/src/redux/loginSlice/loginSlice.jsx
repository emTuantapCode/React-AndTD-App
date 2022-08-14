const initState = {
  currentUser: null,
  isLoading: false,
  error: false,
};

const loginReducer = (state = initState, action) => {
  switch (action.type) {
    case "loginStart":
      return {
        currentUser: null,
        isLoading: true,
        error: false,
      };
    case "loginSuccess":
      return {
        currentUser: action.payload,
        isLoading: false,
        error: false,
      };
    case "loginError":
      return {
        currentUser: null,
        isLoading: true,
        error: true,
      };
    default:
      return state;
  }
};
export default loginReducer;
