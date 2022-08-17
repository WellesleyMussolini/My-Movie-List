import Home from "./pages/Home/Home";
import * as Routers from "./constants/routes/routes";
import { Route, Routes } from "react-router-dom";
import { Theme } from "./theme/Theme.styled";
import { UseMovieProvider } from "./context/movieContext";
import FavoritedMovies from "./pages/FavoritedMovies/FavoritedMovies";

const App = () => {
  return (
    <Theme>
      <UseMovieProvider>
        <Routes>
          <Route path={Routers.HOME} element={<Home />} exact />
          <Route path={Routers.FAVORITE_MOVIES} element={<FavoritedMovies />} exact />
        </Routes>
      </UseMovieProvider>
    </Theme>
  );
};

export default App;