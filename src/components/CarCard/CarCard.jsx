import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Chip,
  Rating,
  Typography,
} from "@mui/material";
import { CarRentalRounded } from "@mui/icons-material";
import { useState } from "react";
import CarModal from "../CarModal/CarModal";

const CarCard = ({ img, title, reviews, price }) => {
  const [value, setValue] = useState(2);
  const [modalOpen, setModalOpen] = useState(false);

  const chipClick = () => {
    setModalOpen(!modalOpen);
  };
  const carInfo = {
    img,
    title,
    reviews,
    price,
    rating: value,
  };

  return (
    <>
      <Card sx={{ margin: "10px", padding: "15px" }}>
        <CardMedia component="img" image={img} sx={{ height: "150px" }} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Box
            sx={{ display: "flex", alignItems: "center", marginBottom: "1rem" }}
          >
            <Rating
              value={value}
              onChange={(event, newValue) => {
                setValue(newValue);
              }}
            />
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ marginLeft: "0.5rem" }}
            >
              {reviews}
            </Typography>
          </Box>
          {/* <div style={{ display: "flex" }}>
            <div
              style={{
                width: "23px",
                height: "23px",
                borderRadius: "50%",
                backgroundColor: "green",
                marginBottom: "20px",
                marginLeft: "5px",
              }}
            />
            <div
              style={{
                width: "23px",
                height: "23px",
                borderRadius: "50%",
                backgroundColor: "green",
                marginBottom: "20px",
                marginLeft: "5px",
              }}
            />
          </div> */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              backgroundColor: "#f5f5f5",
              borderRadius: "15px",
              padding: "10px",
            }}
          >
            <Typography variant="body1">${price}/час</Typography>
            <Chip
              icon={<CarRentalRounded sx={{ color: "#535353" }} />}
              label="Арендовать"
              onClick={chipClick}
              color="primary"
            />
          </Box>
        </CardContent>
      </Card>
      <CarModal isOpen={modalOpen} handleClose={chipClick} carInfo={carInfo} />
    </>
  );
};

export default CarCard;
