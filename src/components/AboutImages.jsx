// This file is the images slider controls for the "carousel"
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AboutImgsBg from "./AboutImgsBg";

export default function AboutImages({ images = [] }) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    // ...other settings
  };

  return (
    //
    <Slider {...settings}>
      {images.map((image, index) => (
        <AboutImgsBg key={index} img={image.img} />
      ))}
    </Slider>
    //
  );
}
