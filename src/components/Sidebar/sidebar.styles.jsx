import { styled } from "@mui/system";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

import ListItem from "@mui/material/ListItem";

export const ListSidebar = styled(List)({
  width: "210px",
});

export const ListItemStyled = styled(ListItem)({
  height: "50vh"
});

export const HeaderSidebar = styled(Box)({
  display: "flex",
  justifyContent: "center",
  alignItens: "center",
  height: "60px",
  cursor: "pointer",
});

export const AccountIcon = styled(AccountCircleIcon)({
  marginTop: "10px",
  fontSize: "1.6em",
  color: "#0000008a",
});

export const ListIcon = styled(ListItemIcon)({
  "& svg": {
    fontSize: "25px",
  },
  "&.MuiListItemIcon-root": {
    marginRight: "-10px",
  }
});

export const ListName = styled(ListItemText)({
  "& span": {
    fontSize: "16px",
  }
});

export const ListItemButtonStyled = styled(ListItemButton)({
  display: "flex",
  flexDirection: "row",
});