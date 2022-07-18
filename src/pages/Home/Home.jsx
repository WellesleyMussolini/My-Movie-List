import React, { useState, useEffect } from "react";
import MovieCard from "../../components/Card/Movie-Card";
import Sidebar from "../../components/Sidebar/Sidebar";
import { Header, HamburguerIcon, Wrapper } from "./home.styles";
import InputSearch from "../../components/Input-search/Input-search";
import FilteredMovies from "../../utils/movie-filter/Filtered-Movies.jsx"; 

function Home() {
  const [openSidebar, setOpenSidebar] = useState(false);
  const [searchField, setSearchField] = useState("");
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    setMovies([{
      product: <MovieCard
        imgSrc="https://wallpaperaccess.com/full/442474.jpg"
        imgAlt="Imac"
        movieName="Batman: O Cavaleiro das Trevas - 2008" />
    }]);
  }, []);

  return (
    <>
      <Header>
        <HamburguerIcon onClick={() => setOpenSidebar(true)} />
        <Sidebar
          openSidebar={openSidebar}
          handleClose={() => setOpenSidebar(false)}
        />
        <InputSearch handleOnChange={event => setSearchField(event.target.value)} textField={searchField} />
      </Header>
      <Wrapper>
        <FilteredMovies inputSearch={searchField} movies={movies} />
      </Wrapper>
    </>
  );
}
export default Home;