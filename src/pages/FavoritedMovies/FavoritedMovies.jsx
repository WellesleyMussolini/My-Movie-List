import React, { useState } from "react";
import MovieCard from "../../components/Card/Movie-Card";
import { ListWrapper } from "./favoritedmovies.styles";
import { filterList } from "../../utils/filter-list";
import { UseMovieContext } from "../../context/MovieContext";
import BasicAlert from "../../components/alert/Basic-Alert";
import NotFound from "../../components/not-found/Not-Found";
import { useNavigate } from "react-router-dom";

function FavoritedMovies({ search, handleSearch }) {
    const [openSucessAlert, setOpenSucessAlert] = useState(false)
    const { favoritedMovies, setFavoritedMovies } = UseMovieContext([]);

    const navigate = useNavigate();

    const filteredMovies = filterList(search, favoritedMovies);

    const unfavoriteMovie = id => {
        const deleteMovie = favoritedMovies.filter(movie => movie.id !== id);
        setFavoritedMovies(deleteMovie);
        setOpenSucessAlert(true);
    }

    const handleGetMovieId = async (movieId) => {
        navigate("/details", {
            state: { movieId },
        });
        console.log("home", movieId);
    };
    return (
        <>
            <BasicAlert
                OpenSucessAlert={openSucessAlert} HandleSucessAlert={() => setOpenSucessAlert(false)}
                SucessAlertText="Filme removido da sua lista!"
            />
            {filteredMovies.length === 0 ? (
                <NotFound Text="Ops... Nenhum resultado foi encontrado..." />
            ) : (
                <ListWrapper>
                    {filteredMovies.map((movie, index) => {
                        return (
                            <MovieCard
                                key={index}
                                isFavorited={true}
                                handleSinopse={() => handleGetMovieId(movie)}
                                handleAddFavoriteMovie={() => unfavoriteMovie(movie.id)}
                                imgSrc={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                                imgAlt={movie.alt}
                                movieName={movie.title}
                            />
                        );
                    })}
                </ListWrapper>
            )}
        </>
    );
}
export default FavoritedMovies;