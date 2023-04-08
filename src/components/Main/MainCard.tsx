import { useMemo, useState } from "react";
import classes from "./MainCard.module.sass";

interface Props {
  props: {
    title: string;
    contents: string;
    startDate: string;
    endDate: string;
    read: boolean;
    planet: {
      id: number;
      name: string;
      contents: string;
      image: string;
    };
  };
}

/**
 * 메인에 보여주는 캡슐 카드 컴포넌트
 */

export const MainCard = (props: Props) => {
  const [remainingDays, setRemainingDays] = useState<string>("");
  const {
    props: { title, startDate, endDate, planet },
  } = props;

  // 남은 날짜 계산 함수
  const calculDays = (end: string) => {
    const today = new Date();
    const dday = new Date(end);
    const gap = dday.getTime() - today.getTime();
    const result = String(Math.ceil(gap / (1000 * 60 * 60 * 24)));
    return setRemainingDays(result);
  };

  // 날짜가 D-0일때 색상 바꿈
  const checkDays = (day: string) => {
    if (Number(day) !== 0) {
      return <span className={classes["MainCardTitleDay"]}>{`D-${day}`}</span>;
    } else {
      return <span className={classes["MainCardTitleDday"]}>{`D-${day}`}</span>;
    }
  };

  useMemo(() => {
    calculDays(endDate);
  }, [props]);

  return (
    <div
      className={
        Number(remainingDays) !== 0
          ? classes["MainCard"]
          : classes["MainDdayCard"]
      }
    >
      <div className={classes["MainCardStartDate"]}>
        <span>
          {"캡슐 보낸 날 : "} {startDate}
        </span>
        <span>{Number(remainingDays) !== 0 ? "잠금" : null}</span>
      </div>
      <div className={classes["MainCardTitle"]}>
        {title} {checkDays(remainingDays)}
      </div>
      <div className={classes["MainCardPlanet"]}>{planet.name}</div>
    </div>
  );
};
