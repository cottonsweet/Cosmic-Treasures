// Type
import { DummyType } from "../Card/PlanetData";

interface Props {
  onNext: () => void;
  onPrev: () => void;
  selectedPlanet: DummyType
}

const ViewTwo = (props: Props) => {
  return <div>여기 두번째 뷰
  </div>;
};

export default ViewTwo;
