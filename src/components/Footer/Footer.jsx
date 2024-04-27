import React from "react";
import {
  Grid,
  Typography,
  IconButton,
  Box,
  List,
  ListItem,
  Link,
} from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import { Link as RouterLink } from "react-router-dom";

const Footer = () => {
  const year = new Date().getFullYear();

  const linkStyles = {
    textDecoration: "none",
    fontSize: "19px",
    transition: "0.2s",
    cursor: 'pointer',
    color: "#f1bc0d",
    "&:hover": {
      color: "#0cb9e4",
      paddingLeft: "5px",
    },
  };

  const typographyStyles = {
    textDecoration: "none",
    fontSize: "19px",
    marginBottom: "30px",
    fontWeight: 400,
    color: "#bdb6b6",
    textTransform: "capitalize",
  };

  const iconButtonStyles = {
    color: "white",
    backgroundColor: "rgba(40, 130, 214, 0.8)",
    margin: "0 8px 8px 0",
    transition: "0.2s",
  };

  return (
    <>
      <Box
        sx={{
          backgroundColor: "#052142",
          marginTop: "50px",
          padding: "60px 10%",
        }}
      >
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" sx={typographyStyles}>
              Чем могу помочь
            </Typography>
            <List sx={{ listStyle: "none", padding: 0 }}>
              <ListItem>
                <Link href="#" sx={linkStyles}>
                  Отправить отзыв
                </Link>
              </ListItem>
              <ListItem>
                <Link href="#" sx={linkStyles}>
                  Как найти машин
                </Link>
              </ListItem>
              <ListItem>
                <Link href="#" sx={linkStyles}>
                  Как найти водителей
                </Link>
              </ListItem>
              <ListItem>
                <Link href="#" sx={linkStyles}>
                  Реклама на сайте
                </Link>
              </ListItem>
            </List>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" sx={typographyStyles}>
              Страницы
            </Typography>
            <List sx={{ listStyle: "none", padding: 0 }}>
              <ListItem>
                <Link sx={linkStyles} component={RouterLink} to='/'>
                  Home
                </Link>
              </ListItem>
              <ListItem>
                <Link sx={linkStyles}  component={RouterLink} to='/cars'>
                  Cars
                </Link>
              </ListItem>
              <ListItem>
                <Link sx={linkStyles} component={RouterLink} to='/blog'>
                  Blog
                </Link>
              </ListItem>
              <ListItem>
                <Link sx={linkStyles} component={RouterLink} to='/history'>
                  History
                </Link>
              </ListItem>
            </List>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" sx={typographyStyles}>
              Свяжитесь с нами
            </Typography>
            <List sx={{ listStyle: "none", padding: 0 }}>
              <ListItem>
                <Link href="#" sx={linkStyles}>
                  info@alfacar
                </Link>
              </ListItem>
              <ListItem>
                <Link href="#" sx={linkStyles}>
                  Кол центр - 00-00
                </Link>
              </ListItem>
              <ListItem>
                <Link href="#" sx={linkStyles}>
                  +(992) 000-00-00-00
                </Link>
              </ListItem>
            </List>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" sx={typographyStyles}>
              Подпишитесь на нас
            </Typography>
            <div>
              <IconButton sx={iconButtonStyles}>
                <LinkedInIcon />
              </IconButton>
              <IconButton sx={iconButtonStyles}>
                <FacebookIcon />
              </IconButton>
              <IconButton sx={iconButtonStyles}>
                <TwitterIcon />
              </IconButton>
              <IconButton sx={iconButtonStyles}>
                <InstagramIcon />
              </IconButton>
            </div>
          </Grid>
        </Grid>
      </Box>
      <hr sx={{ width: "100%", color: "white" }} />
      <Box
        sx={{
          backgroundColor: "#052142",
          display: "flex",
          width: "100%",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography
          variant="body1"
          sx={{ ...typographyStyles, color: "#A3ABB5", margin: "10px 0" }}
        >
          Alfa - Car {year}
        </Typography>
      </Box>
    </>
  );
};

export default Footer;
