// CSS
import classes from "./Input.module.sass"

interface Props {
    type:string,
    name?:string,
    placeholder?:string,
    value?:string,
    className?:string
}


const Input = (props:Props) => {
    return(
        <input type={props.type} name={props.name} placeholder={props.placeholder} value={props.value} className={`${classes[props.className || ""]}`} required />
    )
}

export default Input