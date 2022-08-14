import { Radio } from "antd";
import React, { useState } from "react";
import "../../scss/payment/payment.scss";
import Input from "../../components/InputComponent/inputPayment";
import "../../scss/font.scss";
import "../../scss/payment/inputPayment.scss";
import NavBar from "../../components/layout/Components/NavBar/NavBar";
import { BtnMedium } from "../btncomponent/btncomponent";
const PaymentComponent = (props) => {
  const [value, setValue] = useState(1);
  const onChange = (e) => {
    setbuyInfo((prev) => {
      return { ...prev, shipWay: value };
    });
    setValue(e.target.value);
  };

  const [buyInfo, setbuyInfo] = useState({
    name: "",
    phone: "",
    email: "",
    shipWay: "",
    tenMien: "",
    tinh: "",
    quan: "",
    store: "",
    note: "",
  });

  const addName = (name) => {
    setbuyInfo((prev) => {
      return { ...prev, name: name };
    });
  };

  const addPhone = (phone) => {
    setbuyInfo((prev) => {
      return { ...prev, phone: phone };
    });
  };

  const addEmail = (email) => {
    setbuyInfo((prev) => {
      return { ...prev, email: email };
    });
  };

  const addTenMien = (tenMien) => {
    setbuyInfo((prev) => {
      return { ...prev, tenMien: tenMien };
    });
  };

  const addTinh = (tinh) => {
    setbuyInfo((prev) => {
      return { ...prev, tinh: tinh };
    });
  };

  const addQuan = (quan) => {
    setbuyInfo((prev) => {
      return { ...prev, quan: quan };
    });
  };

  const addStore = (store) => {
    setbuyInfo((prev) => {
      return { ...prev, store: store };
    });
  };

  const addNote = (note) => {
    setbuyInfo((prev) => {
      return { ...prev, note: note };
    });
  };
  const check = () => {
    
  };
  console.log(buyInfo);
  return (
    <>
      <NavBar></NavBar>
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div className="payment__container">
          <div className="payment__infoUser">
            <p className="payment__title montserrat">Thông tin khách hàng</p>
            <Input
              content="Họ và tên(bắt buộc)"
              type="inputPayment--large"
              addInfo={addName}
            ></Input>
            <Input
              content="Số điện thoại (bắt buộc)"
              type="inputPayment--large"
              addInfo={addPhone}
            ></Input>
            <Input
              content="Email(Vui lòng nhập email để nhận hóa đơn VAT)"
              type="inputPayment--large"
              addInfo={addEmail}
            ></Input>
          </div>

          <div className="payment__shipWay">
            <p className="payment__title montserrat">
              Chọn cách thức giao hàng
            </p>
            <Radio.Group onChange={onChange} value={value}>
              <Radio value={1}>Nhận tại cửa hàng</Radio>
              <Radio value={2}>Giao hàng tại nơi</Radio>
            </Radio.Group>
          </div>

          <div className="payment__address">
            <div className="payment__address-item--small">
              <Input
                content="Tên miền"
                type="inputPayment--small"
                addInfo={addTenMien}
              ></Input>
              <Input
                content=" Tỉnh/Thành phố"
                type="inputPayment--small"
                addInfo={addTinh}
              ></Input>
            </div>

            <div className="payment__address-item--large">
              <Input
                content="Quận/Huyện"
                type="inputPayment--medium"
                addInfo={addQuan}
              ></Input>
            </div>

            <div className="payment__address-item--large">
              <Input
                content="Chọn vị trí cửa hàng"
                type="inputPayment--medium"
                addInfo={addStore}
              ></Input>
            </div>
          </div>

          <div className="payment__note">
            <Input
              type="inputPayment--medium"
              content="Yêu cầu khác"
              addInfo={addNote}
            />
          </div>
          <div onClick={check}>
            <BtnMedium content="Hoàn thành"></BtnMedium>
          </div>
        </div>
      </div>
    </>
  );
};

export default PaymentComponent;
