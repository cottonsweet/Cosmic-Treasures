import classes from "./MenuHeader.module.sass";

interface Props {
  className?: string;
}

// Menu쪽 헤더 로그인전에도 사용할수 있는데, 컴포넌트 이름을 뭘로 해야할지 ㅜㅜ

const MenuHeader = (props: Props) => {
  return <div className={classes[props.className || ""]}>Cosmic Treasures</div>;
};

export default MenuHeader;
