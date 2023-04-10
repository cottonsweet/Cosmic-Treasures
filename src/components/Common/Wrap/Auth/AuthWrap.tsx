import React from "react"


interface Props {
  children:React.ReactNode
}

// CSS
import classes from "./AuthWrap.module.sass";

// 회원가입, 로그인 페이지를 감싸는 wrapper
function AuthWrap(props:Props) {
  return <div className={classes["AuthWrap"]}>{props.children}</div>;
}

export default AuthWrap;
