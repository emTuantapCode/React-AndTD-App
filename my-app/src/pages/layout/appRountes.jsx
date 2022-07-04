import { useState } from "react";
import { Navigate, Route, Routes, useNavigate, Link } from "react-router-dom";
import { Layout, Menu, Button } from 'antd';
import {
    AppstoreOutlined,
    ContainerOutlined,
    DesktopOutlined,
    MailOutlined,
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    PieChartOutlined,
} from '@ant-design/icons';

function getItem(label, key, icon, children, type) {
    return {
        key,
        icon,
        children,
        label,
        type,
    };
};
function loginRedirect() {

}

const items = [
    getItem('Option 1', '1', <PieChartOutlined />),
    getItem('Option 2', '2', <DesktopOutlined />),
    getItem('Option 3', '3', <ContainerOutlined />),
    getItem('Navigation One', 'sub1', <MailOutlined />, [
        getItem('Option 5', '5'),
        getItem('Option 6', '6'),
        getItem('Option 7', '7'),
        getItem('Option 8', '8'),
    ]),
    getItem('Navigation Two', 'sub2', <AppstoreOutlined />, [
        getItem('Option 9', '9'),
        getItem('Option 10', '10'),
        getItem('Submenu', 'sub3', null, [getItem('Option 11', '11'), getItem('Option 12', '12')]),
    ]),
];

const { Header, Content, Footer, Sider } = Layout;
export const ManageRoute = () => {
    const [collapsed, setCollapsed] = useState(false);
    const toggleCollapsed = () => {
        setCollapsed(!collapsed);
    };
    return (
        <>
            <Layout hasSider>
                <Sider
                    style={{
                        overflow: 'auto',
                        height: '100vh',
                        position: 'fixed',
                        left: 0,
                        top: 0,
                        bottom: 0,
                        backgroundColor: '#ef6837',
                        paddingTop: 40,
                    }}
                >
                    <Menu>
                        <div
                            style={{
                                width: 256,
                            }}
                        >
                            <Button
                                type="primary"
                                onClick={toggleCollapsed}
                                style={{
                                    marginBottom: 16,
                                }}
                                onClickCapture={() => { loginRedirect() }}
                            >
                                <Link
                                    to={'/login'}
                                    key={1}
                                >
                                    Login
                                </Link>
                            </Button>
                            <Menu
                                defaultSelectedKeys={['1']}
                                defaultOpenKeys={['sub1']}
                                mode="inline"
                                inlineCollapsed={collapsed}
                                items={items}
                            />
                        </div>
                    </Menu>
                </Sider>
                <Layout
                    className="site-layout"
                    style={{
                        marginLeft: 200,
                    }}
                >
                    <Header
                        className="site-layout-background"
                        style={{
                            padding: 0,
                            textAlign: 'center'
                        }}
                    >
                        <div> Slide show </div>
                    </Header>
                    <Content
                        style={{
                            overflow: 'initial',
                        }}
                    >
                        <div
                            className="site-layout-background"
                            style={{
                                padding: 24,
                                textAlign: 'center',
                            }}
                        >
                            ...
                            <br />
                            Really
                            <br />
                            ...
                            <br />
                            ...
                            <br />
                            ...
                            <br />
                            long
                            <br />
                            ...
                            <br />
                            ...
                            <br />
                            ...
                            <br />
                            ...
                            <br />
                            ...
                            <br />
                            ...
                            <br />
                            ...
                            <br />
                            ...
                            <br />
                            ...
                            <br />
                            ...
                            <br />
                            ...
                            <br />
                            ...
                            <br />
                            ...
                            <br />
                            ...
                            <br />
                            ...
                            <br />
                            ...
                            <br />
                            ...
                            <br />
                            ...
                            <br />
                            ...
                            <br />
                            ...
                            <br />
                            ...
                            <br /> ...
                            <br />
                            ...
                            <br />
                            ...
                            <br />
                            ...
                            <br />
                            ...
                            <br />
                            content
                        </div>
                    </Content>
                    <Footer
                        style={{
                            textAlign: 'center',
                        }}
                    >
                        Ant Design ©2018 Created by Ant UED
                    </Footer>
                </Layout>
            </Layout>
        </>
    )
}