import { useState } from "react";
import Input from "../../../components/common/Input/Input";

// 로그인 화면
const SignIn = () => {
  const [userId, setUserId] = useState();
  return (
    <>
      <h1>로그인</h1>
      <form>
        <Input
          type={"text"}
          placeholder="아이디"
          className="Auth"
          maxLang={6}
          minLang={1}
        />
        <Input
          type={"password"}
          placeholder="비밀번호"
          className="Auth"
          maxLang={20}
          minLang={8}
        />
        <button type="submit">로그인</button>
      </form>
    </>
  );
};

export default SignIn;
