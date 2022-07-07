import { styled } from "@mui/system";

import ListItemButton from "@mui/material/ListItemButton";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

export const AccountIconDiv = styled("div")({
  display: "flex",
  justifyContent: "center",
  alignItens: "center",
});


export const AccountIcon = styled(AccountCircleIcon)({
  marginTop: "10px",
  fontSize: "1.6em",
  color: "rgba(0, 0, 0, 0.54)",
});

export const ListItemButtonStyled = styled(ListItemButton)({
  padding: "10px 25px",
});