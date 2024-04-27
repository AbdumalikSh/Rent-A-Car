import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./BrandSlider.module.css";
import brandImgSrc from "../../db/brandImgSrc";

const BrandSlider = () => {
  const [selectedImg, setSelectedImg] = useState(null);
  const handleImgClick = (index) => {
    setSelectedImg(index);
  };
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 10,
    slidesToScroll: 1,
    autoplay: true,
    speed: 4000,
    autoplaySpeed: 0,
    pauseOnHover: true,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 6,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 4,
        },
      },
    ],
  };
  return (
    <div className={styles.main}>
      <h1>Top Brands</h1>
      <Slider {...settings}>
        {brandImgSrc.map((img, index) => (
          <div className={styles.container} key={index}>
            <img src={img} onClick={() => handleImgClick(index)} />
          </div>
        ))}
      </Slider>
      {selectedImg !== null && (
        <div className={styles.select}>
          {selectedImg === 0 && <p>Additional Content for Image 1</p>}
          {selectedImg === 1 && <p>Additional Content for Image 2</p>}
          {selectedImg === 2 && <p>Additional Content for Image 3</p>}
          {selectedImg === 3 && <p>Additional Content for Image 4</p>}
          {selectedImg === 4 && <p>Additional Content for Image 5</p>}
          {selectedImg === 5 && <p>Additional Content for Image 6</p>}
        </div>
      )}
    </div>
  );
};

export default BrandSlider;
