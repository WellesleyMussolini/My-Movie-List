import * as React from "react";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Tooltip from '@mui/material/Tooltip';

//Styles
import { CardImage, CardWrapper, BoxWrapper, MovieTitle } from "./movie-card.styles";

export default function MovieCard({ imgSrc, imgAlt, movieName, isFavorited, handleAddFavoriteMovie, handleSinopse }) {
  return (
    <BoxWrapper>
      <CardWrapper>
        <CardImage component="img" image={imgSrc} alt={imgAlt} sx={{ objectFit: "fill" }} />
        <CardContent>
          <Tooltip title={movieName}>
            <MovieTitle gutterBottom variant="h6" component="div">
              {movieName}
            </MovieTitle>
          </Tooltip>
        </CardContent>
        <CardActions>
          <Button onClick={handleAddFavoriteMovie} size="medium">
            {isFavorited ? "Remover da minha lista" : "Adicionar a minha lista"}
          </Button>
          <Button onClick={handleSinopse} size="medium">Sinopse</Button>
        </CardActions>
      </CardWrapper>
    </BoxWrapper>
  );
}