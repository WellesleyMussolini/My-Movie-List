import Home from "./pages/Home/Home";
import * as Routers from "./constants/routes/routes";
import { Route, Routes } from "react-router-dom";
import { Theme } from "./theme/Theme.styled";
import { UseAuthProvider } from "./context/AuthContext";

const App = () => {
  return (
    <UseAuthProvider>
      <Theme>
        <Routes>
          <Route path={Routers.HOME} element={<Home />} exact />
        </Routes>
      </Theme>
    </UseAuthProvider>
  );
};

export default App;