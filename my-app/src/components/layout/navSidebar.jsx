import { Col, Row } from "antd";
import logo from '../../asset/logo-icon.png';
import userIcon from '../../asset/icon/usericon.png';
import { homeI8, listProducts, footer } from "../../i8/homei8";
import React from 'react';
import { Layout, Menu } from "antd";
import '../../scss/navSider.scss';


const { Sider } = Layout;
const itemslist = [homeI8.laptop, homeI8.phone, homeI8.keybroad, homeI8.others].map(
  (value, index) => {
    const key = String(index + 1);
    return {
      key: `sub${key}`,
      label: `${value}`,
      className: 'productoptions',
      children: Object.entries(listProducts)[index][1].map((value, j) => {
        const subKey = index * 4 + j + 1;
        return {
          key: subKey,
          label: `${value}`,
        };
      }),
    };
  }
);

function NavSider() {
  return (
    <>
      <Row>
        <Col span={6} className="containerSider">
          <div className="logo">
            <img src={logo} alt="logo" />
          </div>
          <div className="containerMenu">
            <div className="userWellcome">
              <Row>
                <Col className="user-icon"><img src={userIcon} alt="user"/></Col>
                <Col className="user-name">{homeI8.wellcom} Username</Col>
              </Row>
            </div>
            <div className="siderMenu">
              <Sider width="100%" className="site-layout-background">
                <Menu
                  mode="inline"
                  style={{
                    height: "100%",
                    borderRight: 0,
                  }}
                  items={itemslist}
                />
              </Sider>
            </div>
          </div>
          <div className="footer">
            <div className="license">{footer.license}</div>
            <p>{footer.contact}</p>
          </div>
        </Col>
      </Row>
    </>
  );
}

export default NavSider;
