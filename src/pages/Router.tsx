import { useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";

// Type
import { DummyType } from "../Type/DataType";

// Components
import ViewOne from "./View/ViewOne";
import ViewTwo from "./View/ViewTwo";
import ViewThree from "./View/ViewThree";
import ViewFour from "./View/ViewFour";
import ViewFive from "./View/ViewFive";

import Main from "./Main/Main";
import SignIn from "./Main/Auth/SignIn";
import SignUp from "./Main/Auth/SignUp";
import ChangePassword from "./Profile/Edit/ChangePassword";

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

const Router = () => {
  // 이 state에 백으로 받는 토큰값 전송해야함, 기본 값 false
  const [logged, setLogged] = useState(false);

  const [selectedPlanet, setSelectedPlanet] = useState(DUMMY_PLANET[0]);
  const [daysToAdd, setDaysToAdd] = useState("");
  const [planetTitle, setPlanetTitle] = useState("");
  const [planettDesc, setPlanetDesc] = useState("");

  const path = useNavigate();

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

  // 다음 경로 및 이전 경로 변경
  const handleClickChangePath = (location: string) =>
    path("/templates/create/msg/" + location);

  return (
    <>
      {logged ? (
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/:user/edit" />
          <Route path="/:user/edit/password" element={<ChangePassword />} />
          <Route path="/:user/edit/username" />
          <Route
            path="/templates/create/msg/1"
            element={
              <ViewOne
                onChangePathLocation={handleClickChangePath}
                handleSelectedPlanet={handleSelectedPlanet}
                selectedPlanet={selectedPlanet}
                DUMMY_PLANET={DUMMY_PLANET}
              />
            }
          />
          <Route
            path="/templates/create/msg/2"
            element={
              <ViewTwo
                onChangePathLocation={handleClickChangePath}
                selectedPlanet={selectedPlanet}
                handleGetPlanetData={handleGetPlanetData}
              />
            }
          />
          <Route
            path="/templates/create/msg/3"
            element={
              <ViewThree
                onChangePathLocation={handleClickChangePath}
                selectedPlanet={selectedPlanet}
                planetTitle={planetTitle}
                planettDesc={planettDesc}
                addDaysToDate={addDaysToDate}
              />
            }
          />
          <Route
            path="/templates/create/msg/4"
            element={
              <ViewFour
                onChangePathLocation={handleClickChangePath}
                selectedPlanet={selectedPlanet}
                planetTitle={planetTitle}
                planettDesc={planettDesc}
                daysToAdd={daysToAdd}
              />
            }
          />
          <Route
            path="/templates/create/msg/5"
            element={<ViewFive selectedPlanet={selectedPlanet} />}
          />
          <Route path="/*" element={<Main />} />
        </Routes>
      ) : (
        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/*" element={<SignIn />} />
        </Routes>
      )}
    </>
  );
};

export default Router;
