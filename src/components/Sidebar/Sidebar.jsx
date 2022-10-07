import React from "react";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";

import VideocamIcon from '@mui/icons-material/Videocam';
import LocalMoviesIcon from '@mui/icons-material/LocalMovies';
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';

import { Link } from "react-router-dom";

//Styles
import { ListSidebar, ListItemButtonStyled, HeaderSidebar, AccountIcon, ListIcon, ListName } from "./sidebar.styles";

export default function Sidebar({ openSidebar, handleClose }) {
  const itensSidebar = [
    {
      label: "Filmes",
      icon: <VideocamIcon />,
      route: "/",
    },
    {
      label: "Meus Filmes",
      icon: <ReceiptLongIcon />,
      route: "/favorites",
    },
    {
      label: "Lançamentos",
      icon: <LocalMoviesIcon />,
      route: "/latest-movies",
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
            <Link to={item.route} style={{ textDecoration: 'none' }} key={index}>
              <ListItem key={index} disablePadding>
                <ListItemButtonStyled>
                  <ListIcon>{item.icon}</ListIcon>
                  <ListName primary={item.label} />
                </ListItemButtonStyled>
              </ListItem>
            </Link>
          ))}
        </List>
      </ListSidebar>
    </Drawer>
  );
}