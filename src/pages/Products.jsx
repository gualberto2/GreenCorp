import React, { useState, useEffect } from "react";
import fetchProducts from "../api/api"; // Ensure correct import path
import { Swiper, SwiperSlide } from "swiper/react"; // Import Swiper components
import "swiper/css"; // Import Swiper styles

export default function Products() {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const getProducts = async () => {
      const result = await fetchProducts();
      if (result.data && !result.error) {
        const formattedProducts = result.data.map((item) => {
          const { id, attributes } = item;
          const { Product_Title, Product_Desc, Product_IMG } = attributes;
          // Assuming the first image in the data array is the primary image.
          const imageUrl =
            Product_IMG.data.length > 0
              ? `http://localhost:1337${Product_IMG.data[0].attributes.url}` // Prefix with your API base URL
              : "";

          return {
            id,
            title: Product_Title,
            desc: Product_Desc,
            img: imageUrl,
          };
        });
        setProducts(formattedProducts);
      } else {
        setError(result.error || "An unknown error occurred!");
      }
    };
    getProducts();
  }, []);

  return (
    <div>
      {/* Mobile Carousel */}
      <div className="lg:hidden block">
        <Swiper
          // Swiper parameters such as slidesPerView, loop, etc.
          spaceBetween={50}
          slidesPerView={1}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          {products.map((product) => (
            <SwiperSlide key={product.id} className="product-card">
              {/* Render your product details here */}
              <img src={product.img} alt={product.title} />
              <h2>{product.title}</h2>
              <p>{product.desc}</p>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Desktop Grid */}
      <div className="hidden lg:block">
        <div className="grid grid-cols-3 gap-4">
          {products.map((product) => (
            <div
              key={product.id}
              className="product-card p-4 shadow-lg rounded-lg"
            >
              <img
                src={product.img}
                alt={product.title}
                className="w-full h-auto object-cover rounded"
              />
              <h2 className="text-xl font-bold mt-2">{product.title}</h2>
              <p className="text-gray-600">{product.desc}</p>
              {/* Add more product details here */}
            </div>
          ))}
          ;
        </div>
      </div>
      {/* Error Handling */}
      {error && <p className="text-red-500">{error}</p>}
    </div>
  );
}
