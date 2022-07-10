import HeaderHome from "../../components/layout/Components/HeaderHome";
import { Col, Row } from "antd";
import Sidebar from "../../components/layout/Components/Sidebar";
function Home() {
  return (
    <>
      <Row>
        <Col md={4}>
          <Sidebar />
        </Col>
        <Col md={20}>
          <HeaderHome />
        </Col>
      </Row>
    </>
  );
}

export default Home;
