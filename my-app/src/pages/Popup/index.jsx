import React, { useState } from "react";
import "../../sass/popup.scss";
import logo from "../../asset/logo-icon.png";
import fb from "../../asset/icon/Vector.svg";
import gm from "../../asset/icon/Vector (1).svg";
const Popup = (prop) => {
  const [isModalVisible, setIsModalVisible] = useState(true);
  const style = !isModalVisible
    ? {
        display: "none",
      }
    : {};
  return (
    <>
      <div
        className="Popup"
        onClick={(e) => {
          setIsModalVisible(!isModalVisible);
          e.stopPropagation();
        }}
        style={style}
      >
        <div
          className="Popup-inner"
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          <div className="logo">
            <img src={logo} alt="" width="100%" />
          </div>
          <div className="text">
            <span>Vui lòng nhập thao tác</span>
          </div>
          <div className="Sdt item">
            <span>Đăng nhập bằng SĐT hoặc Email</span>
          </div>
          <div
            className="Fb item"
            onClick={() => {
              console.log("Success!");
            }}
          >
            <span>
              Đăng nhập với Facebook
              <img src={fb} alt="" height="20px" />
            </span>
          </div>
          <div
            className="GM item"
            onClick={() => {
              console.log("Success!");
            }}
          >
            <span>
              Đăng nhập với Gmail <img src={gm} alt="" height="20px" />
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Popup;
