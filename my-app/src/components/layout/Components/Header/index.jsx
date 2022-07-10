import { Layout } from "antd";
import React from "react";
import { Menu } from "antd";
const { Header } = Layout;

function ThisHeader() {
  return (
    <Header>
      <div className="logo" />
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={["2"]}
        items={new Array(1).fill(null).map((_, index) => {
          const key = index + 1;
          return {
            key,
            label: `nav ${key}`,
          };
        })}
      />
    </Header>
  );
}

export default ThisHeader;
