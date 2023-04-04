

// Type
import { DummyType } from "../../Type/DataType"

// CSS
import classes from "./ViewThree.module.sass"


// Components
import SelectedTime from "../Card/SelectedTime"

interface Props {
    onNext: () => void
    onPrev: () => void
    selectedPlanet:DummyType
    planetTitle: string,
    plnaetDesc: string,
}


const ViewThree = (props:Props) => {
    return(
        <div className={classes["view-three"]}>
            <div className={classes["view-three__header"]}>
                <div className={classes["view-three__img"]}>
                    <span className={classes["view-three__img-item"]}>{props.selectedPlanet.img}</span>
                </div>
                
                <div className={classes["view-three-planet__desc"]}>{props.selectedPlanet.desc}</div>
                <div className={classes["view-three-planet__title"]}>{props.selectedPlanet.title}에서 이 타임캡슐을 언제 받아볼까요 ?</div>
            </div>


            <div className={classes["view-three__footer"]}>
                <SelectedTime/>
            </div>
        </div>
    )
}

export default ViewThree