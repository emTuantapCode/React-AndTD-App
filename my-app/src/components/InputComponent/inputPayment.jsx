import "../../scss/payment/inputPayment.scss";
const Input=(props)=>{
    return (
        <input placeholder={props.content} type="text" className="inputPayment"/>
    )
}

export default Input;