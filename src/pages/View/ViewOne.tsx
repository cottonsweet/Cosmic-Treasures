import { useState } from "react";


// Type
import { DummyType } from "../../Type/DataType";

// CSS
import classes from "./ViewOne.module.sass";

// Components
import RocketIcon from "../../components/layouts/Icons/RocketIocn";
import CapsulModal from "../../components/UI/Modal/CapsulModal";
import Button from "../../components/layouts/Button/Button";

interface Props {
  onNext: () => void;
  selectedPlanet:DummyType
  DUMMY_PLANET:DummyType[]
  handleSelectedPlanet:(plnaet:DummyType) => void;
}

const ViewOne = (props: Props) => {
  const [activityModal, setActivityModal] = useState(false);

  // 행성 리스트 모달 출력 여부
  const handleClickModal = () => setActivityModal((prev) => !prev);

  return (
    <div className={classes["view-one"]}>
      <RocketIcon />
      <div className={classes["view-one__title"]}>타임 캡슐을 보낼</div>
      <div className={classes["view-one__desc"]}>별을 선택해주세요</div>
      <CapsulModal activityModal={activityModal} onClick={handleClickModal} handleSelectedPlanet={props.handleSelectedPlanet} selectedPlanet={props.selectedPlanet} DUMMY_PLANET={props.DUMMY_PLANET} />
      <div className={classes["view_footer--btn"]}>
        <Button title="다른 행성 고르기" onClick={handleClickModal} className="change_planet" />
        <Button title="다음" onClick={props.onNext} className="next_btn" />
      </div>
    </div>
  );
};

export default ViewOne;
