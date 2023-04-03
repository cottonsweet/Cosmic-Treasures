// Type
import { DummyType } from "../../../pages/Card/PlanetData";

// CSS
import classes from "./CapsulModal.module.sass";

// Component
import Planet from "../../../pages/Card/Planet";

interface Props {
  activityModal: boolean;
  // 행성 데이터 객체
  selectedPlanet:DummyType

  // 행성 데이터 배열
  DUMMY_PLANET:DummyType []
  onClick: () => void;
  handleSelectedPlanet:(planet:DummyType) => void;
}

const CapsulModal = (props: Props) => {

  // 사용자가 클릭한 행성 리스트를 부모 컴포넌트인 ViewOne으로 통신한다.
  const handlePlanetClick = (planet: DummyType) => {
   props.handleSelectedPlanet(planet);
    props.onClick();
    console.log(planet.id);
  };


  return (
    <div className={props.activityModal ? classes["show-modal"] : classes["hide-modal"]}>
      {props.activityModal ? (
        <Planet DUMMY_PLANET={props.DUMMY_PLANET} onClick={handlePlanetClick} handleSelectedPlanet={props.handleSelectedPlanet} />
      ) : (
        <div className={classes["capsul-bg"]}>
          <div className={classes["capsul-img"]}>
            <div>{props.selectedPlanet.img}</div>
          </div>
          <div className={classes["capsul-text"]}>
            <div>{props.selectedPlanet.desc}</div>
            <div>{props.selectedPlanet.title}</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CapsulModal;
