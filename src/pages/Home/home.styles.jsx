import { Container, styled } from "@mui/system";
import Box from "@mui/material/Box";
import Typography from '@mui/material/Typography';
import MenuIcon from "@mui/icons-material/Menu";

export const Header = styled(Box)({
  display: "grid",
  gridTemplateColumns: "30em auto",
  zIndex: "10",
  marginBottom: "35px",
});

export const HamburguerIcon = styled(MenuIcon)({
  color: "#0000008a",
  cursor: "pointer",
  marginTop: "5px",
});

export const Wrapper = styled(Container)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "70vh",
  gap: "40px",
  flexWrap: "wrap",
  flexDirection: "row",
});

export const ListWrapper = styled(Box)({
  display: "grid",
  gridTemplateColumns: "1fr 1fr 1fr",
  gap: "25px"
});

export const EmptyContainer = styled(Typography)({
  fontWeight: 800,
  fontSize: "1.5em",
  textTransform: "uppercase",
  color: "#7a7a7add"
});