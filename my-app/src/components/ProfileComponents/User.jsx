import Avatar from "../../asset/icon/avatar.svg";
import Cake from "../../asset/icon/cake.svg";
import Phone from "../../asset/icon/phone2.svg";
import Calender from "../../asset/icon/calender.svg";
import Medal from "../../asset/icon/medal2.svg";
import "../../sass/profile/user.scss";

const User=(props)=> {
    return (
        <div className="user-container">
            <img className='user-avatar' src={Avatar}></img>
            <p className='user-userName'>User Name</p>
            <div className='user-info'>
                <div className='user-info--item'>
                    <img className="user-info--icon" src={Cake} alt="" />
                    <p className='user-info--text'>User Birthday</p>
                </div>
                <div className='user-info--item'>
                    <img className="user-info--icon" src={Phone} alt="" />
                    <p className='user-info--text'>Phone Number</p>
                </div>
                <div className='user-info--item'>
                    <img className="user-info--icon" src={Calender} alt="" />
                    <p className='user-info--text'>Sign-up-date</p>
                </div>
                <div className='user-info--item'>
                    <img className="user-info--icon" src={Medal} alt="" />
                    <p className='user-info--text'>Ranking</p>
                </div>
            </div>
        </div>
    )
}

export default User;