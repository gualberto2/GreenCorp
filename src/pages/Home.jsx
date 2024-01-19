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
      <div className="Hero-Section h-fit">
        {/* The hero section */}
        <img
          src="https://th.bing.com/th/id/R.e3d44cbf0d403a667352b183271486fe?rik=rSqx67GOByaFAg&riu=http%3a%2f%2fwallup.net%2fwp-content%2fuploads%2f2015%2f12%2f204024-road-sunset-field-Italy-clouds-grass-mountain-wildflowers-green-landscape-nature.jpg&ehk=BXynnaZJuEVj7f4iL2lViOA7yqCafPd28qizWIxqfVc%3d&risl=&pid=ImgRaw&r=0"
          alt="Animation Section"
        />
      </div>
      <div className="About-Card pt-20 p-20">
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
