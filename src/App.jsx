import Home from "./pages/Home/Home";
import * as Routers from "./constants/routes/routes";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login/Login";
import { Theme } from "./theme/Theme.styled";

const App = () => {
  return (
      <Theme>
        <Routes>
          <Route path={Routers.HOME} element={<Home />} exact />
          <Route path={Routers.LOGIN} element={<Login />} />
        </Routes>
      </Theme>
  );
};

export default App;
