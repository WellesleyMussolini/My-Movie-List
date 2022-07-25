import * as React from "react";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

//Styles
import { CardImage, CardWrapper, BoxWrapper } from "./movie-card.styles";

export default function MovieCard({ imgSrc, imgAlt, movieName }) {
  return (
    <BoxWrapper>
      <CardWrapper>
        <CardImage component="img" image={imgSrc} alt={imgAlt} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {movieName}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="medium">Adicionar a minha lista</Button>
          <Button size="medium">Sinopse</Button>
        </CardActions>
      </CardWrapper>
    </BoxWrapper>
  );
}