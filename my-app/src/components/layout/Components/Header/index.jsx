import { Layout, Menu } from "antd";
import React from "react";
const { Header } = Layout;
function NavHeader() {
  return (
    <>
      <Layout className="layout">
        <Header>
          <div className="logo" />
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={["2"]}
            items={new Array(15).fill(null).map((_, index) => {
              const key = index + 1;
              return {
                key,
                label: `nav ${key}`,
              };
            })}
          />
        </Header>
      </Layout>
    </>
  );
}

export default NavHeader;
