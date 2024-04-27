import React from "react";
import styles from "./CarInput.module.css";

const CarInput = ({ handleChange, value, title, name, color }) => {
  return (
    <label className={styles.sidebar_label_container}>
      <input
        onChange={handleChange}
        type="radio"
        value={value}
        name={name}
      />
      <span
        className={styles.checkmark}
        style={{ backgroundColor: color }}
      ></span>
      {title}
    </label>
  );
};

export default CarInput;
