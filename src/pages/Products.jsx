import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import fetchProducts from "../api/api"; // Ensure correct import path

import { RiCustomerService2Fill } from "react-icons/ri";
import { GiSailboat, GiGavel } from "react-icons/gi";
import { FaCubesStacked } from "react-icons/fa6";

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
    <section className="my-20">
      <div className="flex flex-row items-center font-extralight text-lg tracking-tight text-gray-400 gap-2 px-4 md:px-8">
        <p className="underline decoration-gray-300 ">home</p>
        <p className="text-sm">{">"}</p>
        <p>Products</p>
      </div>

      <div>
        <h2 className="md:px-8 px-4 font-bold trackingp-tighter text-4xl py-5 md:py-1">
          Products
        </h2>

        <div></div>

        {/* <div className="flex flex-row justify-center gap-4 p-4">
          <div className="w-full md:w-1/2 lg:w-1/3 p-2 transform transition-all duration-300 ease-in-out hover:scale-105">
            <div className="border border-gray-200 rounded-lg  overflow-hidden">
              <div className="bg-gradient-to-r from-green-500 to-green-400 p-6 flex flex-col items-center">
                <div className="bg-gray-700 rounded-full h-20 w-20 flex items-center justify-center">
                  <GiSailboat className="text-white text-3xl" />
                </div>
                <h4 className="text-white text-xl font-semibold mt-4">
                  Plastic, anywhere
                </h4>
              </div>
              <div className="bg-white p-6">
                <p className="text-gray-700 text-base">
                  We can deliver plastics to any part of the world. Continent to
                  continent, by air, by sea, and by asphalt.
                </p>
              </div>
            </div>
          </div>

          <div className="w-full md:w-1/2 lg:w-1/3 p-2 transform transition-all duration-300 ease-in-out hover:scale-105">
            <div className="border border-gray-200 rounded-lg overflow-hidden">
              <div className="bg-gradient-to-r from-green-600 to-green-500 p-6 flex flex-col items-center">
                <div className="bg-gray-700 rounded-full h-20 w-20 flex items-center justify-center">
                  <GiGavel className="text-white text-3xl" />
                </div>
                <h4 className="text-white text-xl font-semibold mt-4">
                  SB 270 Compliant
                </h4>
              </div>
              <div className="bg-white p-6">
                <p className="text-gray-700 text-base">
                  Our LDPE and LLDPE repro used in making reusable grocery bags
                  are compliant to California State's SB 270 standards.
                </p>
              </div>
            </div>
          </div>

          <div className="w-full md:w-1/2 lg:w-1/3 p-2 transform transition-all duration-300 ease-in-out hover:scale-105">
            <div className="border border-gray-200 rounded-lg  overflow-hidden">
              <div className="bg-gradient-to-r from-green-400 to-green-600 p-6 flex flex-col items-center">
                <div className="bg-gray-700 rounded-full h-20 w-20 flex items-center justify-center">
                  <RiCustomerService2Fill className="text-white text-3xl" />
                </div>
                <h4 className="text-white text-xl font-semibold mt-4">
                  Service, anytime
                </h4>
              </div>
              <div className="bg-white p-6">
                <p className="text-gray-700 text-base">
                  We are proud of our service team. 24-hour support allows us to
                  keep the delivery process flowing smoothly.
                </p>
              </div>
            </div>
          </div>
        </div> */}

        <div>
          <div className="flex justify-center mb-5">
            <div className="flex flex-row items-center max-w-6xl">
              <h2 className="text-2xl mr-2">Sort</h2>
              <div className="flex flex-row gap-2">
                <div className="bg-green-500 flex flex-row gap-1 items-center justify-center px-2 py-2 rounded-sm hover:bg-green-700  cursor-pointer transition duration-100 ease-in">
                  <h3 className="font-semibold  text-lg ">ALL ITEMS</h3>
                </div>
                <div className="bg-gray-300 flex flex-row gap-1 items-center justify-center px-2 py-2 rounded-sm hover:bg-gray-400  cursor-pointer transition duration-100 ease-in">
                  <FaCubesStacked />
                  <h3 className="font-semibold  text-lg">PP</h3>
                </div>
                <div className="bg-gray-300 flex flex-row gap-1 items-center justify-center px-2 py-2 rounded-sm hover:bg-gray-400  cursor-pointer transition duration-100 ease-in">
                  <FaCubesStacked />
                  <h3 className="font-semibold  text-lg">HDPE</h3>
                </div>
                <div className="bg-gray-300 flex flex-row gap-1 items-center justify-center px-2 py-2 rounded-sm hover:bg-gray-400  cursor-pointer transition duration-100 ease-in">
                  <FaCubesStacked />
                  <h3 className="font-semibold  text-lg">LDPE</h3>
                </div>
                <div className="bg-gray-300 flex flex-row gap-1 items-center justify-center px-2 py-2 rounded-sm hover:bg-gray-400  cursor-pointer transition duration-100 ease-in">
                  <FaCubesStacked />
                  <h3 className="font-semibold  text-lg">PS</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-8 lg:grid-cols-12 mb-16 mx-2">
          {products &&
            products.map((product) => (
              <div
                key={product.id}
                className="border-t md:border hover:bg-gray-50 border-gray-300 py-14 md:col-span-4 lg:col-span-4"
              >
                <img
                  src={product.img}
                  className="py-8"
                  alt={`This is an image of the ${product.title}`}
                />
                <div className="px-2">
                  <h2 className="font-medium text-4xl underline tracking-tighter decoration">
                    {product.title}
                  </h2>
                  <div className="px-2">
                    <div className="mt-3">
                      <p className="tracking-wider font-normal">
                        this product here has a short description which you are
                        currently reading, isnt it amazing? The rate we provide
                        is right below
                      </p>
                    </div>
                    <div className="my-3">
                      <div className="flex flex-row gap-2">
                        <p className="font-medium">MOQ: </p>
                        <p>300 LBS</p>
                      </div>
                      <div className="flex flex-row gap-2 mt-1">
                        <p className="font-medium">Estimated Cost per lb:</p>
                        <p>$18.88/lb</p>
                      </div>
                    </div>
                  </div>

                  <div className="text-center mt-8 flex flex-col justify-center gap-2 px-4">
                    <button className="bg-green-300  hover:bg-green-500 py-4 text-lg font-semibold tracking-wider uppercase rounded-full transition duration-150 ease-in">
                      Request a quote
                    </button>
                    <button className="bg-white px-10 hover:bg-gray-200 border border-gray-400 py-4 text-lg font-semibold tracking-wider uppercase rounded-full transition duration-150 ease-in">
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
}
