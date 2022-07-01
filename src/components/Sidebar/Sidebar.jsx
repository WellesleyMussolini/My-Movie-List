import React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";

import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

import HomeIcon from "@mui/icons-material/Home";
import DesktopMacIcon from "@mui/icons-material/DesktopMac";
import LaptopChromebookIcon from "@mui/icons-material/LaptopChromebook";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";

//Styles
import { ListItemButtonStyled } from "./sidebar.styles";

export default function Sidebar({ openSidebar, handleClose }) {
  const itensSidebar = [
    {
      label: "Página Inicial",
      icon: <HomeIcon />,
    },
    {
      label: "Computadores",
      icon: <DesktopMacIcon />,
    },
    {
      label: "Celulares",
      icon: <LaptopChromebookIcon />,
    },
    {
      label: "Notebooks",
      icon: <PhoneIphoneIcon />,
    },
  ];

  return (
    <Drawer open={openSidebar} onClick={handleClose}>
      <Box role="presentation">
        <List>
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
