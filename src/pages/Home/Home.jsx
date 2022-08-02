import React, { useState, useEffect } from "react";
import Header from "../../components/Header/Header";
import MovieCard from "../../components/Card/Movie-Card";
import { Wrapper, ListWrapper, EmptyContainer } from "./home.styles";
import { filterList } from "../../utils/filter-list";
import { getTopRatedMovies } from "../../services/movies";

function Home() {
  const [searchField, setSearchField] = useState("");
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    const movieCatalog = [
      {
        poster_path: "https://wallpaperaccess.com/full/442474.jpg",
        alt: "Batman",
        title: "Batman: O Cavaleiro das Trevas - 2008",
      }];

    const data = getTopRatedMovies("movie", "top_rated", 1);
    data.then(resp => {
      // setMovieList(resp.data.results);
    });
    setMovieList(movieCatalog); //apagar essa linha no futuro
  }, []);

  const filteredMovies = filterList(searchField, movieList);

  return (
    <>
      <Header inputSearch={searchField} handleTextField={setSearchField} />
      <Wrapper>
        {filteredMovies.length === 0 ? (
          <EmptyContainer>
            Ops... Nenhum resultado foi encontrado...
          </EmptyContainer>
        ) : (
          <ListWrapper>
            {filteredMovies.map((movie, index) => {
              return (
                <MovieCard
                  key={index}
                  imgSrc={movie.poster_path}
                  imgAlt={movie.alt}
                  movieName={movie.title}
                />
              );
            })}
          </ListWrapper>
        )}
      </Wrapper>
    </>
  );
}
export default Home;