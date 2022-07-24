import "../../scss/payment/inputPayment.scss";
import { useState } from "react";
const Input=(props)=>{
    const [content,setContent]= useState('');
    const addContent=(e)=>{
        setContent(e.target.value);
        props.addInfo(content);
    }
    return (
        <input placeholder={props.content} type="text" className={props.type} onChange={addContent}/>
    )
}

export default Input;