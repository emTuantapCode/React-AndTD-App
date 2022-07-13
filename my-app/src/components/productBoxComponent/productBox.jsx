import { Card, Row, Col } from 'antd';
import React from 'react';

function ProductBox() {
    return (
        <>
            <Card
                hoverable
                style={{
                    width: '230px',
                    height: '324px',
                    borderRadius: '24px',
                    margin: '0 4px',
                    marginBottom : '20px',
                }}
                cover={<img alt="example" style={{
                    width: '230px',
                    height: '260px',
                    borderRadius: '24px',
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
