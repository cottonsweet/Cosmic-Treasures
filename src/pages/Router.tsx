import { useState } from "react";
import { Routes, Route } from "react-router-dom";

// Components
import ViewController from "./View/ViewController";
import Main from "./Main/Main";
import SignIn from "./Main/Auth/SignIn";
import SignUp from "./Main/Auth/SignUp";

const Router = () => {
  // 이 state에 백으로 받는 토큰값 전송해야함, 기본 값 false
  const [logged, setLogged] = useState(false);
  return (
    <>
      {logged ? (
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/:user/edit" />
          <Route path="/templates/create/msg" element={<ViewController />} />
          <Route path="/*" />
        </Routes>
      ) : (
        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/*" element={<SignIn />} />
        </Routes>
      )}
    </>
  );
};

export default Router;
