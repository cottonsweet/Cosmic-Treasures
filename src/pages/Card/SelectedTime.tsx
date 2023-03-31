// CSS
import React, { useState }  from "react"
import classes from  "./SelectedTime.module.sass"

const timeList = [
    {
        id:1,
        title:"일주일 뒤",
        time:"week"
    },
    {
        id:2,
        title:"한 달 뒤",
        time:"month"
    },
    {
        id:3,
        title:"일 년 뒤",
        time:"year"
    },
    {
        id:4,
        title:"1주일 ~ 1년 랜덤",
        time:"random"
    },
]

const SelectedTime = () => {

    const [choiceTime, setChoiceTime] = useState("");
    const handleClick = (e:React.MouseEvent<HTMLButtonElement>) => {
        const value = (e.target as HTMLButtonElement).value
        if (choiceTime === value) return setChoiceTime("")
        setChoiceTime(value)
    }
    return(
        <div className={classes.SelectedTime_item}>
            {timeList.map((timeData) => {
                const isSelected = timeData.time === choiceTime;
                const className = `${classes[timeData.time]} ${isSelected ? classes.select : ""}`;
                return(
                    <button onClick={handleClick} key={timeData.id} value={timeData.time} className={className}>{timeData.title}</button>
                )
            })}
        </div>
    )
}

export default SelectedTime