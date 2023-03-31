

// CSS
import React from "react"
import classes from "./Button.module.sass"

interface Props {
    title:string,
    className?:string
    onClick?:(e:React.MouseEvent) => void
}


const Button = (props:Props) => {



    return(
        <button className={`${classes[props.className || ""]}`} onClick={props.onClick} >{props.title}</button>
    )
}

export default Button