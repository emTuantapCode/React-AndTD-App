import logo from "../../../../asset/logo-icon.png"
import { Row, Col } from "antd";

const NavBar = () => {
    return (
        <>
            <Row>
                <Col span={6}>
                    <div className="logo">
                        <img src={logo} alt="logo" />
                    </div>
                </Col>
                <Col span={4} offset={14}>
                    col-8
                </Col>
            </Row>
        </>
    )
}

export default NavBar;
