import fillterReducer from "./fillterSlice/filletSlice";
import { combineReducers } from "redux";
import loginReducer from "./loginSlice/loginSlice";
const rootReducer = (state = {}, action) => {
  return {
    fillter: fillterReducer(state.fillter, action),
    login: loginReducer(state.fillter, action),
  };
};

export default rootReducer;
