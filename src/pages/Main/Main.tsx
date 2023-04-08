import { MainCard } from "../../components/Main/MainCard";
import MenuHeader from "../../components/layouts/Header/MenuHeader";
import MainWrap from "../../components/layouts/Wrap/Main/MainWrap";
import classes from "./Main.module.sass";

const dummyData = [
  {
    title: "1년 뒤 나에게",
    contents:
      "1년 뒤 나에게1년 뒤 나에게1년 뒤 나에게1년 뒤 나에게1년 뒤 나에게1년 뒤 나에게1년 뒤 나에게1년 뒤 나에게1년 뒤 나에게1년 뒤 나에게1년 뒤 나에게1년 뒤 나에게1년 뒤 나에게1년 뒤 나에게1년 뒤 나에게1년 뒤 나에게1년 뒤 나에게",
    startDate: "2023.04.01",
    endDate: "2024.04.01",
    read: false,
    planet: {
      id: 2,
      name: "소행성B61",
      contents: "어린왕자의 소중한",
      image: "",
    },
  },
  {
    title: "지금쯤 억만장자가 되어있을 나에게",
    contents:
      "지금쯤 억만장자가 되어있을 나에게지금쯤 억만장자가 되어있을 나에게지금쯤 억만장자가 되어있을 나에게지금쯤 억만장자가 되어있을 나에게지금쯤 억만장자가 되어있을 나에게지금쯤 억만장자가 되어있을 나에게",
    startDate: "2023.02.01",
    endDate: "2024.02.01",
    read: false,
    planet: {
      id: 2,
      name: "소행성B61",
      contents: "어린왕자의 소중한",
      image: "",
    },
  },
  {
    title: "오늘은 정말 기념적인 날이었어",
    contents:
      "오늘은 정말 기념적인 날이었어오늘은 정말 기념적인 날이었어오늘은 정말 기념적인 날이었어오늘은 정말 기념적인 날이었어오늘은 정말 기념적인 날이었어오늘은 정말 기념적인 날이었어오늘은 정말 기념적인 날이었어오늘은 정말 기념적인 날이었어오늘은 정말 기념적인 날이었어",
    startDate: "2023.01.16",
    endDate: "2024.01.16",
    read: false,
    planet: {
      id: 1,
      name: "삐까번쩍행성",
      contents: "삐까번쩍들이 살고 있는",
      image: "",
    },
  },
  {
    title: "오늘은 정말 기념적인 날이었어",
    contents:
      "오늘은 정말 기념적인 날이었어오늘은 정말 기념적인 날이었어오늘은 정말 기념적인 날이었어오늘은 정말 기념적인 날이었어오늘은 정말 기념적인 날이었어오늘은 정말 기념적인 날이었어오늘은 정말 기념적인 날이었어오늘은 정말 기념적인 날이었어오늘은 정말 기념적인 날이었어",
    startDate: "2023.01.16",
    endDate: "2024.01.16",
    read: true,
    planet: {
      id: 3,
      name: "뾰로롱 행성",
      contents: "행복한 뾰로롱들이 사는",
      image: "",
    },
  },
  {
    title: "오늘은 정말 기념적인 날이었어",
    contents:
      "오늘은 정말 기념적인 날이었어오늘은 정말 기념적인 날이었어오늘은 정말 기념적인 날이었어오늘은 정말 기념적인 날이었어오늘은 정말 기념적인 날이었어오늘은 정말 기념적인 날이었어오늘은 정말 기념적인 날이었어오늘은 정말 기념적인 날이었어오늘은 정말 기념적인 날이었어",
    startDate: "2022.04.08",
    endDate: "2023.04.08",
    read: true,
    planet: {
      id: 3,
      name: "뾰로롱 행성",
      contents: "행복한 뾰로롱들이 사는",
      image: "",
    },
  },
];
// 로그인 했을때 보여주는 화면
const Main = () => {
  return (
    <MainWrap>
      <MenuHeader className="MainHeader" />
      <div className={classes["MainContents"]}>
        <div className={classes["MainGreet"]}>
          <span>아무개아무개님,</span>
          <br />
          <span>
            현재 {dummyData.length}개의 타임 캡슐이
            <br /> 저장되어 있어요.
          </span>
        </div>
        {dummyData.map((item, idx) => (
          <MainCard key={idx} props={item} />
        ))}
      </div>
    </MainWrap>
  );
};

export default Main;
