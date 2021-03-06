import SilverRank from "../../asset/icon/silverRank.svg";
import GoldenRank from "../../asset/icon/goldenRank.svg";
import DiamondRank from "../../asset/icon/diamondRank.svg";
import { Steps } from 'antd';
import "../../scss/profile/userRank.scss";
const UserRank=()=>{
    const rankUser=2;
    const rankInfo=[
        {
            title:"Điều kiện lên vàng",
            condition:"Tổng số tiền tiêu dùng tích lũy trong vòng 12 tháng đạt trên 15 triệu đồng",
            endow:'Ưu đãi hạng bạc',
            endowContent:['Miễn phí vận chuyển','Giảm 1% trên tổng giá trị đơn hàng trên 100k']
        },
        {
            title:"Điều kiện lên kim cương",
            condition:"Tổng số tiền tiêu dùng tích lũy trong vòng 12 tháng đạt trên 50 triệu đồng",
            endow:'Ưu đãi hạng vàng',
            endowContent:['Miễn phí vận chuyển','Giảm 10% trên tổng giá trị đơn hàng trên 100k']
        }
        ,
        {
            endow:'Ưu đãi hạng kim cương',
            endowContent:['Miễn phí vận chuyển','Giảm 50% trên tổng giá trị đơn hàng trên 100k']
        }
        
    
    ]
    const { Step } = Steps;
    const show=(props)=>{
        return(
            <div style={{marginLeft:'87px'}}>
                <p className="rankInfo__title">{rankInfo[props]?.title}</p>
                <p className="rankInfo__condition">{rankInfo[props]?.condition}</p>
                <p className="rankInfo__endow">{rankInfo[props].endow}</p>
                {rankInfo[props].endowContent.map((content,i)=>{return (<p key={i} className="rankInfo__endowContent">{content}</p>)})}
            </div>
        )

    }
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
                        <img  className="userRank__icon-container__item--icon" src={SilverRank} alt="" />
                        <p className="userRank__icon-container__item--text">Bạc</p>
                        
                    </div>
                    <div className="userRank__icon-container__item">
                        <img style={{marginLeft:'9px'}}  className="userRank__icon-container__item--icon" src={GoldenRank} alt="" />
                        <p className="userRank__icon-container__item--text">Vàng</p>
                    </div>
                    <div className="userRank__icon-container__item">
                        <img  className="userRank__icon-container__item--icon" src={DiamondRank} alt="" />
                        <p className="userRank__icon-container__item--text">Kim cương</p>
                    </div>
                </div>
                <Steps progressDot current={rankUser}>
                    <Step  />
                    <Step  />
                    <Step  />
                </Steps>
                {show(rankUser)}

            </div>
        </div>
    )
}

export default UserRank;