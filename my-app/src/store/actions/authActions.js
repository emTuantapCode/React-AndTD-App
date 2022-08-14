import actionTypes from "./actionTypes";
import apiLoginUser from "../../api/apiLoginUser";
import apiSignUpUser from "../../api/apiSignUpUser";
export const login = (data, navigate) => async (dis) => {
  try {
    let response = await apiLoginUser.postAll(data);
    if (response?.status === 0) {
      dis({
        type: actionTypes.LOGIN,
        data: response?.data,
      });
      navigate("/");
    } else {
      dis({
        type: actionTypes.LOGIN,
        data: null,
      });
    }
  } catch (error) {
    dis({
      type: actionTypes.LOGIN,
      data: null,
    });
  }
};
export const signup = (data, navigate) => async (dispatch) => {
  try {
    let response = await apiSignUpUser.postAll(data);
    console.log(response);
    if (response?.status === 0) {
      dispatch({
        type: actionTypes.SIGNUP,
        data: response?.data,
      });
      console.log(navigate);
      navigate("/login");
    } else {
      dispatch({
        type: actionTypes.SIGNUP,
        data: null,
      });
    }
  } catch (error) {
    dispatch({
      type: actionTypes.SIGNUP,
      data: null,
    });
  }
};
