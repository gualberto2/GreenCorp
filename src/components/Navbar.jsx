import React, { useState, useEffect } from "react";

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
      className={`flex justify-center w-full ${
        isTop ? "h-16 bg-white" : "bg-gray-50"
      } transition-all duration-300 ease-in-out`}
    >
      <div
        className={`flex justify-around text-black p-4 items-center transition-all duration-300 ease-in-out ${
          isTop ? "" : "scrolled"
        }`}
        id="navbar"
      >
        <h1 className="text-lg">KNJ Green Corp</h1>
        <ul className="flex space-x-20 text-md items-center">
          <li className="hover:cursor-pointer">Home</li>
          <li className="hover:cursor-pointer">About</li>
          <li className="hover:cursor-pointer">Products</li>
          <li className="hover:cursor-pointer">Services</li>
          <li className="hover:cursor-pointer">
            <button className="text-white border-1 border-blue-400 bg-green-500 p-2 rounded-xl hover:bg-green-700">
              Contact
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}
