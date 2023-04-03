import React, {useState} from "react";

// Type
import { DummyType } from "../Card/PlanetData";

// CSS
import classes from "./ViewTwo.module.sass"

// Components
import Input from "../../components/layouts/Input/Input";
import Button from "../../components/layouts/Button/Button";


interface Props {
  onNext: () => void;
  onPrev: () => void;
  handleGetPlanetData: (type:string, text:string) => void
  selectedPlanet: DummyType
}


const ViewTwo = (props: Props) => {

  // 제목 함수
  const handleChangeTitle = (e:React.ChangeEvent<HTMLInputElement>) => props.handleGetPlanetData("title", e.target.value)
  // 내용 함수
  const handleChangeDesc = (e:React.ChangeEvent<HTMLTextAreaElement>) => props.handleGetPlanetData("body", e.target.value)
  
  

  return (
  <div className={classes["view-two"]}>

    <div className={classes["view-two__header"]}>

      <div className={classes["view-two__img"]}>
        <span className={classes["view-two__img-item"]}>{props.selectedPlanet.img}</span>
      </div>

      <div className={classes["view-two-planet__desc"]}>{props.selectedPlanet.desc}</div>
      <div className={classes["view-two-planet__title"]}>{props.selectedPlanet.title}에 보낼 타임 캡슐 내용을 적어주세요.</div>
    </div>

    <div className={classes["view-two-form"]}>
      <div>
        <Input type="text" className="view-two__input" placeholder="제목" onChange={handleChangeTitle} />
      </div>

      <div>
        <textarea className={classes["view-two__textarea"]}  onChange={handleChangeDesc}/>
      </div>
    </div>

    <div className={classes["view-two__footer"]}>
      <Button title="다음" className="view-two_next--btn" onClick={props.onNext} />
    </div>
  </div>)
};

export default ViewTwo;
