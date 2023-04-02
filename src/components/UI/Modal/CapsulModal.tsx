import { useState } from "react";

// Type
import { DummyType } from "../../../pages/Card/PlanetData";

// CSS
import classes from "./CapsulModal.module.sass";

// Component
import Planet from "../../../pages/Card/Planet";

// 더미데이터

const DUMMY_PLANET: DummyType[] = [
  {
    id: 1,
    title: "삐까번쩍행성",
    desc: "삐까번쩍들이 살고 있는",
    img: "👒",
  },
  {
    id: 2,
    title: "스터디 행성",
    desc: "공부잘하는 애들이 지냄",
    img: "📚",
  },
  {
    id: 3,
    title: "우웩 행성",
    desc: "술찌들이 살고 있는 행성",
    img: "🤮",
  },
  {
    id: 4,
    title: "로또 행성",
    desc: "돈미새들이 사는곳",
    img: "💰",
  },
  {
    id: 5,
    title: "로또 행성",
    desc: "돈미새들이 사는곳",
    img: "💰",
  },
  {
    id: 6,
    title: "로또 행성",
    desc: "돈미새들이 사는곳",
    img: "💰",
  },
  {
    id: 7,
    title: "로또 행성",
    desc: "돈미새들이 사는곳",
    img: "💰",
  },
  {
    id: 8,
    title: "로또 행성",
    desc: "돈미새들이 사는곳",
    img: "💰",
  },
  {
    id: 9,
    title: "로또 행성",
    desc: "돈미새들이 사는곳",
    img: "💰",
  },
  {
    id: 10,
    title: "로또 행성",
    desc: "돈미새들이 사는곳",
    img: "💰",
  },
];

interface Props {
  activityModal: boolean;
  onClick: () => void;
}

const CapsulModal = (props: Props) => {
  const [selectedPlanet, setSelectedPlanet] = useState(DUMMY_PLANET[0]);

  // 사용자가 클릭한 행성 리스트를 부모 컴포넌트인 ViewOne으로 통신한다.
  const handlePlanetClick = (planet: DummyType) => {
    setSelectedPlanet(planet);
    props.onClick();
    console.log(planet.id);
  };

  return (
    <div className={props.activityModal ? classes["show-modal"] : classes["hide-modal"]}>
      {props.activityModal ? (
        <Planet DUMMY_PLANET={DUMMY_PLANET} onClick={handlePlanetClick} />
      ) : (
        <div className={classes["capsul-bg"]}>
          <div className={classes["capsul-img"]}>
            <div>{selectedPlanet.img}</div>
          </div>
          <div className={classes["capsul-text"]}>
            <div>{selectedPlanet.desc}</div>
            <div>{selectedPlanet.title}</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CapsulModal;
