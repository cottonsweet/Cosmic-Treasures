

// CSS
import classes from "./Button.module.sass"

interface Props {
    title:string,
    className?:string
}


const Button = (props:Props) => {



    return(
        <div className={`${classes[props.className || ""]}`} >{props.title}</div>
    )
}

export default Button