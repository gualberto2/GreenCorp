import React from "react";
import { CiMail } from "react-icons/ci";

export default function ProductPageCards({ img, title }) {
  return (
    //
    <div>
      <div className="text-black lg:flex">
        <div className="">
          {img && <img src={img} alt={title} className=""></img>}
        </div>
        <div className="w-[90%] mx-auto mt-2 mb-4 lg:w-[50%] lg:mx-auto lg:flex lg:flex-col lg:items-left lg:mt-20 lg:ml-2">
          <h2 className="font-bold text-lg lg:text-2xl">{title}</h2>
          <div className="flex mt-2 justify-between items-center lg:flex lg:flex-col lg:items-start">
            <p className="font-light text-md lg:mb-4 lg:text-lg">Contact us!</p>
            <CiMail className="text-white bg-black rounded-full w-10 h-7 lg:w-20" />
          </div>
        </div>
      </div>
    </div>
    //
  );
}
