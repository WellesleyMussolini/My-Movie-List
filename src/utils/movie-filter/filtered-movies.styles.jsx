import { styled } from "@mui/system";
import Box from "@mui/material/Box";
import Typography from '@mui/material/Typography';

export const Wrapper = styled(Box)({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
});

export const H1 = styled(Typography)({
    fontWeight: 800,
    fontSize: "1.5em",
    textTransform: "uppercase",
    color: "#7a7a7add"
});

export const ListWrapper = styled(Box)({
    display: "grid",
    gridTemplateColumns: "1fr 1fr 1fr",
});

export const ListItems = styled(Box)({
    paddingRight: "30px",
    paddingTop: "30px",
});