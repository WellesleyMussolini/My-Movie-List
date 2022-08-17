import React, { useState, useEffect } from "react";
import Header from "../../components/Header/Header";
import MovieCard from "../../components/Card/Movie-Card";
import { Wrapper, ListWrapper } from "./home.styles";
import { filterList } from "../../utils/filter-list";
import { containsInObject } from "../../utils/contains-in-object";
import { getTopRatedMovies } from "../../services/movies";
import { UseMovieContext } from "../../context/movieContext";
import BasicAlert from "../../components/alert/Basic-Alert";
import ErrorMessage from "../../components/not-found/Not-Found-Message";

function Home() {
  const [searchField, setSearchField] = useState("");
  const [movieList, setMovieList] = useState([]);
  const [openSucessAlert, setOpenSucessAlert] = useState(false);
  const [openWarnAlert, setOpenWarnAlert] = useState(false);
  const { favoritedMovies, setFavoritedMovies } = UseMovieContext([]);

  useEffect(() => {
    const data = getTopRatedMovies("movie", "top_rated", 1);
    data.then(resp => {
      console.log(resp)
      setMovieList(resp.data.results);
    });
    console.log(favoritedMovies)
  }, [favoritedMovies]);

  const filteredMovies = filterList(searchField, movieList);

  const handleAddFavoriteMovie = (movie) => {
    const itIsFavorited = containsInObject(movie, favoritedMovies);
    console.log(itIsFavorited)
    if (!itIsFavorited) {
      setFavoritedMovies(prevState => [...prevState, movie]);
      setOpenSucessAlert(true)
      return;
    }
    setOpenWarnAlert(true);
  };
  return (
    <>
      <Header inputSearch={searchField} handleTextField={setSearchField} />
      <BasicAlert
        OpenSucessAlert={openSucessAlert} HandleSucessAlert={() => setOpenSucessAlert(false)}
        SucessAlertText="Filme adicionado a sua lista!"
        OpenWarnAlert={openWarnAlert} HandleWarnAlert={() => setOpenWarnAlert(false)}
        WarnAlertText="Filme já foi adicionado a sua lista"
      />
      <Wrapper>
        {filteredMovies.length === 0 ? (
          <ErrorMessage Text="Ops... Nenhum resultado foi encontrado..." />
        ) : (
          <ListWrapper>
            {filteredMovies.map((movie, index) => {
              return (
                <>
                  <MovieCard
                    key={index}
                    isFavorited={true}
                    handleAddFavoriteMovie={() => handleAddFavoriteMovie(movie)}
                    imgSrc={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                    imgAlt={movie.alt}
                    movieName={movie.title}
                  />
                </>
              );
            })}
          </ListWrapper>
        )}
      </Wrapper>
    </>
  );
}
export default Home;