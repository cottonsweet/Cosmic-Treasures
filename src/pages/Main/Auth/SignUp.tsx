import Input from "../../../components/common/Input/Input";
import AuthWrap from "../../../components/common/Wrap/Auth/AuthWrap";

// 회원가입 화면
const SignUp = () => {
  return (
    <AuthWrap>
      <h1>회원가입</h1>
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
        <Input
          type={"password"}
          placeholder="비밀번호 확인"
          className="Auth"
          maxLang={20}
          minLang={8}
        />
        <button type="submit">회원가입</button>
      </form>
    </AuthWrap>
  );
};

export default SignUp;
