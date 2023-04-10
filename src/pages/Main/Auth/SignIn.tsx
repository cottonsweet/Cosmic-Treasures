import { useState } from "react";
import Input from "../../../components/Common/Input/Input";
import AuthWrap from "../../../components/Common/Wrap/Auth/AuthWrap";
import classes from "./Auth.module.sass";
import Button from "../../../components/Common/Button/Button";
import { useNavigate } from "react-router-dom";

// 로그인 화면
const SignIn = () => {
  const navigate = useNavigate();
  const [userId, setUserId] = useState();
  const [userPw, setUserPw] = useState("");

  const authSubmit = () => {
    return;
  };

  const goSignUp = () => {
    return navigate("/signup");
  };

  return (
    <AuthWrap>
      <div className={classes["AuthTitle"]}>Cosmic Treasures</div>
      <form className={classes["AuthForm"]}>
        <div className={classes["AuthSubTitle"]}>로그인</div>
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
        <Button
          type={"submit"}
          className={"auth"}
          onClick={authSubmit}
          title={"로그인"}
        />
        <div className={classes["authBar"]}></div>
        <Button
          type={"button"}
          className={"newVisitor"}
          onClick={goSignUp}
          title={"새로 오셨나요?"}
        />
      </form>
    </AuthWrap>
  );
};

export default SignIn;
