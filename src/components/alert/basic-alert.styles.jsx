import { styled } from "@mui/system";
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

export const Container = styled(Stack)({
    position: "fixed",
    top: "5px",
    left: "100px",
    zIndex: "3",
});

export const ShowAlert = styled(Alert)({
    height: "70px",
    width: "300px",
});