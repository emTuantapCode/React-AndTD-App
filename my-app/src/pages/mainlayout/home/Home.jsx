import { Col, Row } from "antd";
import NavSider from "../../../components/layout/navSidebar";
import Popup from "../../Popup";
function Home() {
  return (
    <>
      <Popup />
      <Row>
        <Col span={6}>
          <NavSider />
        </Col>
        <Col span={18}>Hello2</Col>
      </Row>
    </>
  );
}

export default Home;
