interface Props {
  onNext: () => void;
  onPrev: () => void;
}

const ViewTwo = (props: Props) => {
  return <div>여기 두번째 뷰</div>;
};

export default ViewTwo;
