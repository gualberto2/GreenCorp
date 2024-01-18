import React from "react";
import { useEffect } from "react";

export default function Navbar() {
  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.getElementById("navbar");
      if (window.scrollY > 0) {
        navbar.classList.add("scrolled");
      } else {
        navbar.classList.remove("scrolled");
      }
    };

    // Add the event listener
    window.addEventListener("scroll", handleScroll);

    // Remove the event listener on cleanup
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="flex justify-center">
      {/* The parent div of the entire component ABOVE */}
      <div
        className="flex justify-around text-white p-4 items-center rounded-full mt-4"
        id="navbar"
      >
        {/* The PARENT div of the navigation bar is ABOVE*/}
        <h1 className="text-lg">KNJ Green Corp</h1>
        <ul className="flex space-x-20 text-md items-center">
          <li className="hover:cursor-pointer">Home</li>
          <li className="hover:cursor-pointer">About</li>
          <li className="hover:cursor-pointer">Products</li>
          <li className="hover:cursor-pointer">Services</li>
          <li className="hover:cursor-pointer">
            <button className="border-1 border-blue-400 bg-green-500 p-2 rounded-xl hover:bg-green-700">
              Contact
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}
