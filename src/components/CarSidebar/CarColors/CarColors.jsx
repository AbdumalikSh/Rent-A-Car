import React, { useState } from "react";
import { FormControlLabel, FormGroup, Grid, Radio } from "@mui/material";

const CarColors = ({ handleChange }) => {
  const [selectedColor, setSelectedColor] = useState("");

  const getColor = (color) => {
    switch (color) {
      case "black":
        return "#000000";
      case "blue":
        return "#0000FF";
      case "red":
        return "#FF0000";
      case "grey":
        return "#808080";
      case "white":
        return "#F1F1F1";
      default:
        return "#990066";
    }
  };

  const handleRadioChange = (event) => {
    const { value } = event.target;
    setSelectedColor(value === selectedColor ? "" : value);
    handleChange(event);
  };

  return (
    <FormGroup>
      <Grid container spacing={2} alignItems="center">
        {["", "black", "blue", "red", "grey", "white"].map((color) => (
          <Grid item xs={12} sm={6} md={4} key={color}>
            <FormControlLabel
              control={
                <Radio
                  checked={selectedColor === color}
                  onChange={handleRadioChange}
                  style={{ color: getColor(color) }}
                />
              }
              label={
                color
                  ? color === "black"
                    ? "Черный"
                    : color === "blue"
                    ? "Синий"
                    : color === "red"
                    ? "Красный"
                    : color === "grey"
                    ? "Серый"
                    : "Белый"
                  : "Все"
              }
              value={color}
            />
          </Grid>
        ))}
      </Grid>
    </FormGroup>
  );
};

export default CarColors;
