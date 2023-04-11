import React from "react";

// CSS
import classes from "./Button.module.sass";

interface Props {
  type?: "button" | "submit" | "reset" | undefined;
  title?: string;
  className?: string;
  onClick?: (e: React.MouseEvent) => void;
}

// 각 버튼들 재사용할수있게끔
const Button = (props: Props) => {
  const className = classes[props.className || ""];
  return (
    <button
      type={props.type}
      className={className}
      onClick={props.onClick}
    >
      {props.title}
    </button>
  );
};

export default Button;
