import SilverRank from "../../asset/icon/silverRank.svg";
import GoldenRank from "../../asset/icon/goldenRank.svg";
import DiamondRank from "../../asset/icon/diamondRank.svg";
import "../../sass/profile/userRank.scss";
const UserRank=()=>{
    const rankInfo=[{
        silver:[],
        golden:[],
        diamond:[]
    }
    ]
    return (
        <div style={{
            width:'100%',
            backgroundColor:'#211d1e',
            height:'100%',
            minHeight:'592px',
            borderRadius:'20px',
            display:'flex',
            justifyContent:'center',
            alignItems:'center',

        }}>
            <div className="userRank__container">
                <div className="userRank__icon-container">
                    <div className="userRank__icon-container__item">
                        <img  src={SilverRank} alt="" />
                        <p>Bạc</p>
                        
                    </div>
                    <div className="userRank__icon-container__item">
                        <img  src={GoldenRank} alt="" />
                        <p>Vàng</p>
                    </div>
                    <div className="userRank__icon-container__item">
                        <img  src={DiamondRank} alt="" />
                        <p>Kim cương</p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default UserRank;