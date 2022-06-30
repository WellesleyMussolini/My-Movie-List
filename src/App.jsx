import "./App.css";
import Home from "./pages/Home/Home";
import * as Routers from "./constants/routes/routes";
import { Route, Routes } from 'react-router-dom';
import Login from "./pages/Login/Login";
import Header from "./components/Header/Header";

const App = () => {
  return (
    <div className="App">
        <Routes>
          <Route path={Routers.HOME} element={<Home />} exact />
      <Route path={Routers.LOGIN} element={<Login />} />
    </Routes>
    </div >
  );
};

export default App;
