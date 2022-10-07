import Home from "./pages/Home/Home";
import * as Routers from "./constants/routes/routes";
import { Route, Routes } from "react-router-dom";
import { Theme } from "./theme/Theme.styled";
import { UseMovieContext, UseMovieProvider } from "./context/MovieContext";
import FavoritedMovies from "./pages/FavoritedMovies/FavoritedMovies";
import MovieDetails from "./pages/MovieDetails/MovieDetails";
import Wrapper from "./components/wrapper/Wrapper";
import LatestMovies from "./pages/LatestMovies/LatestMovies";
import { useState } from "react";

const App = () => {
  const [searchField, setSearchField] = useState("");
  // const { searchField, setSearchField } = UseMovieContext("");
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
          <Route path={Routers.LATEST_MOVIES} element={
            <Wrapper search={searchField} handleSearch={setSearchField} showInputSearch={true}>
              <LatestMovies search={searchField} handleSearch={setSearchField} />
            </Wrapper>
          } />
        </Routes>
      </UseMovieProvider>
    </Theme>
  );
};
export default App;