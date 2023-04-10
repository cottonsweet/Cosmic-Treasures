// CSS
import classes from "./AuthWrap.module.sass";

// 회원가입, 로그인 페이지를 감싸는 wrapper
function AuthWrap({ children }: any) {
  return <div className={classes["AuthWrap"]}>{children}</div>;
}

export default AuthWrap;
