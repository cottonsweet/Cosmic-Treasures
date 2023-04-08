import { useState } from "react";

// Type
import { DummyType } from "../../Type/DataType";

// Components
import ViewOne from "./ViewOne";
import ViewTwo from "./ViewTwo";
import ViewThree from "./ViewThree";
import ViewFour from "./ViewFour";
import ViewFive from "./ViewFive";

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

const ViewController = () => {
  const [viewPageNumber, setViewPageNumber] = useState<number>(1);
  const [selectedPlanet, setSelectedPlanet] = useState(DUMMY_PLANET[0]);
  const [daysToAdd, setDaysToAdd] = useState("");

  const [planetTitle, setPlanetTitle] = useState("");
  const [planettDesc, setPlanetDesc] = useState("");

  // 2번 뷰단 행성 제목, 내용 저장함수
  const handleGetPlanetData = (type: string, text: string) => {
    if (type === "title") {
      setPlanetTitle(text);
    } else if (type === "body") {
      setPlanetDesc(text);
    }
    return;
  };

  // 행성 카드 데이터 저장 함수
  const handleSelectedPlanet = (planet: DummyType) => {
    setSelectedPlanet(planet);
  };

  // 3번 뷰단 시간 정하는 함수(SelectedTime 컴포넌트로부터 선택한 value를 상향식 통신으로 받아온다.)
  const addDaysToDate = (time: string) => {
    setDaysToAdd(time);
  };

  // 다음 뷰단으로
  const handleClickNextPageView = () => setViewPageNumber((prev) => prev + 1);

  // 이전 뷰단으로
  const handleClickPrevPageView = () => setViewPageNumber((prev) => prev - 1);

  const viewList = [
    <ViewOne onNext={handleClickNextPageView} handleSelectedPlanet={handleSelectedPlanet} selectedPlanet={selectedPlanet} DUMMY_PLANET={DUMMY_PLANET} />,
    <ViewTwo onNext={handleClickNextPageView} onPrev={handleClickPrevPageView} selectedPlanet={selectedPlanet} handleGetPlanetData={handleGetPlanetData} />,
    <ViewThree
      onNext={handleClickNextPageView}
      onPrev={handleClickPrevPageView}
      selectedPlanet={selectedPlanet}
      planetTitle={planetTitle}
      planettDesc={planettDesc}
      addDaysToDate={addDaysToDate}
    />,
    <ViewFour
      onNext={handleClickNextPageView}
      onPrev={handleClickPrevPageView}
      selectedPlanet={selectedPlanet}
      planetTitle={planetTitle}
      planettDesc={planettDesc}
      daysToAdd={daysToAdd}
    />,
    <ViewFive selectedPlanet={selectedPlanet} />,
  ];

  return viewList[viewPageNumber - 1];
};

export default ViewController;
