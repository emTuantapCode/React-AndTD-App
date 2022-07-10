import { Col, Row } from "antd";
import NavSider from "../../../components/layout/navSidebar";
import {BtnExtra} from "../../../components/btncomponent/btncomponent"

function Home() {
  return (
    <>
      <Row>
        <Col span={6}>
            <NavSider/>
        </Col>
        <Col span={18}>
          <BtnExtra content={'Buy now'} function="" ></BtnExtra>
        </Col>
      </Row>
    </>
  );
}

export default Home;
