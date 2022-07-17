import { Radio } from 'antd';
import React, { useState } from 'react';
import "../../scss/payment/payment.scss";
import "../../scss/payment/inputPayment.scss";
import Input from "../../components/InputComponent/inputPayment";
const PaymentComponent=(props)=>{
    const [value, setValue] = useState(1);
    const onChange = (e) => {
        
        setValue(e.target.value);
    };

    return(
        <>

        <div style={{
            minWidth:'998px',
            minHeight:'1061px',
            backgroundColor:'#211d1e',
            borderRadius:'24px',
        }}>
            <div className="payment__container">
                <div className="payment__infoUser">
                    <p className="payment__title">Thông tin khách hàng</p>
                    <Input content='Họ và tên(bắt buộc)'></Input>
                    <Input content='Số điện thoại (bắt buộc)'></Input>
                    <Input content='Email(Vui lòng nhập email để nhận hóa đơn VAT)'></Input>
                </div>

                <div className="payment__shipWay">
                    <p className="payment__title">Chọn cách thức giao hàng</p>
                    <Radio.Group onChange={onChange} value={value}>
                    <Radio value={1}>Nhận tại cửa hàng</Radio>
                    <Radio value={2}>Giao hàng tại nơi</Radio>
                    </Radio.Group>
                </div>

                

            </div>
        </div>
        </>
    )
}

export default PaymentComponent;