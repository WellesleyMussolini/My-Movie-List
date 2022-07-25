import React, { useState, useEffect } from "react";
import MovieCard from "../../components/Card/Movie-Card";
import Sidebar from "../../components/Sidebar/Sidebar";
import { PageContainer, Header, HamburguerIcon, Wrapper, ListWrapper, EmptyContainer } from "./home.styles";
import InputSearch from "../../components/Input-search/Input-search";
import { filterList } from "../../utils/filter-list";

function Home() {
  const [openSidebar, setOpenSidebar] = useState(false);
  const [searchField, setSearchField] = useState("");
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    const movieCatalog = [
      {
        img: "https://wallpaperaccess.com/full/442474.jpg",
        alt: "Batman",
        name: "Batman: O Cavaleiro das Trevas - 2008",
      },
      {
        img: "https://wallpaperaccess.com/full/442474.jpg",
        alt: "Batman",
        name: "Batman: O Cavaleiro das Trevas - 2008",
      },
      {
        img: "https://wallpaperaccess.com/full/442474.jpg",
        alt: "Batman",
        name: "Batman: O Cavaleiro das Trevas - 2008",
      },
      {
        img: "https://wallpaperaccess.com/full/442474.jpg",
        alt: "Batman",
        name: "Batman: O Cavaleiro das Trevas - 2008",
      },
    ];
    setMovieList(movieCatalog);
  }, []);

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
            <EmptyContainer>Ops... Nenhum resultado foi encontrado...</EmptyContainer>
            :
            <ListWrapper>
              {
                filteredMovies.map((movie, index) => {
                  return (
                    <MovieCard
                      key={index}
                      imgSrc={movie.img}
                      imgAlt={movie.alt}
                      movieName={movie.name}
                    />
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