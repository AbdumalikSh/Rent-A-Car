import React from "react";
import CardService from "../CardService/CardService";
import serviceData from "../../db/serviceData";
import styles from "./Services.module.css";

const Services = () => {
  const card = serviceData.map((item) => {
    const Icon = item.icon
    return (
      <CardService key={item.name} icon={<Icon sx={{ fontSize: 40 }}/>} name={item.name} description={item.des}/>
    );
  });
  return (
    <>
      <div className={styles.main}>
        <h1 className={styles.heading}>Наши Сервисы</h1>
        <div className={styles.heading_underline}></div>
        <div className={styles.cards}>{card}</div>
      </div>
    </>
  );
};

export default Services;
