import React, { useState, useEffect } from "react";
import {
  Box,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Rating,
} from "@mui/material";
import Nav from "../../components/NavBar/Nav";
import Footer from "../../components/Footer/Footer";

const History = () => {
  const [rentedCars, setRentedCars] = useState([]);

  useEffect(() => {
    const storedRentedCars = localStorage.getItem("rentedCars");
    console.log("Stored Rented Cars:", storedRentedCars);
    if (storedRentedCars) {
      setRentedCars(JSON.parse(storedRentedCars));
    }
  }, []);

  let totalRentPrice = 0;
  rentedCars.forEach((car) => {
    totalRentPrice += car.rentPrice;
  });

  return (
    <div>
      <Nav />
      <Box m={4}>
        <Typography variant="h4">История Арендованных Mашин</Typography>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Имя/Модель</TableCell>
                <TableCell>Цена</TableCell>
                <TableCell>Рейтинг</TableCell>
                <TableCell>Продолжительность аренды</TableCell>
                <TableCell>Цена аренды</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rentedCars.map((rentedCar, index) => (
                <TableRow key={index}>
                  <TableCell>{rentedCar.title}</TableCell>
                  <TableCell>${rentedCar.price}/час</TableCell>
                  <TableCell>
                    <Rating value={rentedCar.rating} readOnly />
                  </TableCell>
                  <TableCell>{rentedCar.rentDuration} часов</TableCell>
                  <TableCell>${rentedCar.rentPrice}</TableCell>
                </TableRow>
              ))}
              <TableRow>
                <TableCell colSpan={4}>Total:</TableCell>
                <TableCell>${totalRentPrice}</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
      <Footer />
    </div>
  );
};

export default History;
