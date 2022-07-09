import { Col, Row, Menu } from 'antd';
import logo from '../../asset/logo-icon.png'
import { SearchOutlined } from '@ant-design/icons';
import { BtnLagre } from '../../components/btncomponent/btncomponent';

const styles = {
    BtnNav: {
        padding: '19 0',
        ':hover':{
            backgroundColor:'#fff',
            cursor: 'poin'
        }
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
                <Col span={1} order={7} className='BtnNav'>Discover</Col>
                <Col span={1} order={7} className='BtnNav'>Job</Col>
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
            <Col span={1} order={7}
            style={{color:'#fff'}}>
                <SearchOutlined />
            </Col>
            <Col span={1} order={7} className='BtnNav'>Login</Col>
            <Col span={1} order={7} className='BtnNav'>Sign Up</Col>
        </Row>
        {/* <BtnLagre btnName={'davace'}/> */}
        <Menu
            mode={'horizontal'}
            style={{
                overflow:'visible',
                lineHeight: '26px',
                border: 'none',
            }}
        >
            <BtnLagre btnName={'davace'}/>
            <BtnLagre btnName={'davace'}/>
            <BtnLagre btnName={'davace'}/>
            <BtnLagre btnName={'davace'}/>
            <BtnLagre btnName={'davace'}/>
            <BtnLagre btnName={'davace'}/>
            <BtnLagre btnName={'davace'}/>
            <BtnLagre btnName={'davace'}/>
        </Menu>
        <Row style={{marginLeft:'20px'}}>
            <Col span={2}>Motion trend pick</Col>
            <Col span={1}>Latest</Col>
            <Col span={2}>Recommended</Col>
            <Col span={19} style={{textAlign:'right'}}>Selection criteria</Col>
        </Row>
        </>
    )
}