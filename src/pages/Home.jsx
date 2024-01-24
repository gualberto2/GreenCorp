import React, { useState } from "react";

import { IoMdArrowDropright } from "react-icons/io";
import { FaArrowRightToBracket } from "react-icons/fa6";

// Card Imports:
import Card from "../components/Card";
import ProductSlider from "../components/ProductSlider";
// import AboutImages from "../components/AboutImages";

// Icon imports:
import { AiFillCustomerService } from "react-icons/ai";
import { GoLaw } from "react-icons/go";
import { FaRecycle } from "react-icons/fa";

export default function Home() {
  // Below is state for the about us / services card section
  const [activeItem, setActiveItem] = useState("Roving Fabric");

  const [hoveredCard, setHoveredCard] = useState(1);

  const products = [
    // HDPE Below
    {
      img: "https://polyfit.us/img/polyfit/HDPE_PCR_BLOW_MOLD_REPRO.png",
      title: "PCR BLOW MOLD REPRO",
      description: "HDPE",
    },
    // LDPE Below
    {
      img: "https://polyfit.us/img/polyfit/LDPE_CLEAR_PCR_REPRO.png",
      title: "CLEAR PCR REPRO",
      description: "LDPE",
    },
    // LLDPE
    {
      img: "https://polyfit.us/img/polyfit/LLDPE_CLEAR_PCR_REPRO.png",
      title: "CLEAR PCR REPRO",
      description: "LLDPE",
    },
    // PP
    {
      img: "https://polyfit.us/img/polyfit/PP_REPRO.png",
      title: "PP REPRO",
      description: "PP",
    },
    // PS
    {
      img: "https://polyfit.us/img/polyfit/PS_REPRO.png",
      title: "PS REPRO",
      description: "PS",
    },
  ];

  // Service images
  const serviceImages = [
    {
      img: "src/assets/KnjStockImg/1.png",
      id: 1,
    },
    {
      img: "src/assets/KnjStockImg/2.png",
      id: 2,
    },
    {
      img: "src/assets/KnjStockImg/3.png",
      id: 3,
    },
  ];

  const hoveredImage = serviceImages.find((image) => image.id === hoveredCard);
  const calculateTranslateX = (hoveredCard) => {
    // Assuming each card takes up 33.33% of the space (for 3 cards)
    return (hoveredCard - 1) * 100;
  };

  const renderItemContent = () => {
    switch (activeItem) {
      /* HDPE Listings */
      case "HDPE":
        return (
          <div className="flex flex-col md:flex-row justify-start">
            <div className="flex flex-row justify-center gap-2 items-center">
              <div className="text-2xl text-white bg-green-500 rounded-full p-2 pr-3">
                <FaArrowRightToBracket />
              </div>
              <p className="text-2xl  font-medium tracking-wide lowercase">
                ISO PFR
              </p>
            </div>
            <img
              className="max-w-full h-auto"
              src="https://kmsibir.ru/upload/iblock/a85/a85a874075cd91c71c1677d06466be53.jpg"
            />
          </div>
        );
      /* LDPE Product Listings */
      case "LDPE":
        return (
          <div className="flex flex-col md:flex-row">
            <div className="flex flex-col gap-8">
              <div className="flex flex-row justify-center gap-2 items-center">
                <div className="text-2xl text-white bg-green-500 rounded-full p-2 pr-3">
                  <FaArrowRightToBracket />
                </div>
                <p className="text-2xl  font-medium tracking-wide lowercase">
                  ISO PFR
                </p>
              </div>
              <div className="flex flex-row justify-center gap-2 items-center">
                <div className="text-2xl text-white bg-green-500 rounded-full p-2 pr-3">
                  <FaArrowRightToBracket />
                </div>
                <p className="text-2xl  font-medium tracking-wide lowercase">
                  FD PFR
                </p>
              </div>
              <div className="flex flex-row  justify-center gap-2 items-center">
                <div className="text-2xl text-white bg-green-500 rounded-full p-2 pr-3">
                  <FaArrowRightToBracket />
                </div>
                <p className="text-2xl  font-medium tracking-wide lowercase">
                  ECO FR
                </p>
              </div>
            </div>
            <img
              className="max-w-full h-auto"
              src="https://kmsibir.ru/upload/iblock/49f/ghajzvo7zhr9mgajdqouamu7fgqq4k0j.png"
            />
          </div>
        );
      /* LLDPE Product Listings */
      case "LLDPE":
        return (
          <div className="flex flex-col md:flex-row">
            <div className="text-2xl pt-8 font-medium tracking-wide lowercase flex flex-col">
              <div className="flex flex-col gap-8">
                <div className="flex flex-row justify-center gap-2 items-center">
                  <div className="text-2xl text-white bg-green-500 rounded-full p-2 pr-3">
                    <FaArrowRightToBracket />
                  </div>
                  <p className="text-2xl  font-medium tracking-wide lowercase">
                    ISO PFR
                  </p>
                </div>
                <div className="flex flex-row justify-center gap-2 items-center">
                  <div className="text-2xl text-white bg-green-500 rounded-full p-2 pr-3">
                    <FaArrowRightToBracket />
                  </div>
                  <p className="text-2xl  font-medium tracking-wide lowercase">
                    FD PFR
                  </p>
                </div>
                <div className="flex flex-row  justify-center gap-2 items-center">
                  <div className="text-2xl text-white bg-green-500 rounded-full p-2 pr-3">
                    <FaArrowRightToBracket />
                  </div>
                  <p className="text-2xl  font-medium tracking-wide lowercase">
                    ECO FR
                  </p>
                </div>
                <div className="flex flex-row  justify-center gap-2 items-center">
                  <div className="text-2xl text-white bg-green-500 rounded-full p-2 pr-3">
                    <FaArrowRightToBracket />
                  </div>
                  <p className="text-2xl  font-medium tracking-wide lowercase">
                    FRFR MUN
                  </p>
                </div>
                <div className="flex flex-row  justify-center gap-2 items-center">
                  <div className="text-2xl text-white bg-green-500 rounded-full p-2 pr-3">
                    <FaArrowRightToBracket />
                  </div>
                  <p className="text-2xl  font-medium tracking-wide lowercase">
                    ECOECO
                  </p>
                </div>
              </div>
            </div>
            <img
              className="max-w-full h-auto"
              src="https://kmsibir.ru/upload/iblock/033/03332876d2300a8bc67e8b14a9b1f754.jpg"
            />
          </div>
        );
      /* PP Product Listings */
      case "PP":
        return (
          <div className="flex flex-col md:flex-row justify-start">
            <div className="flex flex-row justify-center gap-2 items-center">
              <div className="text-2xl text-white bg-green-500 rounded-full p-2 pr-3">
                <FaArrowRightToBracket />
              </div>
              <p className="text-2xl  font-medium tracking-wide lowercase">
                ISO PFR
              </p>
            </div>
            <img
              className="max-w-full h-auto"
              src="https://kmsibir.ru/upload/iblock/a85/a85a874075cd91c71c1677d06466be53.jpg"
            />
          </div>
        );

      /* PS Product Listings */
      case "PS":
        return (
          <div className="flex flex-col md:flex-row justify-start">
            <div className="flex flex-row justify-center gap-2 items-center">
              <div className="text-2xl text-white bg-green-500 rounded-full p-2 pr-3">
                <FaArrowRightToBracket />
              </div>
              <p className="text-2xl  font-medium tracking-wide lowercase">
                ISO PFR
              </p>
            </div>
            <img
              className="max-w-full h-auto"
              src="https://kmsibir.ru/upload/iblock/a85/a85a874075cd91c71c1677d06466be53.jpg"
            />
          </div>
        );
    }
  };

  return (
    <div>
      {/* Hero Section */}
      <div className=" flex items-center justify-center">
        <div className="hero-bg h-screen flex flex-col md:grid md:grid-cols-8 lg:grid-cols-8  grid-rows-6   p-8 text-white ">
          <div className="col-start-4 col-end-9 row-start-2 row-end-5 mb-4 md:mb-0 ml-10">
            <h2 className="text-5xl tracking-tighter mb-1 md:mb-0 px-2 md:px-4 md:mt-8 font-bold">
              Making a Difference with Recycling
            </h2>
            <p className="text-lg px-3 tracking-wide">
              Southern California's premier PCR Recycling factory and
              manufacturer, we ensure high quality while reducing your
              environmental footprint
            </p>
          </div>
          <div className="border md:col-start-1 md:col-end-4 lg:col-start-2 lg:col-end-4 row-start-2 row-end-3 flex flex-col items-center justify-center p-6 relative  shadow-sm shadow-black">
            <span className="absolute -right-5 -top-9  font-thin text-6xl">
              +
            </span>
            <p className="font-light text-4xl">350 +</p>
            <p className="pt-4 text-lg">Employees at warehouse</p>
          </div>
          <div className=" border md:col-start-1 md:col-end-4 lg:col-start-2 lg:col-end-4 row-start-3 row-end-4  flex flex-col items-center justify-center p-6 relative  shadow-lg shadow-black">
            <span className="absolute -left-5 -top-8  font-thin text-6xl">
              +
            </span>
            <p className="font-light text-4xl ">200 Tons</p>
            <p className="pt-4 text-lg">Recycled plastic per year</p>
          </div>
          <div className=" border md:col-start-1 md:col-end-4 lg:col-start-2 lg:col-end-4 row-start-4 row-end-5  flex flex-col items-center justify-center p-6 relative  shadow-xl shadow-black">
            <span className="absolute -right-5   font-thin text-6xl">+</span>
            <p className="font-light text-4xl ">13 +</p>
            <p className="pt-4 text-lg">Types of recyclables</p>
          </div>
        </div>
      </div>

      {/* Product section */}
      <div className="">
        <div className="lg:max-w-6xl mx-auto mlgd:h-[500px]">
          <h2 className="text-6xl font-semibold tracking-tight text-center mt-4">
            Products
          </h2>
          <div className="flex flex-col lg:flex-row justify-between py-8 md:px-16 md:text-nowrap">
            <div
              id="container__left"
              className="flex flex-col space-y-8 md:w-fit justify-start px-4 md:px-0 mb-8"
            >
              {["HDPE", "LDPE", "LLDPE", "PP", "PS"].map((item) => (
                <div
                  key={item}
                  onClick={() => setActiveItem(item)}
                  className={`flex items-center cursor-pointer w-full ${
                    activeItem === item ? "slide-text" : "text-gray-400"
                  }`}
                >
                  {activeItem === item && (
                    <IoMdArrowDropright className="mr-2 arrow-spin" />
                  )}
                  <h3
                    className={`text-5xl tracking-tighter font-semibold hover:underline decoration-green-500 overflow-hidden decoration-4 ${
                      activeItem === item ? "" : "hover:text-animation"
                    }`}
                  >
                    {item}
                  </h3>
                </div>
              ))}
            </div>
            <div id="container__right">{renderItemContent()}</div>
          </div>
        </div>
        {/* Middle Support  */}
        <div className="w-full">
          <div className="flex flex-col md:flex-row">
            <div className="bg-green-500 text-white pt-12 pb-24 px-4">
              <h2 className="text-3xl font-bold tracking-tight mb-1">
                45,000 Pounds
              </h2>
              <p className="text-lg font-light tracking-wide">
                Of monthly storage volume of roving fabric in warehouse
              </p>
            </div>

            <img
              className="object-cover w-full h-[300px]"
              src="https://kmsibir.ru/upload/iblock/572/lyz6j3z00d7d8jomqhpu4s452m9t1sah.jpg"
              alt=""
            />
          </div>
        </div>

        {/* About & Services */}
        <div className="grid grid-cols-12 grid-rows-1">
          <div className="col-start-1 col-end-7 row-start-0">
            {/* Conditional Images will go HERE!! */}
            {hoveredImage && (
              <div className="h-[100%] overflow-clip">
                {/* Adjust height as needed */}
                <img
                  src={hoveredImage.img}
                  alt={`Service ${hoveredCard}`}
                  className="w-full h-full object-cover"
                />
              </div>
            )}
          </div>
          <div className="col-start-7 col-end-13 justify-center">
            <div className="flex gap-2 hover:cursor-pointer mt-10 mx-2">
              <Card
                onMouseEnter={() => setHoveredCard(1)}
                onMouseLeave={() => setHoveredCard(1)}
                icon={<FaRecycle />}
                title="Recycling"
                description="Together we reduce carbon footprints by collecting your recycable materials"
              />
              <Card
                onMouseEnter={() => setHoveredCard(2)}
                onMouseLeave={() => setHoveredCard(1)}
                icon={<AiFillCustomerService />}
                title="Quality"
                description="Our team of 150 hand sorters ensure high quality products"
              />
              <Card
                onMouseEnter={() => setHoveredCard(3)}
                onMouseLeave={() => setHoveredCard(1)}
                icon={<GoLaw />}
                title="Mix"
                description="Increase ESG Scores with 80% Virgin & 20% Recycled Products"
              />
            </div>
          </div>
          <div className="sliding-bar-container col-start-7 col-end-13">
            <div
              className="sliding-bar pt-2"
              style={{
                transform: `translateX(${calculateTranslateX(hoveredCard)}%)`,
              }}
            ></div>
          </div>
        </div>
        {/* Products Carousels */}
        {/* <div className="text-center bg-slate-950 p-[10rem] text-amber-100">
          <div>
            <h1 className="text-4xl font-bold">Products</h1>
          </div>
          <ProductSlider products={products} />
        </div> */}
      </div>
    </div>
  );
}
