// CSS
import React from "react";
import classes from "./Button.module.sass";

interface Props {
  title?:string,
  className?: string;
  onClick?: (e: React.MouseEvent) => void;
  selectedTimList?:TimeProps
  value?:string,
}

interface TimeProps {
  id:number,
  title:string,
  time:string,
}

// 각 버튼들 재사용할수있게끔
const Button = (props: Props) => {
  const buttonClass = props.className ? classes[props.className] : "";
  return (
    <button className={buttonClass} key={props.selectedTimList?.id} onClick={props.onClick} value={props.selectedTimList?.time}>
      {props.title ? props.title : props.selectedTimList?.title}
    </button>


  );
};

export default Button;
