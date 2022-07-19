import { useState } from "react";
import { Row, Col } from "antd";
import "../../../scss/profile/profile.scss";
import { Routes, Route, Link } from "react-router-dom";
import publicRoutes from "../../../Routes";

const Profile = () => {
  let pages = [];
  publicRoutes.map((route) => {
    if (route.routes) {
      pages = [...route.routes];
    }
    return 0;
  });

  return (
    <div style={{ marginTop: 40 + "px" }}>
      <Row>
        <Col span={9}>
          <div className="">
            <Link to="/profile/user">User</Link>
          </div>
          <div className="">
            <Link to="/profile/voucher">voucher</Link>
          </div>
          <div className="">
            <Link to="/profile/rank">rank</Link>
          </div>
          <div className="">
            <Link to="/profile/buylist">history</Link>
          </div>
        </Col>
        <Col span={15}>
          <Routes>
            {pages.map((page, index) => {
              const Page = page.component;
              console.log(Page);
              return (
                <Route element={<Page />} path={page.path} key={index}></Route>
              );
            })}
          </Routes>
        </Col>
      </Row>
    </div>
  );
};
export default Profile;
