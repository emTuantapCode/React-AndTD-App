import { Col, Row } from "antd";
import logo from '../../asset/logo-icon.png'
import userIcon from '../../asset/icon/Group 10.png'
import { Dropdown, Menu, Space } from 'antd';
import { homeI8 } from "../../i8/homei8";

const dropdownMenu = {
     menuLaptop : (
        <Menu
          items={[
            {
              label: <a href="#">Laptop MSI</a>,
              key: '0',
            },
            {
                type: 'divider',
            },
            {
              label: <a href="#">Laptop Asus</a>,
              key: '1',
            },
            {
              type: 'divider',
            },
            {
              label: <a href="#">Laptop Dell</a>,
              key: '2',
            },
          ]}
        />
      ),
      menuPhone : (
        <Menu
          items={[
            {
              label: <a href="#">Iphone</a>,
              key: '0',
            },
            {
                type: 'divider',
            },
            {
              label: <a href="#">Samsung</a>,
              key: '1',
            },
            {
              type: 'divider',
            },
            {
              label: <a href="#">Xiaomi</a>,
              key: '2',
            },
            {
                type: 'divider',
              },
              {
                label: <a href="#">Huawei</a>,
                key: '3',
              },
          ]}
        />
      )

        }
function Sider() {
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
                                <Col>{homeI8.wellcom} Username</Col>
                            </Row>
                        </div>
                        <div className="siderMenu">
                        <Menu
      onClick={onClick}
      style={{ width: 256 }}
      defaultSelectedKeys={['1']}
      defaultOpenKeys={['sub1']}
      mode="inline"
      items={items}
    />
                        </div>
                    </div>
                </Col>
            </Row>
        </>
    );
}

export default Sider;