import {
  Divider,
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import React, { useState } from "react";
import { Close } from "@mui/icons-material";
import { Link } from "react-router-dom";

const Pages = ["Home", "Cars", "Blog", "History"];
const PageRoutes = ["/", "/cars", "/blog", "/history"];
const DrawerC = () => {
  const [openDrawer, setOpenDrawer] = useState(false);
  return (
    <>
      <Drawer
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        anchor="top"
        sx={{ opacity: "0.7" }}
      >
        <List>
          <IconButton
            sx={{ color: "black", marginLeft: '90%'}}
            onClick={() => setOpenDrawer(false)}
          >
            <Close />
          </IconButton>
          <Divider />
          {Pages.map((page, index) => (
            <ListItemButton component = {Link} to ={PageRoutes[index]} onClick={() => setOpenDrawer(false)} key={index}>
              <ListItemIcon>
                <ListItemText sx={{ color: "black" }}>{page}</ListItemText>
              </ListItemIcon>
            </ListItemButton>
          ))}
        </List>
      </Drawer>
      <IconButton
        sx={{ color: "white", marginLeft: "auto" }}
        onClick={() => setOpenDrawer(!openDrawer)}
      >
        <MenuIcon />
      </IconButton>
    </>
  );
};

export default DrawerC;
