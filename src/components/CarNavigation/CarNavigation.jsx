import { TextField } from "@mui/material";

const CarNavigation = ({ handleInputChange, inputData }) => {
  return (
    <TextField
      onChange={handleInputChange}
      value={inputData}
      variant="outlined"
      size="small"
      label="Введите имя машины"
      sx={{ marginTop: "40px", width: "60%", backgroundColor: "#fff"}}
    />
  );
};

export default CarNavigation;
