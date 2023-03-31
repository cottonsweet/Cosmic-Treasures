import React, {useState} from "react"

// Components
import ViewOne from "./ViewOne"
import ViewTwo from "./ViewTwo"
import ViewThree from "./ViewThree"
import ViewFour from "./ViewFour"
import ViewFive from "./ViewFive"

const ViewController = () => {
    const [viewPageNumber, setViewPageNumber] = useState<number>(1)


    // 다음 뷰단으로
    const handleClickNextPageView = () => setViewPageNumber((prev) => prev + 1)

    // 이전 뷰단으로
    const handleClickPrevPageView = () => setViewPageNumber((prev) => prev - 1)

    const viewList = [
        <ViewOne onNext={handleClickNextPageView}/>,
        <ViewTwo onNext={handleClickNextPageView} onPrev={handleClickPrevPageView} />,
        <ViewThree onNext={handleClickNextPageView} onPrev={handleClickPrevPageView} />,
        <ViewFour onNext={handleClickNextPageView} onPrev={handleClickPrevPageView} />,
        <ViewFive onNext={handleClickNextPageView} onPrev={handleClickPrevPageView} />,
    ]


    return viewList[viewPageNumber - 1]
}

export default ViewController