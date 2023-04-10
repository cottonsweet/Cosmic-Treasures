import React from "react";

// Type
import { TimeProps } from "../../../Type/DataType";

// CSS
import classes from "./Button.module.sass";

interface Props {
  type?: "button" | "submit" | "reset" | undefined;
  title?: string;
  className?: string;
  onClick?: (e: React.MouseEvent) => void;
  value?: string;
  isSelected?: boolean;
}

// 각 버튼들 재사용할수있게끔
const Button = (props: Props) => {
  const buttonClass = `${props.value ? classes[props.value || ""] : ""} ${
    props.isSelected ? classes.select : ""
  }`;
  const className = `${classes[props.className || ""] || ""}`;
  return (
    <button
      type={props.type}
      className={`${className} ${buttonClass}`}
      onClick={props.onClick}
      value={props.value}
    >
      {props.title}
    </button>
  );
};

export default Button;
