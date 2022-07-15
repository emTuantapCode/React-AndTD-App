import { useState } from "react";
import "../../scss/font.scss"
import "../../scss/BtnSass/Btn.scss";
export const BtnMedium=(props)=>{
    return(

        <>
            <button className={'btn montserrat'} >
                <span  className={'btn-content__medium'}>{props.content}</span>
            </button>
        </>
    )
}

export const BtnLarge=(props)=>{
    
    return (
        <>
            <button className={'btn montserrat'} >
                <span  className={'btn-content__large'}>{props.content}</span>
            </button>
        </>
    )
}

export const BtnExtra=(props)=>{
    
    return (
        <>
            <button className={'btn montserrat'} >
                <span  className={'btn-content__extra'}>{props.content}</span>
            </button>
        </>
    )
}