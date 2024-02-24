import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import fetchProducts from "../api/api"; // Ensure correct import path
import { Swiper, SwiperSlide } from "swiper/react"; // Import Swiper components
import "swiper/css"; // Import Swiper styles

export default function Products() {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    const getProducts = async () => {
      const result = await fetchProducts();
      if (result.data && !result.error) {
        const formattedProducts = result.data.map((item) => {
          const { id, attributes } = item;
          const { product_title, product_desc, product_Img } = attributes;

          const imageUrl =
            product_Img.data.length > 0
              ? product_Img.data[0].attributes.url
              : "";

          return {
            id,
            title: product_title,
            desc: product_desc,
            img: imageUrl,
          };
        });
        setProducts(formattedProducts);
      } else {
        setError(result.error || "An unkown error occurred!");
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
      <div className="hidden lg:block mx-auto w-[100%] bg-white">
        {/* Linking chain below */}
        <div className="container mx-auto mt-32 mb-0">
          <div className="flex">
            <p
              className="font-light hover:cursor-pointer"
              onClick={() => navigate("/")}
            >
              Home
            </p>
            <span className="ml-4 mr-4">/</span>
            <p className="font-light">Products</p>
          </div>
        </div>
        {/* Above is the linking navigation */}
        {/* Below is the title */}
        <div className="text-center">
          <h2 className="font-bold text-4xl mt-8">Products</h2>
        </div>
        {/* Below are the dynamic prosduct cards */}
        <div className="container mx-auto w-[70%]">
          <div className="grid grid-cols-3 gap-8">
            {products.map((product) => (
              <div
                key={product.id}
                className="product-card p-4 shadow-lg shadow-black rounded-3xl bg-[#f1efef] mt-12 mb-32 transition transform hover:cursor-pointer hover:scale-105 hover:shadow-2xl"
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
          </div>
        </div>
        {/* Above is the grid layout for the cards which are dynamic and add or remove based on the addition or deletion of new products */}
      </div>
      {/* Error Handling */}
      {error && <p className="text-red-500">{error}</p>}
    </div>
  );
}
