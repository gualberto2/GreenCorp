import React, { useState } from "react";

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

  return (
    <div>
      <div className="hero-bg h-screen flex items-center justify-center">
        <div className="grid grid-cols-4 grid-rows-4 gap-12 text-white ">
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
        <div className="col-start-7 col-end-12 justify-center">
          <div className="flex align-bottom gap-4 hover:cursor-pointer">
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
              title="Hand Sorted"
              description="Our team of 150 hand sorters ensure high quality products"
            />
            <Card
              onMouseEnter={() => setHoveredCard(3)}
              onMouseLeave={() => setHoveredCard(1)}
              icon={<GoLaw />}
              title="CA Regulation & Mix Ratio"
              description="Increase ESG Scores with 80% Virgin & 20% Recycled Products"
            />
          </div>
        </div>
      </div>
      {/* Products */}
      <div className="text-center bg-slate-950 p-[10rem] text-amber-100">
        <div>
          <h1 className="text-4xl font-bold">Products</h1>
        </div>
        {/* Products cards below */}
        <ProductSlider products={products} />
      </div>
    </div>
  );
}
