import { styled } from "@mui/system";
import CardMedia from "@mui/material/CardMedia";
import Card from "@mui/material/Card";

export const CardWrapper = styled(Card)({
  maxWidth: "345px",
  maxHeight: "450px",   
  
  display: "flex",
  justifyContent: "center",
  alignItens: "center",
  flexDirection: "column",

  boxShadow: "1px 0px 15px 4px rgba(0,0,0,0.45)",

  padding:"10px"
});

export const CardImage = styled(CardMedia)({});