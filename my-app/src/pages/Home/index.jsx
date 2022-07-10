import NavHeader from "../../components/layout/Components/Header";
import { Row } from "antd";
import Sidebar from "../../components/layout/Components/Sidebar";
function Home() {
  return (
    <>
      <NavHeader />
      <Row>
        <Sidebar />
      </Row>
    </>
  );
}

export default Home;
