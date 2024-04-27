import React, { useState } from "react";
import { Box, Grid, Typography, Modal, TextField, Button } from "@mui/material";
import { CarRentalRounded, CloseRounded } from "@mui/icons-material";
import Rating from "@mui/material/Rating";
import { DateTimePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";

const CarModal = ({ isOpen, handleClose, carInfo }) => {
  const [selectedCarImg, setSelectedCarImg] = useState(carInfo.img);
  const [selectedDateTimeFrom, setSelectedDateTimeFrom] = useState(dayjs());
  const [selectedDateTimeTo, setSelectedDateTimeTo] = useState(dayjs());
  const [rentPrice, setRentPrice] = useState(0);

  const handleCarImgClick = (imgUrl) => {
    setSelectedCarImg(imgUrl);
  };

  const handleRentDurationChange = (from, to) => {
    const diffInHours = to.diff(from, "hour");
    setRentPrice(diffInHours * carInfo.price);
  };

  const handleRentCarClick = () => {
    const rentDuration = selectedDateTimeTo.diff(selectedDateTimeFrom, "hour");
    const rentPrice = rentDuration * carInfo.price;
    const rentedCar = {
      ...carInfo,
      rentDuration,
      rentPrice,
    };
    const rentedCars = JSON.parse(localStorage.getItem("rentedCars")) || [];
    const updatedRentedCars = [...rentedCars, rentedCar];
    localStorage.setItem("rentedCars", JSON.stringify(updatedRentedCars));
    handleClose();
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Modal open={isOpen} onClose={handleClose}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            bgcolor: "background.paper",
            boxShadow: 24,
            p: 4,
            borderRadius: "20px",
          }}
        >
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <img
                src={selectedCarImg}
                alt={carInfo.title}
                style={{ width: "100%", height: '50%'}}
              />
              <Box mt={2}>
                <Typography variant="h6">{carInfo.title}</Typography>
                <Typography variant="body1">
                  Цена: ${carInfo.price}/час
                </Typography>
                <Typography variant="body1">
                  Просмотров: {carInfo.reviews}
                </Typography>
                <Rating value={carInfo.rating} readOnly></Rating>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box
                display="flex"
                flexDirection="column"
                justifyContent="center"
              >
                <Box display="flex" sx={{gap: '5px'}}>
                  <DateTimePicker
                    label="From"
                    value={selectedDateTimeFrom}
                    onChange={(newValue) => {
                      setSelectedDateTimeFrom(newValue);
                      handleRentDurationChange(newValue, selectedDateTimeTo);
                    }}
                    renderInput={(params) => <TextField {...params} />}
                  />
                  <DateTimePicker
                    label="To"
                    value={selectedDateTimeTo}
                    onChange={(newValue) => {
                      setSelectedDateTimeTo(newValue);
                      handleRentDurationChange(selectedDateTimeFrom, newValue);
                    }}
                    renderInput={(params) => <TextField {...params} />}
                  />
                </Box>
                <Typography variant="body1" sx={{marginTop: '15px', marginBottom: '15px'}}>
                  Общее кол-во времени:{" "}
                  {selectedDateTimeTo.diff(selectedDateTimeFrom, "hour")} часов
                </Typography>
                <Typography variant="body1" sx={{marginBottom: '15px'}}>
                  Цена аренды: ${rentPrice}
                </Typography>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleRentCarClick}
                  startIcon={<CarRentalRounded />}
                >
                  Арендовать
                </Button>
              </Box>
            </Grid>
          </Grid>
          <CloseRounded
            onClick={handleClose}
            sx={{
              position: "absolute",
              top: "5px",
              right: "5px",
              cursor: "pointer",
            }}
          ></CloseRounded>
        </Box>
      </Modal>
    </LocalizationProvider>
  );
};

export default CarModal;
