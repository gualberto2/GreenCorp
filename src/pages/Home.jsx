import React from "react";
// import Navbar from "../components/Navbar";

// Icons
import { RiCustomerService2Line } from "react-icons/ri";
import { GoLaw } from "react-icons/go";
import { FaRecycle } from "react-icons/fa";

export default function Home() {
  return (
    <div>
      <div className="Hero-Section h-screen">
        {/* The hero section */}
        <img
          src="https://www.frost.com/wp-content/uploads/2021/10/WasteRecycling21-min-scaled.jpg"
          alt="Animation Section"
        />
      </div>
      <div className="text-center">
        <h1 className="text-3xl font-bold">KNJ Green Corp</h1>
        <p className="pt-8 text-xl">
          Our mission is to help customers reduce their environmental footprint
          while improving their bottom line.
        </p>
      </div>
      <div className="About-Cards mt-20">
        <div className="">
          <div className="card1 flex">
            <p>
              <FaRecycle />
            </p>
            <p>Hand Sorting for Better Quality</p>
          </div>
          <div className="card2 flex">
            <p>
              <GoLaw />
            </p>
            <p>Inline with CA Plastic Regulations</p>
          </div>
          <div className="card3 flex">
            <p>
              <RiCustomerService2Line />
            </p>
            <p>Constant support and service available</p>
          </div>
        </div>
      </div>
    </div>
  );
}
