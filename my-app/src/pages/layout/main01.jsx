import { Col, Row } from 'antd';
import logo from '../../asset/logo-icon.png'

const styles = {
    BtnHover: {
        '&:hover':{
            backgroundColor: '#fff',
        },
    },
};
export const MainPage = () => {
    return (
        <>
            <Row style={{
                backgroundColor: '#070707',
                with: 1920,
                height: 60,
                margin: '0 0 10',
                padding: '20 29 12',
                color: '#8f8f8f',
                textAlign: 'center',
                alignItems: 'center'

            }}>
                <Col span={4} order={7}>
                    <img src={logo} alt="logo"
                        style={{
                            padding: 20,
                        }} />
                </Col>
                <Col span={1} order={7}
                    className='BtnHover'
                    style={{
                        padding: '19 0',
                    }}
                >Discover</Col>
                <Col span={1} order={7}>Job</Col>
                <Col span={15} order={7}>
                    <div className="searchInput"
                        style={{
                            width: 600,
                            borderBottom: '1px solid #fff',
                            margin: '0 auto'
                        }}>
                    <input type="text"
                        placeholder='Search for motion trend......'
                        style={{
                            backgroundColor: '#070707',
                            width: 600,
                            border: 'none',
                            borderBottom: '1 soild #fff',
                            borderColor: '#fff'
                        }}
                    />
                </div>
            </Col>
            <Col span={1} order={7}></Col>
            <Col span={1} order={7}>Login</Col>
            <Col span={1} order={7}>Sign Up</Col>
        </Row>
        </>
    )
}