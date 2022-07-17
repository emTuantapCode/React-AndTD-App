import logo from "../../../../asset/logo-icon.png"
import notification from '../../../../asset/icon/Notificatons.svg'
import cart from '../../../../asset/icon/Cart.svg'
import user from '../../../../asset/icon/User.svg'
import '../../../../scss/Navbar.scss'
import { Row, Col } from "antd";

const handletoNotify = ()=>{
    console.log('success')
}
const handletoCart = ()=>{
    console.log('success')
}
const handletoProfile = ()=>{
    console.log('success')
}

const NavBar = () => {
    return (
        <>
            <Row className="container-nav">
                <Col span={6}>
                    <div className="logo">
                        <img src={logo} alt="logo" />
                    </div>
                </Col>
                <Col span={4} offset={14}>
                    <Row>
                        <Col onClick={handletoNotify} offset={1} className="icon-nav">
                            <img src={notification}/>    
                        </Col>
                        <Col onClick={handletoCart} offset={1} className="icon-nav">
                            <img src={cart}/>    
                        </Col>
                        <Col onClick={handletoProfile} offset={1} className="icon-nav">
                            <img src={user}/>    
                        </Col>
                    </Row>
                </Col>
            </Row>
        </>
    )
}

export default NavBar;
