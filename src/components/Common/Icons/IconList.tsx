import { IoIosArrowBack } from "react-icons/io";
import {ImSpinner11} from "react-icons/im"


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
      <ImSpinner11 />
    </span>
  );
};


// 메세지 발송했을때 로켓 아이콘
export const RocketIcon = () => {
    return <div style={{ fontSize: "30px" }}>🚀</div>;
};
  