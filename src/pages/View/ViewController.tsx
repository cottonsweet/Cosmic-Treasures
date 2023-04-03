import  {useState} from "react"

// Type
import { DummyType } from "../../pages/Card/PlanetData";

// Components
import ViewOne from "./ViewOne"
import ViewTwo from "./ViewTwo"
import ViewThree from "./ViewThree"
import ViewFour from "./ViewFour"
import ViewFive from "./ViewFive"


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
    const [viewPageNumber, setViewPageNumber] = useState<number>(1)
    const [selectedPlanet, setSelectedPlanet] = useState(DUMMY_PLANET[0]);

    const handleSelectedPlanet = (planet:DummyType) => {
        setSelectedPlanet(planet)
    }

    // 다음 뷰단으로
    const handleClickNextPageView = () => setViewPageNumber((prev) => prev + 1)

    // 이전 뷰단으로
    const handleClickPrevPageView = () => setViewPageNumber((prev) => prev - 1)

    const viewList = [
        <ViewOne onNext={handleClickNextPageView} handleSelectedPlanet={handleSelectedPlanet} selectedPlanet={selectedPlanet} DUMMY_PLANET={DUMMY_PLANET}/>,
        <ViewTwo onNext={handleClickNextPageView} onPrev={handleClickPrevPageView} selectedPlanet={selectedPlanet} />,
        <ViewThree onNext={handleClickNextPageView} onPrev={handleClickPrevPageView} />,
        <ViewFour onNext={handleClickNextPageView} onPrev={handleClickPrevPageView} />,
        <ViewFive onNext={handleClickNextPageView} onPrev={handleClickPrevPageView} />,
    ]


    return viewList[viewPageNumber - 1]
}

export default ViewController