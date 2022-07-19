import React, { useState, useEffect } from "react";
import MovieCard from "../../components/Card/Movie-Card";
import Sidebar from "../../components/Sidebar/Sidebar";
import { Header, HamburguerIcon, Wrapper, ListWrapper, H1 } from "./home.styles";
import InputSearch from "../../components/Input-search/Input-search";
import { filterList } from "../../utils/filter-list";
import { formatDate } from "../../utils/format-date";

function Home() {
  const [openSidebar, setOpenSidebar] = useState(false);
  const [searchField, setSearchField] = useState("");

  const movieList = [
    {
      img: "https://wallpaperaccess.com/full/442474.jpg",
      alt: "Batman",
      name: "Batman: O Cavaleiro das Trevas - 2008",
    },
  ]
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
          filterList(searchField, movieList).length === 0
            ?
            <H1>Ops... Nenhum resultado foi encontrado...</H1>
            :
            <ListWrapper>
              {
                filterList(searchField, movieList).map(movie => {
                  return (
                    <MovieCard
                      imgSrc={movie.img}
                      imgAlt={movie.alt}
                      movieName={movie.name} />
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