import { Card, Row, Col } from 'antd';
import React from 'react';

function ProductBox() {
    return (
        <>
            <Card
                hoverable
                style={{
                    width: '256px',
                    height: '324px',
                    borderRadius: '24px',
                    margin: '0 4px',
                    marginBottom : '20px',
                    border: '1px solid',
                    // padding: '10px',
                    // boxShadow: '5px 10px',
                }}
                cover={<img alt="example" style={{
                    width: '256px',
                    height: '260px',
                    borderRadius: '24px',
                    padding: '0',
                }}
                    src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
            >
                <Row>
                    <Col></Col>
                </Row>
            </Card>
        </>
    );
}

export default ProductBox;
