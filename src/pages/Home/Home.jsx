import React, { useState, useEffect } from "react";
import Header from "../../components/Header/Header";
import MovieCard from "../../components/Card/Movie-Card";
import { Wrapper, ListWrapper } from "./home.styles";
import { filterList } from "../../utils/filter-list";
import { containsInObject } from "../../utils/contains-in-object";
import { getTopRatedMovies } from "../../services/movies";
import { UseMovieContext } from "../../context/movieContext";
import BasicAlert from "../../components/alert/Basic-Alert";
import NotFound from "../../components/not-found/Not-Found"
import PageSwitch from "../../components/page-switch/Page-Switch";

function Home() {
  const [searchField, setSearchField] = useState("");
  const [MovieList, setMovieList] = useState([]);
  const [movieData, setMovieData] = useState([]);
  const [pageSwitcher, setPageSwitcher] = useState(1);
  const [openSucessAlert, setOpenSucessAlert] = useState(false);
  const [openWarnAlert, setOpenWarnAlert] = useState(false);
  const { favoritedMovies, setFavoritedMovies } = UseMovieContext([]);

  useEffect(() => {
    const data = getTopRatedMovies("movie", "top_rated", pageSwitcher);
    data.then((response) => {
      setMovieData(response.data);
      setMovieList(response.data.results);
    });
  }, [pageSwitcher]);

  const filteredMovies = filterList(searchField, MovieList);

  const handleAddFavoriteMovie = (movie, index) => {
    const itIsFavorited = containsInObject(movie, favoritedMovies);
    if (!itIsFavorited) {
      setFavoritedMovies(prevState => [...prevState, movie]);
      setOpenSucessAlert(true);
      return;
    }
    setOpenWarnAlert(true);
  };

  const handlePageSwitch = page => {
    const currentPage = page.target.textContent;
    const convertStringToNumber = Number(currentPage);
    setPageSwitcher(convertStringToNumber);
    return movieData.page = pageSwitcher;
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
          <NotFound Text="Ops... Nenhum resultado foi encontrado..." />
        ) : (
          <ListWrapper>
            {
              filteredMovies.map((movie, index) => {
                return (
                  <MovieCard
                    key={index}
                    isFavorited={false}
                    handleAddFavoriteMovie={() => handleAddFavoriteMovie(movie, index)}
                    imgSrc={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                    imgAlt={movie.alt}
                    movieName={movie.title}
                  />
                );
              })
            }
          </ListWrapper>
        )}
        {
          filteredMovies.length !== 0
          &&
          <PageSwitch HandleCurrentPage={(page) => handlePageSwitch(page)} TotalPages={movieData.total_pages} />
        }
      </Wrapper>
    </>
  );
}

export default Home;