import React, { useState, useEffect } from "react";
import Header from "../../components/Header/Header";
import MovieCard from "../../components/Card/Movie-Card";
import { Wrapper, ListWrapper } from "./home.styles";
import { filterList } from "../../utils/filter-list";
import { containsInObject } from "../../utils/contains-in-object";
import movies from "../../services/movies";
import { UseMovieContext } from "../../context/MovieContext";
import BasicAlert from "../../components/alert/Basic-Alert";
import NotFound from "../../components/not-found/Not-Found"
import Pagination from "../../components/pagination/Pagination";
import { handlePageSwitch } from "../../utils/handle-page-switch";
import CircularProgress from '@mui/material/CircularProgress';

function Home() {
  const [searchField, setSearchField] = useState("");
  const [movieList, setMovieList] = useState([]);
  const [movieData, setMovieData] = useState([]);
  const [pageSwitcher, setPageSwitcher] = useState(1);
  const [openSucessAlert, setOpenSucessAlert] = useState(false);
  const [openWarnAlert, setOpenWarnAlert] = useState(false);
  const [loading, setLoading] = useState(false);
  const { favoritedMovies, setFavoritedMovies } = UseMovieContext([]);

  useEffect(() => {
    setLoading(true);
    const handleGetMovies = async () => {
      const data = movies.get("movie", "top_rated", pageSwitcher);
      await data.then((response) => {
        setMovieData(response.data);
        setMovieList(response.data.results);
      }).finally(() => {
        setLoading(false);
      });
    };
    handleGetMovies();
  }, [pageSwitcher]);

  const filteredMovies = filterList(searchField, movieList);

  const handleAddFavoriteMovie = (movie) => {
    const itIsFavorited = containsInObject(movie, favoritedMovies);
    if (!itIsFavorited) {
      setFavoritedMovies(prevState => [...prevState, movie]);
      setOpenSucessAlert(true);
      return;
    }
    setOpenWarnAlert(true);
  };

  const handleGetMovieId = async (id) => {
    setLoading(true);
    const data = movies.getById("movie", id);
    await data.then((response) => {
      console.log(response.data);
    }).finally(() => {
      setLoading(false);
    });
  };
  return (
    <>
      <Header inputSearch={searchField} handleTextField={setSearchField} />
      <BasicAlert
        OpenSucessAlert={openSucessAlert} HandleSucessAlert={() => setOpenSucessAlert(false)}
        SucessAlertText="Filme adicionado a sua lista!"
        OpenWarnAlert={openWarnAlert} HandleWarnAlert={() => setOpenWarnAlert(false)}
        WarnAlertText="Filme já foi adicionado a sua lista" />
      <Wrapper>
        {filteredMovies.length === 0 && !loading ? (
          <NotFound Text="Ops... Nenhum resultado foi encontrado..." />
        ) : (
          loading
            ?
            <CircularProgress />
            :
            <ListWrapper>
              {
                filteredMovies.map((movie, index) => {
                  return (
                    <MovieCard
                      key={index}
                      isFavorited={false}
                      handleSinopse={() => handleGetMovieId(movie.id)}
                      handleAddFavoriteMovie={() => handleAddFavoriteMovie(movie, index)}
                      imgSrc={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                      imgAlt={movie.alt}
                      movieName={movie.title} />
                  );
                })
              }
            </ListWrapper>
        )}
        {
          filteredMovies.length !== 0
          &&
          <Pagination HandleCurrentPage={(page) =>
            handlePageSwitch(page, movieData, setPageSwitcher, pageSwitcher)}
            TotalPages={movieData.total_pages} />
        }
      </Wrapper>
    </>
  );
}

export default Home;