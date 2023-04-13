import React, { useState, useEffect } from "react";

// Type
import { DummyType } from "../../Type/DataType";

// CSS
import classes from "./ViewTwo.module.sass";

// Components
import Input from "../../components/Common/Input/Input";
import Button from "../../components/Common/Button/Button";

interface Props {
  onChangePathLocation: (location:string) => void;
  handleGetPlanetData: (type: string, text: string) => void;
  selectedPlanet: DummyType;
}

const ViewTwo = (props: Props) => {
  const [messageTitle, setMessageTitle] = useState("");
  const [messageDesc, setMessageDesc] = useState("");
  const [messageOver, setMessageOver] = useState(false);

  useEffect(() => {
    setMessageOver(messageDesc.length >= 300);
  }, [messageDesc])

  // 제목 함수
  const handleChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    props.handleGetPlanetData("title", e.target.value);
    setMessageTitle(e.target.value);
  };
  // 내용 함수
  const handleChangeDesc = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    props.handleGetPlanetData("body", e.target.value);
    setMessageDesc(e.target.value);
  };

  // 다음 페이지 및 input, textarea 검증
  const handleNextViewBtn = () => {
    if (messageTitle.trim().length < 5) return alert("제목은 5글자 이상으로 해주세요");
    if (messageDesc.trim().length < 10) return alert("본문 내용은 10글자 이상 기입 해주셔야 합니다.");
    props.onChangePathLocation("3")
  };



  return (
    <div className={classes["view-two"]}>

        <div className={classes["view-two__img"]}>
          <span className={classes["view-two__img-item"]}>{props.selectedPlanet.img}</span>
        </div>

        <div className={classes["view-two-planet__desc"]}>{props.selectedPlanet.desc}</div>
        <div className={classes["view-two-planet__title"]}>{props.selectedPlanet.title}에 보낼 타임 캡슐 내용을 적어주세요.</div>


      <div className={classes["view-two-form"]}>
        <div>
          <Input type="text" className="view-two__input" placeholder="제목" onChange={handleChangeTitle} />
        </div>

        <div>
          <textarea className={classes["view-two__textarea"]} onChange={handleChangeDesc} placeholder="내용" />
          <div className={classes["view-two__textarea-length"]}><span className={messageOver ? classes["messageDesc_over"] : ""}>{messageDesc.length}</span> / 300</div>
        </div>
      </div>

      <div className={classes["view-two__footer"]}>
        <Button title="다음" className="next_btn" onClick={handleNextViewBtn} />
      </div>
    </div>
  );
};

export default ViewTwo;
