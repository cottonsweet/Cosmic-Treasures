import { useNavigate } from "react-router-dom";
import Input from "../../../components/common/Input/Input";
import AuthWrap from "../../../components/common/Wrap/Auth/AuthWrap";
import classes from "./Auth.module.sass";
import { useState } from "react";
import Button from "../../../components/common/Button/Button";

// 회원가입 화면
const SignUp = () => {
  const navigate = useNavigate();
  const [userName, setUserName] = useState("");
  const [userId, setUserId] = useState("");
  const [userPw, setUserPw] = useState("");

  const authSubmit = () => {
    return;
  };

  const goSignIn = () => {
    return navigate("/signin");
  };

  return (
    <AuthWrap>
      <div className={classes["AuthTitle"]}>Cosmic Treasures</div>
      <form className={classes["AuthForm"]}>
        <div className={classes["AuthSubTitle"]}>회원가입</div>
        <Input
          type={"text"}
          placeholder="닉네임"
          className="Auth"
          maxLang={6}
          minLang={1}
        />
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
          title={"회원가입"}
        />
        <div className={classes["authBar"]}></div>
        <Button
          type={"button"}
          className={"newVisitor"}
          onClick={goSignIn}
          title={"로그인하기"}
        />
      </form>
    </AuthWrap>
  );
};

export default SignUp;
