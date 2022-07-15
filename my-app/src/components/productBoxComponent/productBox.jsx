import { Card, Row } from "antd";
import React from "react";
import { BtnLagre } from "../btncomponent/btncomponent";

function ProductBox({ src, index, name }) {
  return (
    <>
      <Card
        key={index}
        hoverable
        style={{
          width: "100%",
          height: "100%",
          borderRadius: "24px",
          margin: "0 4px",
          marginBottom: "20px",
        }}
        cover={
          <img
            alt="example"
            style={{
              width: "100%",
              borderRadius: "24px",
            }}
            src={src}
          />
        }
      >
        <Row>
          Tên sản phẩm : {name} <BtnLagre content="MUA"></BtnLagre>
        </Row>
      </Card>
    </>
  );
}

export default ProductBox;
