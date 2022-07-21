import React, { useState, useEffect } from "react";
import MovieCard from "../../components/Card/Movie-Card";
import Sidebar from "../../components/Sidebar/Sidebar";
import { Header, HamburguerIcon, Wrapper, ListWrapper, H1, Movie } from "./home.styles";
import InputSearch from "../../components/Input-search/Input-search";
import { filterList } from "../../utils/filter-list";
import { formatDate } from "../../utils/format-date";

function Home() {
  const [openSidebar, setOpenSidebar] = useState(false);
  const [searchField, setSearchField] = useState("");

  useEffect(() => {
  }, []);

  const movieList = [
    {
      img: "https://wallpaperaccess.com/full/442474.jpg",
      alt: "Batman",
      name: "Batman: O Cavaleiro das Trevas - 2008",
    },
  ];

  const filteredMovies = filterList(searchField, movieList);

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
        {
          filteredMovies.length === 0
            ?
            <H1>Ops... Nenhum resultado foi encontrado...</H1>
            :
            <ListWrapper>
              {
                filteredMovies.map((movie, index) => {
                  return (
                    <Movie key={index}>
                      <MovieCard
                        imgSrc={movie.img}
                        imgAlt={movie.alt}
                        movieName={movie.name}
                      />
                    </Movie>
                  )
                })
              }
            </ListWrapper>
        }
      </Wrapper>
    </>
  );
}
export default Home;