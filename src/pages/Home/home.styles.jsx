import { styled } from "@mui/system";
import Box from "@mui/material/Box";
import MenuIcon from '@mui/icons-material/Menu';

export const Wrapper = styled(Box)({
    display: "flex",
    justifyContent: "center",
    alignItens: "center",
    flexDirection: "column",
    height: "100vh",
});

export const HamburguerIcon = styled(MenuIcon)({
    color: "#0000008a",
    cursor: "pointer",
});