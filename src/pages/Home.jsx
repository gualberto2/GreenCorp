import React, { useState } from "react";

import { IoMdArrowDropright } from "react-icons/io";
import { FaArrowRightToBracket } from "react-icons/fa6";

export default function Home() {
  const [activeItem, setActiveItem] = useState("Roving Fabric");

  const renderItemContent = () => {
    switch (activeItem) {
      case "Roving Fabric":
        return (
          <div className="flex flex-col md:flex-row justify-start">
            <div className="flex flex-row justify-center gap-2 items-center">
              <div className="text-2xl text-white bg-purple-500 rounded-full p-2 pr-3">
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
      case "Fiberglass Products":
        return (
          <div className="flex flex-col md:flex-row">
            <div className="flex flex-col gap-8">
              <div className="flex flex-row justify-center gap-2 items-center">
                <div className="text-2xl text-white bg-purple-500 rounded-full p-2 pr-3">
                  <FaArrowRightToBracket />
                </div>
                <p className="text-2xl  font-medium tracking-wide lowercase">
                  ISO PFR
                </p>
              </div>
              <div className="flex flex-row justify-center gap-2 items-center">
                <div className="text-2xl text-white bg-purple-500 rounded-full p-2 pr-3">
                  <FaArrowRightToBracket />
                </div>
                <p className="text-2xl  font-medium tracking-wide lowercase">
                  FD PFR
                </p>
              </div>
              <div className="flex flex-row  justify-center gap-2 items-center">
                <div className="text-2xl text-white bg-purple-500 rounded-full p-2 pr-3">
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
      case "Composite Gratings":
        return (
          <div className="flex flex-col md:flex-row">
            <div className="text-2xl pt-8 font-medium tracking-wide lowercase flex flex-col">
              <div className="flex flex-col gap-8">
                <div className="flex flex-row justify-center gap-2 items-center">
                  <div className="text-2xl text-white bg-purple-500 rounded-full p-2 pr-3">
                    <FaArrowRightToBracket />
                  </div>
                  <p className="text-2xl  font-medium tracking-wide lowercase">
                    ISO PFR
                  </p>
                </div>
                <div className="flex flex-row justify-center gap-2 items-center">
                  <div className="text-2xl text-white bg-purple-500 rounded-full p-2 pr-3">
                    <FaArrowRightToBracket />
                  </div>
                  <p className="text-2xl  font-medium tracking-wide lowercase">
                    FD PFR
                  </p>
                </div>
                <div className="flex flex-row  justify-center gap-2 items-center">
                  <div className="text-2xl text-white bg-purple-500 rounded-full p-2 pr-3">
                    <FaArrowRightToBracket />
                  </div>
                  <p className="text-2xl  font-medium tracking-wide lowercase">
                    ECO FR
                  </p>
                </div>
                <div className="flex flex-row  justify-center gap-2 items-center">
                  <div className="text-2xl text-white bg-purple-500 rounded-full p-2 pr-3">
                    <FaArrowRightToBracket />
                  </div>
                  <p className="text-2xl  font-medium tracking-wide lowercase">
                    FRFR MUN
                  </p>
                </div>
                <div className="flex flex-row  justify-center gap-2 items-center">
                  <div className="text-2xl text-white bg-purple-500 rounded-full p-2 pr-3">
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
      default:
        return null;
    }
  };

  return (
    <div>
      {/* Hero Section */}
      <div className=" flex items-center justify-center">
        <div className="hero-bg h-screen flex flex-col md:grid md:grid-cols-8 lg:grid-cols-12  grid-rows-6   p-8 text-white ">
          <div className="col-start-5 col-end-12 row-start-2 row-end-5 mb-4 md:mb-0">
            <h2 className="text-5xl tracking-tighter mb-1 md:mb-0 px-2 md:px-4 md:mt-8 font-bold">
              Making a Difference with Recycling
            </h2>
            <p className="text-lg px-3 tracking-wide">
              Southern California's premier PCR Recycling factory and
              manufacturer, we ensure high quality while reducing your
              environmental footprint
            </p>
          </div>
          <div className="border md:col-start-1 md:col-end-4 lg:col-start-2 lg:col-end-4 row-start-2 row-end-3 flex flex-col items-center justify-center p-6 relative  shadow-xl">
            <span className="absolute -right-5 -top-9  font-thin text-6xl">
              +
            </span>
            <p className="font-normal text-4xl">350+</p>
            <p className="pt-6 font-light text-lg">Employees at warehouse</p>
          </div>
          <div className=" border md:col-start-1 md:col-end-4 lg:col-start-2 lg:col-end-4 row-start-3 row-end-4  flex flex-col items-center justify-center p-6 relative  shadow-xl">
            <span className="absolute -left-5 -top-8  font-thin text-6xl">
              +
            </span>
            <p className="font-medium text-4xl ">200 Tons</p>
            <p className="pt-6 font-light text-lg">Recycled plastic per year</p>
          </div>
          <div className=" border md:col-start-1 md:col-end-4 lg:col-start-2 lg:col-end-4 row-start-4 row-end-5  flex flex-col items-center justify-center p-6 relative  shadow-xl">
            <span className="absolute -right-5   font-thin text-6xl">+</span>
            <p className="font-medium text-4xl ">13+</p>
            <p className="pt-6 font-light text-lg">Types of recyclables</p>
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
              {[
                "Roving Fabric",
                "Fiberglass Products",
                "Composite Gratings",
              ].map((item) => (
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
                    className={`text-5xl tracking-tighter font-semibold hover:underline decoration-purple-500 overflow-hidden decoration-4 ${
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
            <div className="bg-violet-500 text-white pt-12 pb-24 px-4">
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
      </div>
    </div>
  );
}
