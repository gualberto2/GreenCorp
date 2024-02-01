import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProductPageCards from "./ProductPageCards";

export default function ProductCarousel({ products = [] }) {
  // Carousel Settings
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    // ...other settings
  };

  return (
    //
    <Slider {...settings}>
      {products.map((product, index) => (
        <div key={index} className="rounded-xl bg-gray-200">
          <ProductPageCards // Something. Another component must've been here and it was important for some reason....
            img={product.img}
            title={product.title}
            // description={product.description}
          />
        </div>
      ))}
    </Slider>
    //
  );
}
