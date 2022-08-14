import { Col, Row } from "antd";
import logo from "../../asset/logo-icon.png";
import userIcon from "../../asset/icon/usericon.png";
import { homeI8, listProducts, footer } from "../../i8/homei8";
import { useState } from "react";
import { Layout, Menu } from "antd";
import "../../scss/navSider.scss";
import { useDispatch } from "react-redux";
import { getProducts } from "../../store/actions/fillterAction";
const { Sider } = Layout;
function getItem(label, key, icon, children, type, className) {
  return {
    key,
    icon,
    children,
    label,
    type,
    className,
  };
}

const itemslist = [
  homeI8.phone,
  homeI8.laptop,
  homeI8.keybroad,
  homeI8.others,
].map((value, index) => {
  return getItem(
    value,
    index,
    null,
    Object.entries(listProducts)[index][1].map((value) =>
      getItem(value, value, `>`, null, "LAPTOP")
    ),
    null,
    "productoptions"
  );
});

const rootSubmenuKeys = [
  "ĐIỆN THOẠI NỔI BẬT NHẤT",
  "LAPTOP",
  "MÀN HÌNH, MÁY TÍNH ĐỂ BÀN",
  "MÁY TÍNH BẢNG",
];

function NavSider() {
  const [openKeys, setOpenKeys] = useState(["ĐIỆN THOẠI NỔI BẬT NHẤT"]);

  const log = (keys) => {
    setOpenKeys(keys[keys.length - 1]);
  };

  const dispatch = useDispatch();
  const handleFillerChange = (type, value) => {
    console.log({
      type,
      value,
    });
    dispatch(
      getProducts({
        type,
        value,
      })
    );
  };

  return (
    <>
      <Col span={6} className="containerSider">
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="containerMenu">
          <div className="userWellcome">
            <Row className="user">
              <Col className="user-icon">
                <img src={userIcon} alt="user" />
              </Col>
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
                onClick={({ key }) => {
                  handleFillerChange(rootSubmenuKeys[openKeys], key);
                }}
                onOpenChange={log}
              />
            </Sider>
          </div>
        </div>
        <div className="footer">
          <hr />
          <div className="license">{footer.license}</div>
          <p>{footer.contact}</p>
        </div>
      </Col>
    </>
  );
}

export default NavSider;
