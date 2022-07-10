import { useState } from "react";
import "../../asset/fontCss/font.css";
import "../../asset/color/color.css"
export const BtnMedium=(props)=>{
    const [isHover,setIsHover]=useState(false);
    return (
        <>
            <button style={{
                display:'inline-block',
                border:'none',
                borderRadius:12+'px',
                cursor:'pointer'
            }}  className={`montserrat ${isHover==true ?"redHover":"red"}`}  onMouseEnter={()=>{
             return setIsHover(true)}} onMouseLeave={()=>{
                
                setIsHover(false)}}>
                <span  style={{
                    color:"000",
                    fontSize:15+'px',
                    textTransform:'uppercase',
                    display: 'flex',
                    alignItems:'center',
                    justifyContent:'center',
                    padding: 6+'px'
                }}>{props.content}</span>
            </button>
        </>
    )
}
export const BtnLarge=(props)=>{
    const [isHover,setIsHover]=useState(false);
    return (
        <>
            <button style={{
                display:'inline-block',
                border:'none',
                borderRadius:12+'px',
                cursor:'pointer'
            }}  className={`montserrat ${isHover==true ?"redHover":"red"}`}  onMouseEnter={()=>{
             return setIsHover(true)}} onMouseLeave={()=>{
                
                setIsHover(false)}}>
                <span  style={{
                    color:"000",
                    fontSize:25+'px',
                    textTransform:'uppercase',
                    display: 'flex',
                    alignItems:'center',
                    justifyContent:'center',
                    padding: 6+'px'
                }}>{props.content}</span>
            </button>
        </>
    )
}

export const BtnExtra=(props)=>{
    const [isHover,setIsHover]=useState(false);
    return (
        <>
            <button style={{
                display:'inline-block',
                border:'none',
                borderRadius:12+'px',
                cursor:'pointer'
            }}  className={`montserrat ${isHover==true ?"redHover":"red"}`}  onMouseEnter={()=>{
             return setIsHover(true)}} onMouseLeave={()=>{
                
                setIsHover(false)}}>
                <span  style={{
                    color:"000",
                    fontSize:25+'px',
                    textTransform:'uppercase',
                    display: 'flex',
                    alignItems:'center',
                    justifyContent:'center',
                    paddingTop: 6+'px',
                    paddingBottom:6+'px',
                    paddingLeft:60+'px',
                    paddingRight:60+'px'
                }}>{props.content}</span>
            </button>
        </>
    )
}
