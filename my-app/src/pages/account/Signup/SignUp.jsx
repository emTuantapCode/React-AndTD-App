import {useState} from "react";
import Input from "../../../components/InputComponent/input"
import "../../../sass/signin.scss"
import logo from "../../../asset/logo.svg";
import {BtnExtra} from "../../../components/btncomponent/btncomponent";
import "../../../sass/font.scss";
import "../../../sass/signinsignup/someText.scss";
const isEmail=()=>{
  
}
function SignUp() {
    const [info,setInfo]=useState({
      email:'',
      phone:'',
      password:''
    })

    const takeUserNameInfo=(enteredInput)=>{
      let email='';
      let phone='';
      setInfo(prev=>{
        return {...prev,email:email,phone:phone}
      })
    }
    const takePasswordInfo=(password)=>{
      setInfo(prev=>{
        return {...prev,password:password}
      })
    }
    console.log(info);
    return (
      <div className="signin-container" >
        <div style={{
          display:'flex',
          flexDirection:'column',
          alignItems:'flex-start',
          }}>
          <img src={logo} style={{paddingBottom:50+'px'}} />
          <p className='signin-text__bold'>Số điện thoại/Email:</p>
          <Input type='text' min="" max="" takeInput={takeUserNameInfo} ></Input>
          <p className='signin-text__bold'>Mật khẩu:</p>
          <Input type='password' min="" max="" takeInput={takePasswordInfo}></Input>
          <div style={{alignSelf:'end',marginTop:40+'px',}}>
            <BtnExtra content="Đăng nhập" ></BtnExtra>
          </div>
          <p className='signin-text__light youwantsignup'>Bạn chưa có tài khoản?</p>
          <div style={{alignSelf:'end',marginTop:30+'px',}}>
            <BtnExtra content="Đăng kí" ></BtnExtra>
          </div>

        </div>
      </div>
    );
  }
  
  export default SignUp;