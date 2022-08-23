import { styled } from "@mui/system";
import Stack from '@mui/material/Stack';
import { Box } from "@mui/material";

export const Container = styled(Box)({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100px",
});

export const Wrapper = styled(Stack)({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
});