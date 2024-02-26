import React, { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";

// Icon imports:
import { GiWorld, GiCheckboxTree } from "react-icons/gi";
import { GrUserWorker } from "react-icons/gr";

import {
  FaRecycle,
  FaPeopleArrows,
  FaArrowAltCircleDown,
} from "react-icons/fa";
import { MdConnectWithoutContact } from "react-icons/md";
import { TiWorld } from "react-icons/ti";
import { IoMdPaperPlane } from "react-icons/io";
import { LiaFileContractSolid } from "react-icons/lia";
import { GiMoneyStack } from "react-icons/gi";
import { CiCalculator1 } from "react-icons/ci";
import { PiTruckDuotone } from "react-icons/pi";
import { GrWorkshop } from "react-icons/gr";
import { IoMdArrowDropright } from "react-icons/io";
import { FaArrowRightToBracket } from "react-icons/fa6";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";

export default function Home() {
  // Navigate below
  const navigate = useNavigate();
  // Below is state for the about us / services card section
  const [activeItem, setActiveItem] = useState("HDPE");
  const [showTitle, setShowTitle] = useState(true);
  const [currentSection, setCurrentSection] = useState(0);
  const [hoveredCard, setHoveredCard] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      setShowTitle(window.scrollY <= 1); // The title shows when scroll position is at or below 50px
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
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

  const sections = [
    {
      title: "45,000 Pounds",
      description: "Of monthly storage volume of roving fabric in warehouse",
    },
    {
      title: "Shipping same day guaranteed!",
      description:
        "Upon conclusion of an agreement and 100% prepayment - the minimum period for issuing an order is from 1 day",
    },
    {
      title: "We work with VAT",
      description:
        "Quality guarantee under the contract. Conclusion of contracts for tender procurement Federal Law-44 and Federal Law-223",
    },
  ];

  const nextSection = () => {
    setCurrentSection((currentSection + 1) % sections.length);
  };

  const prevSection = () => {
    setCurrentSection((currentSection - 1 + sections.length) % sections.length);
  };

  const renderItemContent = () => {
    switch (activeItem) {
      /* HDPE Listings */
      case "HDPE":
        return (
          <div className="flex flex-col md:flex-row justify-start">
            <div className="flex flex-row justify-center gap-2 items-center">
              <div className="text-2xl text-white bg-[#59c9a5] rounded-full p-2 pr-3">
                <FaArrowRightToBracket />
              </div>
              <p className="text-2xl  font-medium tracking-wide lowercase">
                ISO PFR
              </p>
            </div>
            <img
              className="max-w-full h-64"
              src="src/assets/placeholderItem.png"
            />
          </div>
        );
      /* LDPE Product Listings */
      case "LDPE":
        return (
          <div className="flex flex-col md:flex-row">
            <div className="flex flex-col gap-8">
              <div className="flex flex-row justify-center gap-2 items-center">
                <div className="text-2xl text-white bg-[#59c9a5]  rounded-full p-2 pr-3">
                  <FaArrowRightToBracket />
                </div>
                <p className="text-2xl  font-medium tracking-wide lowercase">
                  ISO PFR
                </p>
              </div>
              <div className="flex flex-row justify-center gap-2 items-center">
                <div className="text-2xl text-white bg-[#59c9a5]  rounded-full p-2 pr-3">
                  <FaArrowRightToBracket />
                </div>
                <p className="text-2xl  font-medium tracking-wide lowercase">
                  FD PFR
                </p>
              </div>
              <div className="flex flex-row  justify-center gap-2 items-center">
                <div className="text-2xl text-white bg-[#59c9a5]  rounded-full p-2 pr-3">
                  <FaArrowRightToBracket />
                </div>
                <p className="text-2xl  font-medium tracking-wide lowercase">
                  ECO FR
                </p>
              </div>
            </div>
            <img
              className="max-w-full h-64"
              src="src/assets/placeholderItem.png"
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
                  <div className="text-2xl text-white bg-[#59c9a5]  rounded-full p-2 pr-3">
                    <FaArrowRightToBracket />
                  </div>
                  <p className="text-2xl  font-medium tracking-wide lowercase">
                    ISO PFR
                  </p>
                </div>
                <div className="flex flex-row justify-center gap-2 items-center">
                  <div className="text-2xl text-white bg-[#59c9a5]  rounded-full p-2 pr-3">
                    <FaArrowRightToBracket />
                  </div>
                  <p className="text-2xl  font-medium tracking-wide lowercase">
                    FD PFR
                  </p>
                </div>
                <div className="flex flex-row  justify-center gap-2 items-center">
                  <div className="text-2xl text-white bg-[#59c9a5]  rounded-full p-2 pr-3">
                    <FaArrowRightToBracket />
                  </div>
                  <p className="text-2xl  font-medium tracking-wide lowercase">
                    ECO FR
                  </p>
                </div>
                <div className="flex flex-row  justify-center gap-2 items-center">
                  <div className="text-2xl text-white bg-[#59c9a5]  rounded-full p-2 pr-3">
                    <FaArrowRightToBracket />
                  </div>
                  <p className="text-2xl  font-medium tracking-wide lowercase">
                    FRFR MUN
                  </p>
                </div>
                <div className="flex flex-row  justify-center gap-2 items-center">
                  <div className="text-2xl text-white bg-[#59c9a5]  rounded-full p-2 pr-3">
                    <FaArrowRightToBracket />
                  </div>
                  <p className="text-2xl  font-medium tracking-wide lowercase">
                    ECOECO
                  </p>
                </div>
              </div>
            </div>
            <img
              className="max-w-full h-64"
              src="src/assets/placeholderItem.png"
            />
          </div>
        );
      /* PP Product Listings */
      case "PP":
        return (
          <div className="flex flex-col md:flex-row justify-start">
            <div className="flex flex-row justify-center gap-2 items-center">
              <div className="text-2xl text-white bg-[#59c9a5]  rounded-full p-2 pr-3">
                <FaArrowRightToBracket />
              </div>
              <p className="text-2xl  font-medium tracking-wide lowercase">
                ISO PFR
              </p>
            </div>
            <img
              className="max-w-full h-64"
              src="src/assets/placeholderItem.png"
            />
          </div>
        );

      /* PS Product Listings */
      case "PS":
        return (
          <div className="flex flex-col md:flex-row justify-start">
            <div className="flex flex-row justify-center gap-2 items-center">
              <div className="text-2xl text-white bg-[#59c9a5]  rounded-full p-2 pr-3">
                <FaArrowRightToBracket />
              </div>
              <p className="text-2xl  font-medium tracking-wide lowercase">
                ISO PFR
              </p>
            </div>
            <img
              className="max-w-full h-64"
              src="src/assets/placeholderItem.png"
            />
          </div>
        );
    }
  };

  return (
    <div className="">
      {/* Hero Section */}

      <div className=" flex items-center justify-center relative">
        <div className="hero-bg h-screen  w-full">
          <div className="max-w-xl mx-auto pt-8">
            {/* <div>
              <IoMdArrowDroprightCircle />
            </div> */}
            <div
              className={`text-white/50 text-center flex flex-row justify-around text-xl font-semibold tracking-wider  items-center transition-opacity duration-500    ${
                showTitle ? "opacity-100" : "opacity-0"
              }`}
            >
              <p
                className="hover:text-green-400 hover:cursor-pointer transition duration-300 ease-in-out "
                onClick={() => navigate("/about")}
              >
                About
              </p>
              <p
                className="hover:text-green-400 hover:cursor-pointer transition duration-300 ease-in-out "
                onClick={() => navigate("/products")}
              >
                Products
              </p>
              <p
                className="hover:text-green-400 hover:cursor-pointer transition duration-300 ease-in-out "
                onClick={() => navigate("/contact")}
              >
                Contact
              </p>
            </div>
          </div>
          <div className=" flex items-center flex-col md:pt-36 pt-32 max-w-3xl mx-auto text-white ">
            <h1
              className={`font-display md:text-6xl text-5xl text-center sm:text-nowrap transition-opacity duration-500 mb-8 md:mb-0 ${
                showTitle ? "opacity-100" : "opacity-0"
              }`}
            >
              KnJ GREEN PACK CORP.
            </h1>
            <div className="flex flex-col items-start justify-center mb-4 md:pt-10 md:mb-8">
              <h2 className="text-5xl text-center tracking-tighter mb-1 md:mb-0 px-2 md:px-4 md:mt-8 font-light">
                Making a Difference with Recycling
              </h2>
              {/* <p className="text-lg px-3 tracking-wide">
                Southern California's premier PCR Recycling factory and
                manufacturer, we ensure high quality while reducing your
                environmental footprint
              </p> */}
            </div>
            <div>
              {/* contact stuff */}
              <div className="flex flex-col items-center mt-8">
                <h2 className="text-3xl font-light tracking-tighter mb-1">
                  Get a hold of us.
                </h2>

                <p className="font-thin text-4xl  tracking-wider">
                  <MdConnectWithoutContact className="hover:underline" />
                </p>
              </div>
            </div>
            <div className="arrow-bounce text-center text-6xl">
              <FaArrowAltCircleDown color="white" />
            </div>
          </div>
        </div>
      </div>

      {/* About */}
      <div>
        <div className="flex flex-col mb-12">
          <div>
            <h2 className="text-5xl tracking-tight font-semibold text-center mt-6 mb-3">
              Spotlight
            </h2>
          </div>
          <div class="flex justify-center items-center mb-3">
            <div class="border-t border-gray-300 w-16"></div>
            <span class="px-2 text-gray-400 text-xl">
              <TiWorld />
            </span>
            <div class="border-t border-gray-300 w-16"></div>
          </div>

          <div className="flex flex-col md:flex-row items-start gap-6 line-clamp-3 justify-center w-full md:gap-10 px-6 md:px-4 mx-auto  max-w-5xl">
            <div className="flex flex-col justify-center w-full text-center ">
              <div className=" bg-green-300 mx-auto rounded-full text-white text-3xl flex p-4 justify-center items-center">
                <FaRecycle className="" />
              </div>
              <h3 className="text-2xl font-semibold tracking-tighter">
                Recycling
              </h3>
              <p className="tracking-wide font-light text-md text-gray-500">
                We pride ourselves in the hassle-free and cost effective
                recycling process for associates
              </p>
              <p className="tracking-wider font-normal text-md hover:text-gray-500">
                Learn more {">"}
                {">"}
              </p>
            </div>
            <div className="flex flex-col   w-full justify-center text-center ">
              <div className=" bg-green-300  mx-auto rounded-full text-white text-3xl flex p-4 justify-center items-center">
                <FaPeopleArrows />
              </div>
              <h3 className="text-2xl font-semibold tracking-tighter">B2B</h3>
              <p className="tracking-wide font-light text-gray-500 text-md">
                Business to Business transactions are our specialty
              </p>
              <p className="tracking-wider font-normal hover:text-gray-500">
                Learn more {">"}
                {">"}
              </p>
            </div>
            <div className="flex flex-col  w-full justify-center text-center ">
              <div className=" bg-green-300  mx-auto rounded-full text-white text-3xl flex p-4 justify-center items-center">
                <GiWorld />
              </div>
              <h3 className="text-2xl font-semibold tracking-tighter">
                Shipping
              </h3>
              <p className="tracking-wide font-light text-md text-gray-500">
                No matter what continent you require material, we will get it
                shipped to you.
              </p>
              <p className="tracking-wider font-normal hover:text-gray-500">
                Learn more {">"}
                {">"}
              </p>
            </div>
            <div className="flex flex-col  w-full justify-center text-center ">
              <div className=" bg-green-300  mx-auto rounded-full text-white text-3xl flex p-4 justify-center items-center">
                <GrUserWorker />
              </div>
              <h3 className="text-2xl font-semibold tracking-tighter">
                Environment
              </h3>
              <p className="tracking-wide font-light text-md text-gray-500">
                Processing of materials is done by hand, by real people.
                Ensuring high-grade quality.
              </p>
              <p className="tracking-wider font-normal hover:text-gray-500">
                Learn more {">"}
                {">"}
              </p>
            </div>
            <div className="flex flex-col  w-full justify-center text-center ">
              <div className=" bg-green-300  mx-auto rounded-full text-white text-3xl flex p-4 justify-center items-center">
                <GiCheckboxTree />
              </div>
              <h3 className="text-2xl font-semibold tracking-tighter">
                Distribution
              </h3>
              <p className="tracking-wide font-light text-md text-gray-500">
                Tackling distribution, ensuring quality and proper delivery, we
                make handling product a stress-free operation.
              </p>
              <p className="tracking-wider font-normal hover:text-gray-500">
                Learn more {">"}
                {">"}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Middle Support  */}
      <div className="w-full">
        <div className="flex flex-col md:flex-row md:grid md:grid-cols-8">
          <div className="col-start-1 col-end-4 bg-[#59c9a5] text-white pt-12 pb-24 px-10 md:px-20 flex flex-col justify-between">
            <div>
              <h2 className="text-3xl font-bold tracking-tight mb-1">
                {sections[currentSection].title}
              </h2>
              <p className="text-lg font-light tracking-wide">
                {sections[currentSection].description}
              </p>
            </div>
            <div className="flex justify-around mt-4">
              <p className="cursor-pointer text-5xl" onClick={prevSection}>
                <FaArrowAltCircleLeft />
              </p>
              <p className="cursor-pointer text-5xl" onClick={nextSection}>
                <FaArrowAltCircleRight />
              </p>
            </div>
          </div>

          <img
            className="object-cover w-full col-start-4 col-end-9 h-[500px]"
            src="https://kmsibir.ru/upload/iblock/572/lyz6j3z00d7d8jomqhpu4s452m9t1sah.jpg"
            alt=""
          />
        </div>
      </div>

      {/* Product section */}
      <div className="">
        <div className="lg:max-w-6xl mx-auto lg:h-[500px]">
          <h2 className="text-6xl font-semibold tracking-tighter text-center mt-4">
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
                    className={`text-5xl tracking-tighter font-semibold hover:underline decoration-[#baf2bb] overflow-hidden decoration-4 ${
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
          <div className="flex flex-col md:flex-row md:grid md:grid-cols-8">
            <img
              className="object-cover w-full col-start-1 col-end-4  h-[500px]"
              src="https://kmsibir.ru/upload/iblock/607/607b205bfa260ff2987d12ad23cf1fe2.jpg"
              alt=""
            />

            <div className=" bg-[#59c9a5]  text-white pt-12 pb-24 px-10  flex flex-col justify-between col-start-4 col-end-9 row-span-1">
              <div>
                <h2 className="text-3xl font-bold tracking-tight mb-1">
                  {sections[currentSection].title}
                </h2>
                <p className="text-lg font-light tracking-wide">
                  {sections[currentSection].description}
                </p>
              </div>
              <div className="flex justify-around mt-4">
                <p className="cursor-pointer text-5xl" onClick={prevSection}>
                  <FaArrowAltCircleLeft />
                </p>
                <p className="cursor-pointer text-5xl" onClick={nextSection}>
                  <FaArrowAltCircleRight />
                </p>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="max-w-6xl mx-auto md:px-8 my-36">
            <div className="flex flex-col items-start px-3 lg:px-0">
              <h2 className="font-bold tracking-tighter text-5xl mb-1">
                Deal Stages
              </h2>
              <h5 className="text-gray-400 text-lg">
                During a deal, we keep evrerything transparent and
                understandable. We always focus on long-term cooperation .
              </h5>
            </div>
            <div>
              <div className="flex flex-col gap-8 px-4  sm:grid sm:grid-cols-2 md:grid-cols-3">
                <div className="flex flex-col items-start relative ">
                  <p className="text-9xl font-bold text-gray-200/60 absolute top-5 left-20  z-10">
                    01
                  </p>
                  <IoMdPaperPlane className="huge-icon z-20 text-[#59c9a5]" />
                  <p className="text-2xl font-light tracking-wider z-20">
                    Application
                  </p>
                </div>

                <div className="flex flex-col items-start relative ">
                  <p className="text-9xl font-bold text-gray-200/60 absolute top-5 left-20  z-10">
                    02
                  </p>
                  <CiCalculator1 className="huge-icon z-20 text-[#59c9a5]" />
                  <p className="text-2xl font-light tracking-wider">
                    Calculation of the order cost and production time
                  </p>
                </div>

                <div className="flex flex-col items-start relative ">
                  <p className="text-9xl font-bold text-gray-200/60 absolute top-5 left-20  z-10">
                    03
                  </p>

                  <LiaFileContractSolid className="huge-icon z-20 text-[#59c9a5]" />
                  <p className="text-2xl font-light tracking-wider">
                    Conclusion of an agreement
                  </p>
                </div>
                <div className="flex flex-col items-start relative ">
                  <GiMoneyStack className="huge-icon z-20 text-[#59c9a5]" />
                  <p className="text-9xl font-bold text-gray-200/60 absolute top-5 left-20  z-10">
                    04
                  </p>
                  <p className="text-2xl font-light tracking-wider">Payment</p>
                </div>
                <div className="flex flex-col items-start relative ">
                  <GrWorkshop className="smaller-big-icon z-20 text-[#59c9a5]" />
                  <p className="text-9xl font-bold text-gray-200/60 absolute top-5 left-20  z-10">
                    05
                  </p>
                  <p className="text-2xl font-light tracking-wider">
                    Processing
                  </p>
                </div>
                <div className="flex flex-col items-start relative ">
                  <p className="text-9xl font-bold text-gray-200/60 absolute top-5 left-20  z-10">
                    06
                  </p>

                  <PiTruckDuotone className="small-big-icon z-20 text-[#59c9a5]" />
                  <p className="text-2xl font-light tracking-wider">
                    Distributing
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
