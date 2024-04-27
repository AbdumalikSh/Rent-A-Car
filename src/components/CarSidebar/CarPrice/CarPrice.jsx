import React, { useState } from "react";
import Slider from "@mui/material/Slider";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";

const CarPrice = ({ handleChange }) => {
  const [sliderValue, setSliderValue] = useState([20, 37]);
  const handleSliderChange = (event, newValue) => {
    setSliderValue(newValue);
    handleChange({ target: { value: newValue, name: "priceRange" } });
  };
  const handleInputChange = (index) => (event) => {
    const newSliderValue = [...sliderValue];
    newSliderValue[index] = event.target.value === "" ? "" : Number(event.target.value);
    setSliderValue(newSliderValue);
    handleChange({ target: { value: newSliderValue, name: "priceRange" } });
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={6}>
        <TextField
          size="small"
          label="От"
          type="number"
          value={sliderValue[0]}
          onChange={handleInputChange(0)}
          inputProps={{ min: 0, max: 1000 }}
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <TextField
          size="small"
          label="До"
          type="number"
          value={sliderValue[1]}
          onChange={handleInputChange(1)}
          inputProps={{ min: 0, max: 1000 }}
        />
      </Grid>
      <Grid item xs={12}>
        <Slider
          value={sliderValue}
          onChange={handleSliderChange}
          valueLabelDisplay="auto"
        />
      </Grid>
    </Grid>
  );
}

export default CarPrice;
