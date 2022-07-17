import "../../scss/profile/voucher.scss";
import billIcon from "../../asset/icon/billIcon.svg";
import {BtnSmall} from "../../components/btncomponent/btncomponent";
const Voucher=()=>{
    return(
    <div style={{
        width:'100%',
        backgroundColor:'#211d1e',
        height:'100%',
        minHeight:'592px',
        borderRadius:'20px',
        display:'flex',
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',

    }}>
        <p className='voucher-Header'>Ví voucher</p>
        <div className='voucher__container'>
            <div className='voucher__item'>
                <img src={billIcon}/>
                <p className='voucher__text'></p>
                <BtnSmall content='Dùng ngay'></BtnSmall>
            </div>
        </div>
    </div>)
}
export default Voucher;