import React, { useState } from "react";
import Header from "../../components/Header/Header";
import MovieCard from "../../components/Card/Movie-Card";
import { Wrapper, ListWrapper } from "./favoritedmovies.styles";
import { filterList } from "../../utils/filter-list";
import { UseMovieContext } from "../../context/movieContext";
import BasicAlert from "../../components/alert/Basic-Alert";
import ErrorMessage from "../../components/not-found/Not-Found-Message";

function FavoritedMovies() {
    const [searchField, setSearchField] = useState("");
    const [openSucessAlert, setOpenSucessAlert] = useState(false)
    const { favoritedMovies, setFavoritedMovies } = UseMovieContext([]);

    const filteredMovies = filterList(searchField, favoritedMovies);

    const unfavoriteMovie = id => {
        const deleteMovie = favoritedMovies.filter(movie => movie.id !== id);
        setFavoritedMovies(deleteMovie);
        setOpenSucessAlert(true);
    }
    return (
        <>
            <Header inputSearch={searchField} handleTextField={setSearchField} />
            <BasicAlert
                OpenSucessAlert={openSucessAlert} HandleSucessAlert={() => setOpenSucessAlert(false)}
                SucessAlertText="Filme removido da sua lista!"
            />
            <Wrapper>
                {filteredMovies.length === 0 ? (
                    <ErrorMessage Text="Ops... Nenhum resultado foi encontrado..." />
                ) : (
                    <ListWrapper>
                        {filteredMovies.map((movie, index) => {
                            return (
                                <MovieCard
                                    key={index}
                                    isFavorited={false}
                                    handleAddFavoriteMovie={() => unfavoriteMovie(movie.id)}
                                    imgSrc={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
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
export default FavoritedMovies;