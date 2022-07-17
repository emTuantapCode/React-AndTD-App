import { useState } from "react";
import "../../scss/signinsignup/inputComponent.scss";

const Input=(props)=>{
    const [enteredInput,setEnteredInput]=useState('');
    const getInput=(e)=>{
        setEnteredInput(e.target.value);
        props.takeInput(enteredInput);
    }
    return (
        <>
            <input type={props.type} min={props.min} max={props.max} className='input' onChange={getInput}/>
        </>
    )
}

export default Input;