import * as React from "react";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Tooltip from '@mui/material/Tooltip';

//Styles
import { CardImage, CardWrapper, BoxWrapper, MovieTitle } from "./movie-card.styles";

export default function MovieCard({ imgSrc, imgAlt, movieName }) {
  return (
    <BoxWrapper>
      <CardWrapper>
        <CardImage component="img" image={imgSrc} alt={imgAlt} />
        <CardContent>
          <Tooltip title={movieName}>
            <MovieTitle gutterBottom variant="h5" component="div">
              {movieName}
            </MovieTitle>
          </Tooltip>
        </CardContent>
        <CardActions>
          <Button size="medium">Adicionar a minha lista</Button>
          <Button size="medium">Sinopse</Button>
        </CardActions>
      </CardWrapper>
    </BoxWrapper>
  );
}