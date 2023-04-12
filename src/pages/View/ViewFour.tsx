import { useEffect, useState } from "react";

// Type
import { DummyType } from "../../Type/DataType";

// CSS
import classes from "./ViewFour.module.sass";

// Components
import Button from "../../components/Common/Button/Button";

interface Props {
  onChangePathLocation: (location:string) => void;
  selectedPlanet: DummyType;
  planetTitle: string;
  planettDesc: string;
  daysToAdd: string;
}

const ViewFour = (props: Props) => {
  const [toTime, setToTime] = useState("");

  // 캡슐 서버로 전송 함수
  const handlePostCapSulMessage = () => {
    props.onChangePathLocation("5")
  };

  useEffect(() => {
    handleMessageTimeLimited();
  }, []);

  // props로 전달받은 SelectedTime 컴포넌트의 value값에 따라 날짜를 지정해주는 함수
  const handleMessageTimeLimited = () => {
    const date = new Date();

    if (props.daysToAdd === "week") {
      date.setDate(date.getDate() + 7); // 일주일(7일) 후의 날짜
    }
    if (props.daysToAdd === "month") {
      date.setMonth(date.getMonth() + 1); // 한달 후의 날짜
    }
    if (props.daysToAdd === "year") {
      date.setFullYear(date.getFullYear() + 1); // 일년 후의 날짜
    }
    if (props.daysToAdd === "random") {
      const randomDays = Math.floor(Math.random() * 358) + 7; // 7일 ~ 364일 사이의 랜덤한 숫자
      console.log(randomDays);
      date.setDate(date.getDate() + randomDays); // 랜덤한 날짜
    }

    

    const year = String(date.getFullYear()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    const hour = String(date.getHours()).padStart(2, "0");
    const min = String(date.getMinutes()).padStart(2, "0");
    const sec = String(date.getSeconds()).padStart(2, "0");

    const newDate = `${year}:${month}:${day}:${hour}:${min}:${sec}`;
    console.log(newDate);
    const hourTime = Number(hour) < 12 ? "오전" + hour : "오후"+ hour
    setToTime(`${year}.${month}.${day} ${hourTime}`);
  };

  return (
    <div className={classes["view-four"]}>
      <div className={classes["view-four__img"]}>
        <span className={classes["view-four__img-item"]}>{props.selectedPlanet.img}</span>
      </div>
      
      <div className={classes["view-four-planet__desc"]}>{props.selectedPlanet.desc}</div>
      <div className={classes["view-four-planet__title"]}>{props.selectedPlanet.title}에 보낼 타임캡슐 정보를 확인 해주세요.</div>

      <div className={classes["view-four-msg"]}>
        <div className={classes["view-four-msg__info--title"]}>
          <div>제목</div>
          <div>{props.planetTitle}</div>
        </div>
        <div className={classes["view-four-msg__info--desc"]}>
          <div>내용</div>
          <div>{props.planettDesc}</div>
        </div>
      </div>

      <div className={classes["view-four-msg__timelimited"]}>
        <div>캡슐 받는 날짜</div>
        <div>{toTime}</div>
      </div>

      <div className={classes["view-four__footer-btn"]}>
        <Button title={`${props.selectedPlanet.title}에 타임캡슐 보내기`} onClick={handlePostCapSulMessage} className="next_btn" />
      </div>
    </div>
  );
};

export default ViewFour;
