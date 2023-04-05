import { useState } from "react";

// Type
import { DummyType } from "../../Type/DataType";

// CSS
import classes from "./ViewThree.module.sass";

// Components
import SelectedTime from "../Card/SelectedTime";
import Button from "../../components/layouts/Button/Button";

interface Props {
  onNext: () => void;
  onPrev: () => void;
  addDaysToDate: (time: string) => void;
  selectedPlanet: DummyType;
  planetTitle: string;
  plnaetDesc: string;
}

const ViewThree = (props: Props) => {
  const [getSelectedTime, setSelectedTitme] = useState("")


  const getSelectedDate = (time:string) => {
    setSelectedTitme(time)
  }

  const handleNextPageView = () => {
    if (!getSelectedTime) return alert("날짜를 선택해주세요 !")
    props.onNext();
  }


  return (
    <div className={classes["view-three"]}>
      <div className={classes["view-three__header"]}>
        <div className={classes["view-three__img"]}>
          <span className={classes["view-three__img-item"]}>{props.selectedPlanet.img}</span>
        </div>

        <div className={classes["view-three-planet__desc"]}>{props.selectedPlanet.desc}</div>
        <div className={classes["view-three-planet__title"]}>{props.selectedPlanet.title}에서 이 타임캡슐을 언제 받아볼까요 ?</div>
      </div>

      <div className={classes["view-three__selected-time"]}>
        <SelectedTime addDaysToDate={props.addDaysToDate} getSelectedDate={getSelectedDate} />
      </div>
      <div className={classes["view-three__footer-btn"]}>
        <Button title="다음" onClick={handleNextPageView} className="view-three_next--btn" />
      </div>
    </div>
  );
};

export default ViewThree;
