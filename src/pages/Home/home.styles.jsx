import { styled } from "@mui/system";
import Box from "@mui/material/Box";
import MenuIcon from "@mui/icons-material/Menu";

export const Header = styled(Box)({
  display: "grid",
  gridTemplateColumns: "30em auto",
  flexDirection: "row",
  zIndex: "10",
});

export const Wrapper = styled(Box)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "80vh",
  gap: "40px",
  flexWrap: "wrap",
});

export const HamburguerIcon = styled(MenuIcon)({
  color: "#0000008a",
  cursor: "pointer",
});
