import { Card, Col, Row } from "antd";
import React from "react";
import { BtnMedium, BtnSmall } from "../btncomponent/btncomponent";

function ProductBox({ src, index, name }) {
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
          <Col style={{ minHeight: "50px" }}>Tên sản phẩm : {name}</Col>
        </Row>
        <Row justify="space-between">
          <Col style={{width:"100%"}} span={6}>
            <BtnSmall content="MUA"></BtnSmall>
          </Col>
          <Col style={{width:"100%"}} span={6}>
            <BtnSmall content="MUA"></BtnSmall>
          </Col>
        </Row>
      </Card>
    </>
  );
}
export default ProductBox;
