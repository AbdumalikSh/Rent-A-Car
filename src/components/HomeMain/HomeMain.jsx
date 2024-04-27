import React, { useState } from "react";
import Typewriter from "typewriter-effect";
import styles from "./HomeMain.module.css";
import MainImg from "../../assets/Logo.png";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
const HomeMain = () => {
  const [state, setState] = useState({
    titleTwo: "Аренда авто с",
    titleThree: "ALFA Car",
    image: MainImg,
  });
  return (
    <div className={styles.container}>
      <div className={styles.home_intro}>
        <h2>
          <div className={styles.titleTwo}>{state.titleTwo}</div>
          <div className={styles.titleThree}>{state.titleThree}</div>
        </h2>
        <div className={styles.text}>
          <Typewriter
            options={{
              autoStart: true,
              loop: true,
              delay: 70,
              strings: [
                "Легко, Быстро, Выгодно",
                "Широкий Выбор",
                "Низкие Цены",
                "С водителем или без",
              ],
            }}
          />
        </div>
        <div>
          <Button
            sx={{ marginTop: "40px" }}
            variant="contained"
            color="primary"
            component={Link}
            to="/cars"
          >
            Арендовать Авто
          </Button>
        </div>
      </div>
      <img className={styles.mainImg} src={state.image} />
    </div>
  );
};

export default HomeMain;
