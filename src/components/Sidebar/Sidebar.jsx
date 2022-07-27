import React from "react";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";

import VideocamIcon from '@mui/icons-material/Videocam';
import LocalMoviesIcon from '@mui/icons-material/LocalMovies';
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';

//Styles
import { ListSidebar, ListItemButtonStyled, HeaderSidebar, AccountIcon, ListIcon, ListName } from "./sidebar.styles";

export default function Sidebar({ openSidebar, handleClose }) {
  const itensSidebar = [
    {
      label: "Filmes",
      icon: <VideocamIcon />,
    },
    {
      label: "Meus Filmes",
      icon: <ReceiptLongIcon />,
    },
    {
      label: "Lançamentos",
      icon: <LocalMoviesIcon />,
    },
  ];

  return (
    <Drawer open={openSidebar} onClick={handleClose}>
      <ListSidebar role="presentation">
        <List>
          <HeaderSidebar>
            <AccountIcon />
          </HeaderSidebar>
          {itensSidebar.map((item, index) => (
            <ListItem key={index} disablePadding>
              <ListItemButtonStyled>
                <ListIcon>{item.icon}</ListIcon>
                <ListName primary={item.label} />
              </ListItemButtonStyled>
            </ListItem>
          ))}
        </List>
      </ListSidebar>
    </Drawer>
  );
}