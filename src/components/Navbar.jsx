import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="flex justify-center ">
      <div
        id="navbar"
        className={`flex flex-col md:flex-row md:justify-between md:gap-16 rounded-lg px-3 py-2 mt-3  transition-all duration-300 ease-in-out ${
          isScrolled ? "scrolled" : ""
        }`}
      >

        <div>
          <h1 className="font-display text-2xl text-center text-white">
            KnJ GREEN PACK CORP.
          </h1>
        </div>
        <div className=" flex-row justify-between hidden md:flex md:gap-6 items-center text-white font-light  text-lg tracking-tighter">
          <p onClick={() => navigate("/")}>Home</p>
          <p>Products</p>
          <p>About</p>
          <p>Contact</p>
        </div>

      </div>
    </nav>
  );
}
