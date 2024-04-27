import CarCategory from "../CarCategory/CarCategory";
import CarPrice from "../CarPrice/CarPrice";
import CarColors from "../CarColors/CarColors";
import { Grid, Typography } from "@mui/material";

const CarSidebar = ({ handleChange, handlePriceChange }) => {
  return (
    <>
      <Grid
        container
        direction="column"
        justifyContent="flex-start"
        alignItems="center"
        sx={{
          width: { xs: "100%", md: "40%" },
          padding: "0, 20px",
          backgroundColor: "#fff",
          borderRadius: "25px",
          margin: "30px",
        }}
      >
        <Grid
          item
          container
          direction="column"
          justifyContent="flex-start"
          alignItems="stretch"
          spacing={2}
        >
          <Grid item sx={{ margin: "20px" }}>
            <Typography
              variant="h6"
              sx={{ borderBottom: "2px solid #000", margin: "20px 0" }}
            >
              Категории
            </Typography>
            <CarCategory handleChange={handleChange} />
          </Grid>
          <Grid item sx={{ margin: "20px" }}>
            <Typography
              variant="h6"
              sx={{ borderBottom: "2px solid #000", margin: "20px 0" }}
            >
              Цены
            </Typography>
            <CarPrice handleChange={handlePriceChange} />
          </Grid>
          <Grid item sx={{ margin: "20px" }}>
            <Typography
              variant="h6"
              sx={{ borderBottom: "2px solid #000", margin: "20px 0" }}
            >
              Цвета
            </Typography>
            <CarColors handleChange={handleChange} />
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default CarSidebar;
