import React from "react";
import { CiMail } from "react-icons/ci";

export default function ProductPageCards({ img, title, description }) {
  return (
    //
    <div>
      <div className="text-black">
        <div className="">
          {img && <img src={img} alt={title} className=""></img>}
        </div>
        <div className="w-[90%] mx-auto mt-2 mb-4">
          <h2 className="font-bold text-lg">{title}</h2>
          <div className="flex mt-2 justify-between items-center">
            <p className="font-light text-md">Contact us!</p>
            <CiMail className="text-white bg-black rounded-full w-10 h-7" />
          </div>
        </div>
      </div>
    </div>
    //
  );
}
