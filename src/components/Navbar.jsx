import React, { useState, useEffect } from "react";

// Icon import:
import { BsFillTelephoneFill } from "react-icons/bs";

export default function Navbar() {
  const [isTop, setIsTop] = useState(true); // New state to track if at top of the page

  useEffect(() => {
    const handleScroll = () => {
      setIsTop(window.scrollY === 0); // Update state based on scroll position
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`flex justify-around text-black p-8 items-center transition-all duration-300 ease-in-out ${
        isTop ? "" : "scrolled"
      }`}
      id="navbar"
    >
      <h1 className="text-lg">KNJ {/*Custom KNJ LOGO*/}</h1>
      <div
        className={`flex justify-around text-black p-4 items-center transition-all duration-300 ease-in-out ${
          isTop ? "" : "scrolled"
        }`}
      >
        <ul className="flex space-x-20 text-md items-center">
          <li className="hover:cursor-pointer">Home</li>
          <li className="hover:cursor-pointer">About</li>
          <li className="hover:cursor-pointer">Products</li>
          <li className="hover:cursor-pointer">Services</li>
          <li className="hover:cursor-pointer flex items-center">
            <span className="bg-green-500 rounded-full p-4">
              <BsFillTelephoneFill />
            </span>
            <button className="text-black border-1 p-2 rounded-xl flex flex-col">
              <p className="text-sm">(619)123-9276</p>
              <p className="text-sm">email@knjgreencorp.com</p>
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}
