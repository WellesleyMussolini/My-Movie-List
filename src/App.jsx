import Home from "./pages/Home/Home";
import * as Routers from "./constants/routes/routes";
import { Route, Routes } from "react-router-dom";
import { Theme } from "./theme/Theme.styled";
import { UseMovieProvider } from "./context/MovieContext";
import FavoritedMovies from "./pages/FavoritedMovies/FavoritedMovies";
import MovieDetails from "./pages/MovieDetails/MovieDetails";
import Wrapper from "./components/wrapper/Wrapper";

const App = () => {
  const {searchField, setSearchField} = UseMovieProvider("");
  return (
    <Theme>
      <UseMovieProvider>
        <Routes>
          <Route path={Routers.HOME} element={
            <Wrapper search={searchField} handleSearch={setSearchField} showInputSearch={true}>
              <Home search={searchField} handleSearch={setSearchField} />
            </Wrapper>
          } exact />
          <Route path={Routers.FAVORITE_MOVIES} element={
            <Wrapper search={searchField} handleSearch={setSearchField} showInputSearch={true}>
              <FavoritedMovies search={searchField} handleSearch={setSearchField} />
            </Wrapper>
          } />
          <Route path={Routers.MOVIE_DETAILS} element={
            <Wrapper>
              <MovieDetails />
            </Wrapper>
          } />
        </Routes>
      </UseMovieProvider>
    </Theme>
  );
};
// details
export default App;