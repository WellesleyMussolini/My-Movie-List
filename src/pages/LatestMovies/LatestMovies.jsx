import React, { useState, useEffect } from "react";
import MovieCard from "../../components/Card/Movie-Card";
import { ListWrapper } from "./latestmovies.styles";
import { filterList } from "../../utils/filter-list";
import { containsInObject } from "../../utils/contains-in-object";
import movies from "../../services/movies";
import { UseMovieContext } from "../../context/MovieContext";
import BasicAlert from "../../components/alert/Basic-Alert";
import NotFound from "../../components/not-found/Not-Found"
import Pagination from "../../components/pagination/Pagination";
import CircularProgress from '@mui/material/CircularProgress';
import { useNavigate } from "react-router-dom";

function LatestMovies({ search, handleSearch }) {
    const [movieList, setMovieList] = useState([]);
    const [movieData, setMovieData] = useState([]);
    const [pageSwitcher, setPageSwitcher] = useState(1);
    const [openSucessAlert, setOpenSucessAlert] = useState(false);
    const [openWarnAlert, setOpenWarnAlert] = useState(false);
    const [loading, setLoading] = useState(false);
    const { favoritedMovies, setFavoritedMovies } = UseMovieContext([]);

    const navigate = useNavigate();
    useEffect(() => {
        setLoading(true);
        const handleGetMovies = async () => {
            const data = movies.getLatest("movie", pageSwitcher);
            await data.then((response) => {
                setMovieData(response.data);
                setMovieList(response.data.results);
            })
        };

        const latest = movies.getLatest("movie");
        latest.then((response) => {
            console.log(response);
        });

        handleGetMovies();
        setLoading(false);
    }, [pageSwitcher]);

    const filteredMovies = filterList(search, movieList);

    const handleAddFavoriteMovie = (movie) => {
        const itIsFavorited = containsInObject(movie, favoritedMovies);
        if (!itIsFavorited) {
            setFavoritedMovies(prevState => [...prevState, movie]);
            setOpenSucessAlert(true);
            return;
        }
        setOpenWarnAlert(true);
    };

    const handleGetMovieId = async (movieId) => {
        navigate("/details", { state: { movieId } });
    };

    const HandlePageSwitch = (buttonTAG, pageNumber) => {
        return setPageSwitcher(pageNumber);
    }

    return (
        <>
            <BasicAlert
                OpenSucessAlert={openSucessAlert} HandleSucessAlert={() => setOpenSucessAlert(false)}
                SucessAlertText="Filme adicionado a sua lista!"
                OpenWarnAlert={openWarnAlert} HandleWarnAlert={() => setOpenWarnAlert(false)}
                WarnAlertText="Filme já foi adicionado a sua lista" />

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
                                        handleSinopse={() => handleGetMovieId(movie)}
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
                <Pagination
                    TotalPages={movieData.total_pages}
                    Pages={pageSwitcher}
                    HandleCurrentPage={HandlePageSwitch}
                />
            }
        </>
    );
}

export default LatestMovies;