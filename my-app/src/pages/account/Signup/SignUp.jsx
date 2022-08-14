import { useForm } from "react-hook-form";
import "../../../scss/signin.scss";
import logo from "../../../asset/logo.svg";
import { BtnExtra } from "../../../components/btncomponent/btncomponent";
import "../../../scss/font.scss";

import "../../../scss/signinsignup/someText.scss";

import "../../../scss/signinsignup/inputComponent.scss";

let RegexMail = /[\w-\.]+@([\w-]+\.)+[\w-]{2,4}/g;

let RegexPhone =
  /^(0|\+84)(\s|\.)?((2[0-9][0-9])|(3[2-9])|(5[689])|(7[06-9])|(8[1-9])|(9[0-46-9]))(\d)(\s|\.)?(\d{3})(\s|\.)?(\d{3})$/;

function SignUp() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <form className="signin-container" onSubmit={handleSubmit(onSubmit)}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
        }}
      >
        <img src={logo} style={{ paddingBottom: 50 + "px" }} />
        <p className="signin-text__bold">Số điện thoại/Email:</p>
        <input
          type="text"
          {...register("PhoneEmail", {
            required: true,
            pattern: [],
          })}
          className="input"
        />
        <p style={{ color: "red", fontSize: "14px", fontWeight: "500" }}>
          {errors.PhoneEmail?.type === "required" && (
            <p>Vui lòng nhập trường này</p>
          )}
          {errors.PhoneEmail?.type === "pattern" && (
            <p>Số điện thoại hoặc Mail không hợp lệ</p>
          )}
        </p>
        <p className="signin-text__bold">Mật khẩu:</p>
        <input
          type="password"
          {...register("password", { required: true, minLength: 8 })}
          className="input"
        />
        <p style={{ color: "red", fontSize: "14px", fontWeight: "500" }}>
          {errors.password?.type === "required" && (
            <p>Vui lòng nhập trường này</p>
          )}
          {errors.password?.type === "minLength" && (
            <p>Mật khẩu tối thiểu 8 kí tự</p>
          )}
        </p>
        <p className="signin-text__bold">Nhập lại khẩu:</p>
        <input
          type="password"
          {...register("passwordCheck", { required: true, minLength: 8 })}
          className="input"
        />
        <p style={{ color: "red", fontSize: "14px", fontWeight: "500" }}>
          {errors.passwordCheck?.type === "required" && (
            <p>Vui lòng nhập trường này</p>
          )}

          {errors.passwordCheck?.type === "minLength" && (
            <p>Mật khẩu tối thiểu 8 kí tự</p>
          )}
        </p>
        <div style={{ alignSelf: "end", marginTop: 30 + "px" }}>
          <BtnExtra content="Đăng kí"></BtnExtra>
        </div>
      </div>
    </form>
  );
}

export default SignUp;
