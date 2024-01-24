import React, { useState } from "react";

// Card Imports:
import Card from "../components/Card";
import ProductSlider from "../components/ProductSlider";

// Icon imports:
import { IoMdArrowDropright } from "react-icons/io";

import { AiFillCustomerService } from "react-icons/ai";
import { GoLaw } from "react-icons/go";
import { FaRecycle } from "react-icons/fa";

export default function Home() {
  const [activeItem, setActiveItem] = useState("Roving Fabric");

  const renderItemContent = () => {
    switch (activeItem) {
      case "Roving Fabric":
        return (
          <div className="flex flex-row">
            <p className="text-">More details</p>
            <img src="https://kmsibir.ru/upload/iblock/a85/a85a874075cd91c71c1677d06466be53.jpg" />
          </div>
        );
      case "Fiberglass Products":
        return (
          <div className="flex flex-row">
            <p>ISO PFR</p>
            <p>FD PFR</p>
            <p>ECO FR</p>
            <img src="https://kmsibir.ru/upload/iblock/49f/ghajzvo7zhr9mgajdqouamu7fgqq4k0j.png" />
          </div>
        );
      case "Composite Gratings":
        return (
          <div className="flex flex-row">
            <div>
              <p>Profile</p>
              <p>Shveler</p>
              <p>Pipe</p>
              <p>Fastenings</p>
            </div>
            <img src="https://kmsibir.ru/upload/iblock/033/03332876d2300a8bc67e8b14a9b1f754.jpg" />
          </div>
        );
      default:
        return null;
    }
  };

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

  return (
    <div>
      <div className="hero-bg h-screen flex items-center justify-center">
        <div className="grid grid-cols-4 grid-rows-9 gap-12 text-white ">
          <div className="border-2 border-slat-400 row-start-3 row-end-5 flex flex-col items-center justify-center p-6 relative shadow-black shadow-xl">
            <span className="plus-sign left font-thin">+</span>
            <p className="font-thin text-4xl ">200 Tons</p>
            <p className="pt-6 text-lg">Recycled plastic per year</p>
          </div>
          <div className="border-2 border-slate-400 row-start-5 row-end-7 flex flex-col items-center justify-center p-6 relative shadow-black shadow-xl">
            <p className="font-thin text-4xl">350</p>
            <p className="pt-6 text-lg">Employees at warehouse</p>
            <span className="plus-sign right font-thin">+</span>
          </div>
          <div className="row-start-3 row-end-5 col-span-3">
            <h2 className="text-6xl font-bold">
              Making a Difference with Recycling
            </h2>
            <p className="text-lg my-4">
              Southern California's premier PCR Recycling factory and
              manufacturer, we ensure high quality while reducing your
              environmental footprint
            </p>
          </div>
        </div>
      </div>
      <div className="max-w-6xl mx-auto h-[500px]">
        <h2 className="text-6xl font-semibold tracking-tight text-center mt-4">
          Products
        </h2>
        <div className="flex flex-row justify-between py-8 ">
          <div
            id="container__left "
            className="flex flex-col space-y-8 justify-start"
          >
            {["Roving Fabric", "Fiberglass Products", "Composite Gratings"].map(
              (item) => (
                <div
                  key={item}
                  onClick={() => setActiveItem(item)}
                  className={`flex items-center cursor-pointer ${
                    activeItem === item ? "slide-text" : "text-gray-400"
                  }`}
                >
                  {activeItem === item && (
                    <IoMdArrowDropright className="mr-2 arrow-spin" />
                  )}
                  <h3
                    className={`text-5xl tracking-tighter font-semibold hover:underline decoration-purple-500 decoration-4 ${
                      activeItem === item ? "" : "hover:text-animation"
                    }`}
                  >
                    {item}
                  </h3>
                </div>
              )
            )}
          </div>
          <div id="container__right">{renderItemContent()}</div>
        </div>
      </div>
      <div className="text-center bg-slate-950 p-[10rem] text-amber-100">
        <div>
          <h1 className="text-4xl font-bold">Products</h1>
        </div>
        {/* Products cards below */}
        <ProductSlider products={products} />
        {/* <div className="cards"></div>
        <ProductCards
          img={"https://polyfit.us/img/polyfit/HDPE_PCR_BLOW_MOLD_REPRO.png"}
          title="PCR BLOW MOLD REPRO"
          description="HDPE"
        />
        <ProductCards
          img={"https://polyfit.us/img/polyfit/LDPE_CLEAR_PCR_REPRO.png"}
          title="CLEAR PCR REPRO"
          description="LDPE"
        />

        <ProductCards
          img={"https://polyfit.us/img/polyfit/LLDPE_CLEAR_PCR_REPRO.png"}
          title="LLDPE"
          description="Clear PCR Repro"
        />
        <ProductCards
          img={"https://polyfit.us/img/polyfit/PP_REPRO.png"}
          title="PP"
          description=""
        />
        <ProductCards
          img={"https://polyfit.us/img/polyfit/PS_REPRO.png"}
          title="PS"
          description=""
        /> */}
      </div>
    </div>
  );
}
