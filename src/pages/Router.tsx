import { Routes, Route } from "react-router-dom";

import { useState } from "react";

const Router = () => {
  // 이 state에 백으로 받는 토큰값 전송해야함
  const [logged, setLogged] = useState(true);
  return (
    <div>
      {logged ? (
        <Routes>
          <Route path="/logged" />
          <Route path="/:user/edit" />
          <Route path="/templates/create/1" />
          <Route path="/templates/create/2" />
          <Route path="/templates/create/3" />
          <Route path="/templates/create/4" />
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
