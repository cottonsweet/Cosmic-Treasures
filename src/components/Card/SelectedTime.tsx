import React, { useState } from "react";

// CSS
import classes from "./SelectedTime.module.sass";

// Components
import Input from "../Common/Input/Input"

const timeList = [
  {
    id: 1,
    title: "일주일 뒤",
    time: "week",
  },
  {
    id: 2,
    title: "한 달 뒤",
    time: "month",
  },
  {
    id: 3,
    title: "일 년 뒤",
    time: "year",
  },
  {
    id: 4,
    title: "1주일 ~ 1년 랜덤",
    time: "random",
  },
];

interface Props {
  addDaysToDate: (time: string) => void;
  getSelectedDate:(time:string) => void
}

const SelectedTime = (props: Props) => {
  const [choiceTime, setChoiceTime] = useState("");

  //  시간일정 정하는 함수
  const handleClickTime = (e: React.MouseEvent<HTMLSpanElement>) => {
    const title = e.currentTarget.innerText;
    const timeData = timeList.find((time) => time.title === title);
  
    if(choiceTime === timeData?.time) return setChoiceTime("")

    if (timeData) {
      const selectedTime = timeData.time;
      setChoiceTime(selectedTime);
      props.getSelectedDate(selectedTime);
      props.addDaysToDate(selectedTime);
      return;
    }
  };
  return (
    <div className={classes.SelectedTime_item}>
      {timeList.map((timeData) => {
        const isSelected = timeData.time === choiceTime;
        const className = `${classes[timeData.time]} ${isSelected ? classes.select : ""}`;

        return (
          <div key={timeData.id}>
            <Input type="radio" value={timeData.time} name="time" className="selected_input" /><label  onClick={handleClickTime} className={className}>{timeData.title}</label>
          </div>
        );
      })}
    </div>
  );
};

export default SelectedTime;
