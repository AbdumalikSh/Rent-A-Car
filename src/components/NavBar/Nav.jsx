import React, { useState } from "react";
import {
  Box,
  AppBar,
  Button,
  Tab,
  Tabs,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import DrawerC from "../Drawer/DrawerC";
import Logo from "../../assets/alfaLogo.jpg";
import { Link, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { handleLogout } from "../../store/features/auth/auth";

const Pages = ["home", "cars", "blog", "history"];

const Nav = (backgroundColor = "white") => {
  // console.log(backgroundColor);
  const location = useLocation();
  const theme = useTheme();
  const displaySize = useMediaQuery(theme.breakpoints.down("md"));
  const [value, setValue] = useState(getSelectedTab());
  const isAuth = useSelector((state) => state.auth.isAuth);
  const dispatch = useDispatch();

  function getSelectedTab() {
    const path = location.pathname.substring(1);
    return Pages.indexOf(path) >= 0 ? Pages.indexOf(path) : 0;
  }

  const handleChange = (newValue) => {
    setValue(newValue);
  };
  const handleLogoutClick = () => {
    dispatch(handleLogout());
  };

  return (
    <>
      {/* <Box sx={{ background: `${backgroundColor} !important` }}> */}
      <Box sx={{ backgroundColor }}>
        <AppBar
          sx={{
            height: "65px",
            background: "black",
            borderBottomLeftRadius: "25px",
            borderBottomRightRadius: "25px",
          }}
          position="static"
        >
          <Toolbar>
            <Typography>
              <img src={Logo} style={{ height: "60px" }} alt="Logo" />
            </Typography>
            <Typography sx={{ fontSize: "1.5rem", paddingLeft: "2%" }}>
              ALFA-Car
            </Typography>
            {displaySize ? (
              <DrawerC />
            ) : (
              <>
                <Tabs
                  textColor="inherit"
                  sx={{ margin: "auto" }}
                  value={value}
                  onChange={(e, newValue) => handleChange(newValue)}
                >
                  {Pages.map((page, index) => (
                    <Tab
                      key={index}
                      label={page}
                      component={Link}
                      to={index === 0 ? "/" : `/${page}`}
                    />
                  ))}
                </Tabs>
              </>
            )}
            {isAuth ? (
              <Button
                onClick={handleLogoutClick}
                sx={{ background: "white", color: "black" }}
                variant="contained"
              >
                Выход
              </Button>
            ) : (
              <Button
                component={Link}
                to="/login"
                sx={{ background: "white", color: "black" }}
                variant="contained"
              >
                Вход
              </Button>
            )}
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
};

export default Nav;
