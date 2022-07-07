import { styled } from "@mui/system";
import Box from "@mui/material/Box";
import ListItemButton from "@mui/material/ListItemButton";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

export const HeaderSidebar  = styled(Box)({
  display: "flex",
  justifyContent: "center",
  alignItens: "center",
  cursor: "pointer",
});


export const AccountIcon = styled(AccountCircleIcon)({
  marginTop: "10px",
  fontSize: "1.6em",
  color: "#0000008a",
});

export const ListItemButtonStyled = styled(ListItemButton)({
  padding: "10px 25px",
});