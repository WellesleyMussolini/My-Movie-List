import { Container, styled } from "@mui/system";
import Box from "@mui/material/Box";
import MenuIcon from "@mui/icons-material/Menu";

export const HamburguerIcon = styled(MenuIcon)({
    color: "#0000008a",
    cursor: "pointer",
    marginTop: "5px",
});

export const Head = styled(Box)({
    display: "grid",
    gridTemplateColumns: "30em auto",
    width: "100%",
    zIndex: "10",
    marginBottom: "35px",
});

export const Content = styled(Container)({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
});