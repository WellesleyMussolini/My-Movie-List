import { styled } from "@mui/system";
import Box from "@mui/material/Box";
import Typography from '@mui/material/Typography';

export const Container = styled(Box)({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
});

export const Wrapper = styled(Typography)({
    fontWeight: 800,
    fontSize: "1.5em",
    textTransform: "uppercase",
    color: "#7a7a7add",
});  