import { Button } from "@mui/material";
import styles from "./CardService.module.css";

const CardService = (props) => {
  return (
    <div className={styles.card}>
      {props.icon}
      <h3>{props.name}</h3>
      <p>{props.description}</p>
    </div>
  );
};

export default CardService;
