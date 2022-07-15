import { Card, Row, Col } from "antd";
import React from "react";

function ProductBox({ src, index }) {
  return (
    <>
      <Card
        key={index}
        hoverable
        style={{
          width: "100%",
          height: "324px",
          borderRadius: "24px",
          margin: "0 4px",
          marginBottom: "20px",
        }}
        cover={
          <img
            alt="example"
            style={{
              width: "100%",
              height: "260px",
              borderRadius: "24px",
            }}
            src={src}
          />
        }
      >
        <Row>
          <Col></Col>
        </Row>
      </Card>
    </>
  );
}

export default ProductBox;
