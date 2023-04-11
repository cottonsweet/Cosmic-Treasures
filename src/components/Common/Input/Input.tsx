// CSS
import React from "react";
import classes from "./Input.module.sass";

interface Props {
  type: string;
  name?: string;
  placeholder?: string;
  value?: string;
  id?:string
  className?: string;
  maxLang?: number;
  minLang?: number;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

// 인풋 재사용
const Input = (props: Props) => {
  return (
    <input
      type={props.type}
      name={props.name}
      placeholder={props.placeholder}
      value={props.value}
      id={props.id}
      className={`${classes[props.className || ""] || "input"}`}
      maxLength={props.maxLang}
      minLength={props.minLang}
      onChange={props.onChange}
      required
    />
  );
};

export default Input;
