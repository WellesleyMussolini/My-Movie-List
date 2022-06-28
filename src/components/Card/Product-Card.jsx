import * as React from "react";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

//Styles
import { CardImage, CardWrapper } from "./product-card.styles";

export default function ProductCard({ imgSrc, imgAlt, productName }) {
  return (
    <CardWrapper>
      <CardImage component="img" image={imgSrc} alt={imgAlt} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {productName}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Adicionar aos favoritos</Button>
        <Button size="small">Comprar</Button>
      </CardActions>
    </CardWrapper>
  );
}
