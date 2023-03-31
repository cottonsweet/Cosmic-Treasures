import { useState } from "react";
import { Routes, Route } from "react-router-dom";

// Components
import ViewController from "./View/ViewController";


const Router = () => {
  // 이 state에 백으로 받는 토큰값 전송해야함
  const [logged, setLogged] = useState(true);
  return (
    <div>
      {logged ? (
        <Routes>
          <Route path="/logged" />
          <Route path="/:user/edit" />
          <Route path="/templates/create/msg" element={<ViewController/>} />
          <Route path="/*" />
        </Routes>
      ) : (
        <Routes>
          <Route path="/" />
          <Route path="/*" />
        </Routes>
      )}
    </div>
  );
};

export default Router;
