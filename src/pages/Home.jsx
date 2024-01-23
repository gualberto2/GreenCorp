import React from "react";

// Card Imports:
import Card from "../components/Card";
import ProductSlider from "../components/ProductSlider";

// Icon imports:
import { AiFillCustomerService } from "react-icons/ai";
import { GoLaw } from "react-icons/go";
import { FaRecycle } from "react-icons/fa";

export default function Home() {
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
      <div className="max-w-6xl mx-auto ">
        <h2 className="text-6xl font-semibold tracking-tight text-center mt-4">
          Products
        </h2>
        <div className="flex flex-row justify-between py-8">
          <div
            id="container__left "
            className="flex flex-col space-y-8 justify-start"
          >
            {/* Options */}
            <h3 className="text-5xl tracking-tighter font-semibold hover:underline decoration-purple-500 decoration-4 cursor-pointer">
              Roving Fabric
            </h3>
            <h3 className="text-5xl tracking-tighter font-semibold hover:underline decoration-purple-500 decoration-4 cursor-pointer">
              Fiberglass Products
            </h3>
            <h3 className="text-5xl tracking-tighter font-semibold hover:underline decoration-purple-500 decoration-4 cursor-pointer">
              Composite Gratings
            </h3>
          </div>
          <div id="container__right">
            <div>
              <p>More details</p>
              <img src="https://kmsibir.ru/upload/iblock/a85/a85a874075cd91c71c1677d06466be53.jpg" />
            </div>
          </div>
        </div>
        {/* <div className="flex gap-20 justify-between mx-auto max-w-4xl">
          <Card
            icon={<AiFillCustomerService />}
            title="Better Service"
            description="Our team is dedicated to getting you the best service"
          />
          <Card
            icon={<GoLaw />}
            title="CA Regulation"
            description="Our products help you maintain CA recycling compliance"
          />
          <Card
            icon={<FaRecycle />}
            title="Hand Sorted"
            description="Get better quality products with hand sorting methods"
          />
        </div> */}
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
