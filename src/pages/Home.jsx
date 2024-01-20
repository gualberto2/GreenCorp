import React from "react";

// Card Imports:
import Card from "../components/Card";
import ProductCards from "../components/ProductCards";

// Icon imports:
import { AiFillCustomerService } from "react-icons/ai";
import { GoLaw } from "react-icons/go";
import { FaRecycle } from "react-icons/fa";

export default function Home() {
  return (
    <div>
      <div className="hero-bg h-screen flex items-center justify-center">
        <div className="grid grid-cols-4 grid-rows-9 gap-12 text-white">
          <div className="border-2 border-slat-400 row-start-3 row-end-5 flex flex-col items-center justify-center p-6 relative">
            <span className="plus-sign left">+</span>
            <p className="font-thin text-4xl">200 Tons</p>
            <p className="pt-6 text-lg">Recycled plastic per year</p>
            <span className="plus-sign right">+</span>
          </div>
          <div className="border-2 border-slate-400 row-start-5 row-end-7 flex flex-col items-center justify-center p-6">
            <p className="font-thin text-4xl">350</p>
            <p className="pt-6 text-lg">Employees at warehouse</p>
          </div>
        </div>
      </div>
      <div className="pt-20 p-20">
        <div className="flex gap-20 justify-between mx-auto max-w-4xl">
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
        </div>
      </div>
      <div className="text-center bg-slate-950 p-[10rem] text-amber-100">
        <h1 className="text-3xl font-bold">KNJ Green Corp</h1>
        <p className="pt-8 text-xl">
          Our mission is to help customers reduce their environmental footprint
          while improving their bottom line.
        </p>
      </div>
      {/* Products cards below */}
      <div>
        <ProductCards />
        <ProductCards />
        <ProductCards />
      </div>
    </div>
  );
}
