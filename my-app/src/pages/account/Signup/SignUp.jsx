// import {useState} from "react";
// import Input from "../../../components/InputComponent/input"
// import "../../../sass/signin.scss"
// import logo from "../../../asset/logo.svg";
// import {BtnExtra} from "../../../components/btncomponent/btncomponent";
// import "../../../sass/font.scss";
// import "../../../sass/signinsignup/someText.scss";
// function ValidateEmail(inputText)
// {
//   let oRegex = /[\w-\.]+@([\w-]+\.)+[\w-]{2,4}/g;
//   return (oRegex.test(inputText.trim()))
// }
// function ValidatePhone(inputText)
// { 
//   let oRegex = /^(0|\+84)(\s|\.)?((2[0-9][0-9])|(3[2-9])|(5[689])|(7[06-9])|(8[1-9])|(9[0-46-9]))(\d)(\s|\.)?(\d{3})(\s|\.)?(\d{3})$/;
//   return (oRegex.test(inputText.trim()))
// }
// function SignUp() {
//   const [submit,setSubmit] =useState(false);
//     const [info,setInfo]=useState({
//       email:'',
//       phone:'',
//       password:''
//     })
    
//     let notiUserName='';
//     let notiPassword='';

//     const takeUserNameInfo=(enteredInput)=>{
//       let email='';
//       let phone='';
//       if(ValidateEmail(enteredInput)) email=enteredInput;
//       else if(ValidatePhone(enteredInput)) phone=enteredInput;
//       if(enteredInput.length===0) notiUserName='';
//       setInfo(prev=>{
//         return {...prev,email:email,phone:phone}
//       })
//     }
//     const takePasswordInfo=(password)=>{
//       if(password.length===0) notiPassword='';
//       setInfo(prev=>{
//         return {...prev,password:password}
//       })
//     }
    
//     if(submit===true) {

//     }
//     const onSubmit=()=>{
//       setSubmit(true);
//     }

//     console.log(info);
//     return (
//       <div className="signin-container" >
//         <div style={{
//           display:'flex',
//           flexDirection:'column',
//           alignItems:'flex-start',
//           }}>
//           <img src={logo} style={{paddingBottom:50+'px'}} />
//           <p className='signin-text__bold'>Số điện thoại/Email:</p>
//           <Input type='text' min="" max="" takeInput={takeUserNameInfo} ></Input>
//           <p>{submit?notiUserName:''}</p>
//           <p className='signin-text__bold'>Mật khẩu:</p>
//           <Input type='password' min="" max="" takeInput={takePasswordInfo}></Input>
//           <p>{submit?notiPassword:''}</p>
//           <div style={{alignSelf:'end',marginTop:40+'px',}} onClick={onSubmit}>
//             <BtnExtra content="Đăng nhập" ></BtnExtra>
//           </div>
//           <a className='signin-text__light youwantsignup'>Bạn chưa có tài khoản?</a>
//           <div style={{alignSelf:'end',marginTop:30+'px',}} onClick={onSubmit}>
//             <BtnExtra content="Đăng kí" ></BtnExtra>
//           </div>

//         </div>
//       </div>
//     );
//   }
  
//   export default SignUp;