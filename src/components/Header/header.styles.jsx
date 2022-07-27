import { styled } from "@mui/system";
import Box from "@mui/material/Box";
import MenuIcon from "@mui/icons-material/Menu";

export const Container = styled(Box)({
    display: "grid",
    gridTemplateColumns: "30em auto",
    zIndex: "10",
    marginBottom: "35px",
});

export const Wrapper = styled(Box)({
    display: "flex",
    flexDirection: "column",
});

export const HamburguerIcon = styled(MenuIcon)({
    color: "#0000008a",
    cursor: "pointer",
    marginTop: "5px",
});