import { Input, Form } from "../../../components/InputComponent/input";
import "../../../scss/signin.scss";
import logo from "../../../asset/logo.svg";
import "../../../scss/font.scss";
import "../../../scss/signinsignup/someText.scss";
import { useDispatch } from "react-redux";
import * as actions from "../../../store/actions";
import { useNavigate } from "react-router-dom";
// function ValidateEmail(inputText) {
//   let oRegex = /[\w-\.]+@([\w-]+\.)+[\w-]{2,4}/g;
//   return oRegex.test(inputText.trim());
// }
// function ValidatePhone(inputText) {
//   let oRegex =
//     /^(0|\+84)(\s|\.)?((2[0-9][0-9])|(3[2-9])|(5[689])|(7[06-9])|(8[1-9])|(9[0-46-9]))(\d)(\s|\.)?(\d{3})(\s|\.)?(\d{3})$/;
//   return oRegex.test(inputText.trim());
// }

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const onSubmit = (newUser) => {
    dispatch(actions.login(newUser, navigate));
    // try {
    //   dispatch(loginStart());
    //   const postRequest = async () => {
    //     const request = await apiLoginUser.postAll(newUser);
    //     console.log(request.data.token);
    //     localStorage.setItem("access-token", request.data.token);
    //     dispatch(loginSuccess(request));
    //   };
    //   postRequest();
    // } catch (e) {
    //   console.log(e);
    //   dispatch(loginError());
    // }
  };
  return (
    <div className="signin-container">
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
        }}
      >
        <img src={logo} alt="logo" style={{ paddingBottom: 50 + "px" }} />
        <Form onSubmit={onSubmit}>
          <h1>Login</h1>
          <Input name="email" />
          <Input name="pass" />
          <button type="submit">Submit</button>
        </Form>
      </div>
    </div>
  );
}
export default Login;
