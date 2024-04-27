import React, { useState } from "react";
import { Checkbox, FormControlLabel, FormGroup, Grid } from "@mui/material";

const CarCategory = ({ handleChange }) => {
  const [selected, setSelected] = useState("");

  const handleCheckboxChange = (event) => {
    const { name } = event.target;
    if (selected === name) {
      setSelected("");
    } else {
      setSelected(name);
    }
    handleChange(event);
  };

  return (
    <FormGroup>
      <Grid container spacing={1}>
        <Grid item xs={12} sm={6} md={4}>
          <FormControlLabel
            control={<Checkbox name="Все" checked={selected === "Все"} onChange={handleCheckboxChange} />}
            label="Все"
            value=""
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <FormControlLabel
            control={<Checkbox name="Седан" checked={selected === "Седан"} onChange={handleCheckboxChange} />}
            label="Седан"
            value="Седан"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <FormControlLabel
            control={<Checkbox name="Кроссовер" checked={selected === "Кроссовер"} onChange={handleCheckboxChange} />}
            label="Кроссовер"
            value="Кроссовер"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <FormControlLabel
            control={<Checkbox name="Купе" checked={selected === "Купе"} onChange={handleCheckboxChange} />}
            label="Купе"
            value="Купе"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <FormControlLabel
            control={<Checkbox name="Электрокар" checked={selected === "Электрокар"} onChange={handleCheckboxChange} />}
            label="Электрокар"
            value="Электрокар"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <FormControlLabel
            control={<Checkbox name="Внедорожник" checked={selected === "Внедорожник"} onChange={handleCheckboxChange} />}
            label="Внедорожник"
            value="Внедорожник"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <FormControlLabel
            control={<Checkbox name="Хэтчбек" checked={selected === "Хэтчбек"} onChange={handleCheckboxChange} />}
            label="Хэтчбек"
            value="Хэтчбек"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <FormControlLabel
            control={<Checkbox name="Кабриолет" checked={selected === "Кабриолет"} onChange={handleCheckboxChange} />}
            label="Кабриолет"
            value="Кабриолет"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <FormControlLabel
            control={<Checkbox name="Спорткар" checked={selected === "Спорткар"} onChange={handleCheckboxChange} />}
            label="Спорткар"
            value="Спорткар"
          />
        </Grid>
      </Grid>
    </FormGroup>
  );
};

export default CarCategory