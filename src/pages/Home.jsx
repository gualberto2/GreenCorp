import React from "react";

// Card Imports:
import Card from "../components/Card";

// Icon imports:
import { AiFillCustomerService } from "react-icons/ai";
import { GoLaw } from "react-icons/go";
import { FaRecycle } from "react-icons/fa";

export default function Home() {
  return (
    <div>
      <div className="hero-bg h-screen">{/* Background image here */}</div>
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
    </div>
  );
}
