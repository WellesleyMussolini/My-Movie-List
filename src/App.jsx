import Home from "./pages/Home/Home";
import * as Routers from "./constants/routes/routes";
import { Route, Routes } from "react-router-dom";
import { Theme } from "./theme/Theme.styled";

const App = () => {
  return (
      <Theme>
        <Routes>
          <Route path={Routers.HOME} element={<Home />} exact />
        </Routes>
      </Theme>
  );
};

export default App;