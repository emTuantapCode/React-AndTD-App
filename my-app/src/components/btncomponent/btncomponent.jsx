import { useState } from "react";
import "../../sass/font.scss"
import "../../sass/BtnSass/Btn.scss";
export const BtnMedium=(props)=>{
    const [isHover,setIsHover]=useState(false);
    return (
        <>
            <button className={'btn montserrat'} >
                <span  className={'btn-content__medium'}>{props.content}</span>
            </button>
        </>
    )
}
export const BtnLarge=(props)=>{
    const [isHover,setIsHover]=useState(false);
    return (
        <>
            <button className={'btn montserrat'} >
                <span  className={'btn-content__large'}>{props.content}</span>
            </button>
        </>
    )
}

export const BtnExtra=(props)=>{
    const [isHover,setIsHover]=useState(false);
    return (
        <>
            <button className={'btn montserrat'} >
                <span  className={'btn-content__extra'}>{props.content}</span>
            </button>
        </>
    )
}