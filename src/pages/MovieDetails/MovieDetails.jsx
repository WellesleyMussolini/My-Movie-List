import React from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { formatDate } from "../../utils/format-date";
import { Image } from "./moviedetails.styles";
import Typography from "@mui/material/Typography";

function MovieDetails() {
    const movieId = window.history.state?.usr?.movieId;
    const navigate = useNavigate();
    useEffect(() => {
        if (movieId === undefined) {
            navigate("/");
        }
    }, []);
    return (
        <>
            <Typography gutterBottom variant="h3">{movieId.title}</Typography>
            <Image component="img" src={`https://image.tmdb.org/t/p/w500${movieId.poster_path}`} alt={movieId.title} />
            <Typography gutterBottom variant="h6">lançamento: {formatDate(movieId.release_date)}</Typography>
            <Typography gutterBottom variant="h4">Sinopse</Typography>
            <Typography variant="h6">{movieId.overview}</Typography>
        </>
    );
}
export default MovieDetails;