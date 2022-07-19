import { Card, Col, Row } from "antd";
import React from "react";
import { BtnMedium } from "../btncomponent/btncomponent";

function ProductBox({ src, index, name, price }) {
  return (
    <>
      <Card
        key={index}
        hoverable
        style={{
          width: "100%",
          borderRadius: "24px",
          margin: "0 4px",
          marginBottom: "20px",
        }}
        cover={
          <img
            alt="example"
            style={{
              height: "100%",
              width: "100%",
              borderRadius: "24px",
            }}
            src={src}
          />
        }
      >
        <Row>
          <Col style={{ minHeight: "50px" }}>{name}</Col>
        </Row>
        <Row>
          <Col style={{ minHeight: "50px" }}>Giá : {price}</Col>
        </Row>
        <Row justify="space-between">
          <Col span={6}>
            <BtnMedium content="MUA"></BtnMedium>
          </Col>
          <Col span={15}>
            <BtnMedium content="Thêm vào Giỏ"></BtnMedium>
          </Col>
        </Row>
      </Card>
    </>
  );
}
export default ProductBox;
