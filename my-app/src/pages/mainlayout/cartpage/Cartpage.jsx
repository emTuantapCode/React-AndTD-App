import NavBar from "../../../components/layout/Components/NavBar/NavBar";
import { Checkbox, Col, Row } from 'antd';
import React, { useState } from 'react';
import '../../../scss/CartPage.scss'

const CheckboxGroup = Checkbox.Group;

const plainOptions = ['Apple', 'Pear', 'Orange'];
const defaultCheckedList = ['Apple', 'Orange'];

const CartWaiting = () => {
    const [checkedList, setCheckedList] = useState < CheckboxValueType[] > (defaultCheckedList);
    const [indeterminate, setIndeterminate] = useState(true);
    const [checkAll, setCheckAll] = useState(false);

    const onChange = (list) => {
        setCheckedList(list);
        setIndeterminate(!!list.length && list.length < plainOptions.length);
        setCheckAll(list.length === plainOptions.length);
    };

    const onCheckAllChange = (e) => {
        setCheckedList(e.target.checked ? plainOptions : []);
        setIndeterminate(false);
        setCheckAll(e.target.checked);
    };
    return (
        <>
            <NavBar />
            <Row>
                <Col span={18} offset={3} className="container-checkbox">
                    <Checkbox indeterminate={indeterminate} onChange={onCheckAllChange} checked={checkAll}>
                        Check all
                    </Checkbox>
                    <CheckboxGroup options={plainOptions} value={checkedList} onChange={onChange} />
                </Col>
            </Row>
        </>
    )
}

export default CartWaiting;
