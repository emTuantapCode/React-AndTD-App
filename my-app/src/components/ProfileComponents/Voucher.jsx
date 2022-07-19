import "../../scss/profile/voucher.scss";
import billIcon from "../../asset/icon/billIcon.svg";
import { BtnSmall } from "../../components/btncomponent/btncomponent";
import "../../scss/font.scss";
const Voucher = () => {
  const userVoucher = [
    "Giảm 200k khi mua bàn phím. HSD đến 30/8/2022",
    "Giảm 500k khi mua bàn phím. HSD đến 30/8/2023",
    "Giảm 200k khi mua bàn phím. HSD đến 30/8/2024",
    "Giảm 200k khi mua bàn phím. HSD đến 30/8/2024",
  ];
  return (
    <div
      style={{
        width: "100%",
        backgroundColor: "#211d1e",
        height: "100%",
        minHeight: "592px",
        borderRadius: "20px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <p className="voucher-Header">Ví voucher</p>
      <div className="voucher__container">
        {userVoucher.map((i) => {
          return (
            <div className="voucher__item">
              <img src={billIcon} className="voucher__icon" alt="" />
              <p className="voucher__text montserrat">{i}</p>
              <BtnSmall content="Dùng ngay"></BtnSmall>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Voucher;
