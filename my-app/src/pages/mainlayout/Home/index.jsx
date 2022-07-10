import { Row, Col } from "antd";
import Sidebar from "../../components/layout/Components/Sidebar";
function Home() {
  return (
    <>
    <Row>
      <Col span={6}>
        <Sidebar />
      </Col>
      <Col span={18}>

      </Col>
    </Row> 
    </>
  );
}

export default Home;
