import { useState } from "react";

const Input=(props)=>{
    const [isFocus,setIsFocus]=useState(false);
    
    let styles=isFocus?{
        width: 300+'px',
        backgroundColor:'#fff',
        border:'none',
        outline:'none',
        borderRadius:24+'px',
        }:{
            outline:'none',
            width: 300+'px',
            backgroundColor:'#d9d9d9',
            borderRadius:24+'px',
            border:'none',
        }
    return (
        <>
            <input type={props.type} min={props.min} max={props.max} style={styles} onFocus={()=>setIsFocus(true)} onBlur={()=>setIsFocus(false)}  />
        </>
    )
}

export default Input;