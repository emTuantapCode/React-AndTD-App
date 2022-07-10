import { Col, Row } from "antd";
import NavSider from "../../../components/layout/navSidebar";

function Home() {
  return (
    <>
      <Row>
        <Col span={6}>
            <NavSider/>
        </Col>
        <Col span={18}>Hello2</Col>
      </Row>
    </>
  );
}

export default Home;
