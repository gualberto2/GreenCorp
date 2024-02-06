import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Card as AboutCard } from "./about-carousel-cards";

export function Carousel({ card = [] }) {
  const [activeSlide, setActiveSlide] = useState(0);
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000, // Slide every 2 seconds
    rows: 1,
    afterChange: (current) => setActiveSlide(current),
  };

  useEffect(() => {
    // Optional: Logic to change background based on activeSlide
    // For example, update state that holds the current background image URL.
  }, [activeSlide]);

  return (
    <Slider {...settings}>
      {card.map((card, index) => (
        <div
          key={index}
          className={`border-t border-gray-200 flex flex-col ${
            index === activeSlide ? "highlight-class" : ""
          }`}
        >
          <AboutCard title={card.title} description={card.description} />
        </div>
      ))}
    </Slider>
  );
}
