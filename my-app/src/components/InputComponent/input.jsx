import { useState } from "react";
import "../../sass/inputComponent.scss";

const Input=(props)=>{
    return (
        <>
            <input type={props.type} min={props.min} max={props.max} className='input' />
        </>
    )
}

export default Input;