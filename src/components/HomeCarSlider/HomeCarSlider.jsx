import React, { useState } from 'react';
import { Grid, Typography} from '@mui/material';
import Slider from 'react-slick';    
import toyota from '../../assets/Brands/toyota.png'
import mercedes from '../../assets/Brands/mercedes.png'
import bmw from '../../assets/Brands/bmw.png'

const CarSlider = () => {
  const cars = [
    { id: 1, name: 'Car 1', image: {toyota}, info: 'Information about Car 1' },
    { id: 2, name: 'Car 2', image: {mercedes}, info: 'Information about Car 2' },
    { id: 3, name: 'Car 3', image: {bmw}, info: 'Information about Car 3' },
  ];

  const [selectedCarIndex, setSelectedCarIndex] = useState(0);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '60px',
    afterChange: (index) => setSelectedCarIndex(index),
  };

  return (
    <Grid container justify="center" alignItems="center" spacing={2}>
      <Grid item xs={12}>
        <Slider {...settings}>
          {cars.map((car, index) => (
            <div key={car.id}>
              <img src={car.image} alt={car.name} />
            </div>
          ))}
        </Slider>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="h6">{cars[selectedCarIndex].name}</Typography>
        <Typography variant="body1">{cars[selectedCarIndex].info}</Typography>
        {/* Add other text information here */}
      </Grid>
    </Grid>
  );
};

export default CarSlider;
