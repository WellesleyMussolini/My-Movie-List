import React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";

import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

import VideocamIcon from '@mui/icons-material/Videocam';
import LocalMoviesIcon from '@mui/icons-material/LocalMovies';
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';

//Styles
import { ListItemButtonStyled, HeaderSidebar, AccountIcon } from "./sidebar.styles";

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
      <Box role="presentation">
        <List>
          <HeaderSidebar>
            <AccountIcon />
          </HeaderSidebar>
          {itensSidebar.map((item, index) => (
            <ListItem key={index} disablePadding>
              <ListItemButtonStyled>
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.label} />
              </ListItemButtonStyled>
            </ListItem>
          ))}
        </List>
      </Box>
    </Drawer>
  );
}
