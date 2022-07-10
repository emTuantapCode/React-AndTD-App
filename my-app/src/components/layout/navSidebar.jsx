import { Col, Row } from "antd";
import logo from '../../asset/logo-icon.png'
import userIcon from '../../asset/icon/Group 10.png'
import { homeI8 } from "../../i8/homei8";
import React from 'react';
import { Layout, Menu } from "antd";

const { Sider } = Layout;
const itemslist = [homeI8.laptop,homeI8.phone,homeI8.keybroad,homeI8.others].map(
  (value, index) => {
    const key = String(index + 1);
    return {
      key: `sub${key}`,
      label: `${value}`,
      children: new Array(4).fill(null).map((_, j) => {
        const subKey = index * 4 + j + 1;
        return {
          key: subKey,
          label: `option${subKey}`,
        };
      }),
    };
  }
);

function NavSider() {
  return (
    <>
      <Row>
        <Col span={6}
          style={{
            backgroundColor: '#211D1E',
            minWidth: '300px',
            minHeight: '1000px',
          }}>
          <div className="logo">
            <img src={logo} alt="logo" />
          </div>
          <div className="containerMenu">
            <div className="userWellcome">
              <Row>
                <Col><img src={userIcon} alt="user" /></Col>
                <Col style={{color:'#fff'}}>{homeI8.wellcom} Username</Col>
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
        </Col>
      </Row>
    </>
  );
}

export default NavSider;
