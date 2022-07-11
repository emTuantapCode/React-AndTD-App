import Input from "../../../components/InputComponent/input"
import "../../../sass/signin.scss"
import logo from "../../../asset/logo.svg";
import {BtnExtra} from "../../../components/btncomponent/btncomponent"
import "../../../sass/font.scss"

function SignUp() {
    return (
      <div className="signin-container" >
        <div style={{display:'block'}}>
          <img src={logo} style={{paddingBottom:50+'px'}} />
          <p className='signin-text__bold'>Số điện thoại/Email:</p>
          <Input type='password' min="" max=""></Input>
          <p className='signin-text__bold'>Mật khẩu:</p>
          <Input type='password' min="" max=""></Input>
          <BtnExtra content="Đăng nhập" style=
          {{display:'flex',
          justifyContent:'flex-end'
        }}></BtnExtra>
          <p className='signin-text__light'>Bạn chưa có tài khoản?</p>
          <BtnExtra content="Đăng kí" style={{
            display:'flex',
            justifyContent:'flex-end'
        }}></BtnExtra>

        </div>
      </div>
    );
  }
  
  export default SignUp;