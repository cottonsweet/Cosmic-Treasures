// CSS
import classes from "./MainWrap.module.sass";

// 페인 페이지를 감싸는 wrapper
function MainWrap({ children }: any) {
  return <div className={classes["MainWrap"]}>{children}</div>;
}

export default MainWrap;
