import { IoIosArrowBack } from "react-icons/io";
import { RiArrowGoBackLine } from "react-icons/ri";


// 상단 메뉴 뒤로가기 버튼 아이콘
export const BackIcon = () => {
  return (
    <div style={{ fontSize: "25px" }}>
      <IoIosArrowBack />
    </div>
  );
};

// 변경 아이콘
export const ChangeIcon = () => {
  return (
    <span>
      <RiArrowGoBackLine />
    </span>
  );
};


// 메세지 발송했을때 로켓 아이콘
export const RocketIcon = () => {
    return <div style={{ fontSize: "30px" }}>🚀</div>;
};
  