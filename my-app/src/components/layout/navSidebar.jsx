import { Col, Row } from "antd";
import logo from '../../asset/logo-icon.png'

function Sider() {
  return (
    <>
      <Row>
        <Col span={6}
            style={{backgroundColor: '#211D1E',
            minWidth: '300px',
            minHeight: '1000px'}}>
            <div className="logo">
                <img src={logo} alt="logo" />
            </div>
        </Col>
      </Row>
    </>
  );
}

export default Sider;