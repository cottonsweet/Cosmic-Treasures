// CSS
import classes from "./DefaultHeaderTitle.module.sass"

interface Props {
    title:string,
    className?:string
}

const defaultHeaderTitle = (props:Props) => {
    return(
        <h1 className={classes[props.className || ""]}>{props.title}</h1>
    )
}

export default defaultHeaderTitle