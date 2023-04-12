import { useNavigate } from "react-router-dom"

// Type
import { DummyType } from "../../Type/DataType"

// CSS
import classes from "./ViewFive.module.sass"

// Components
import Button from "../../components/Common/Button/Button"
import {RocketIcon} from "../../components/Common/Icons/IconList"

interface Props {
    selectedPlanet: DummyType
}


const ViewFive = (props:Props) => {

    const path = useNavigate()

    const handleGoHome = () => path("/")


    return(
        <div className={classes["view-five"]}>
            <span className={classes["rocket-icon"]}><RocketIcon/></span>
            <div className={classes["view-five__success"]}>
                <div>타임 캡슐을</div>
                <div>{props.selectedPlanet.desc}행성에</div>
                <div>안전하게 보냈어요</div>
            </div>
            <Button title="홈으로" onClick={handleGoHome} className="next_btn" />
        </div>
    )
}

export default ViewFive