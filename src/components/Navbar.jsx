import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { BsFillTelephoneFill } from "react-icons/bs";
import { FaBars } from "react-icons/fa"; // Icon for hamburger menu

export default function Navbar() {
  const [isTop, setIsTop] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // State to track mobile menu

  useEffect(() => {
    const handleScroll = () => {
      setIsTop(window.scrollY === 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="flex justify-between items-center p-4">
      <div className="md:hidden" onClick={handleMobileMenuToggle}>
        <FaBars />
      </div>
      <h1 className="text-4xl z-10 font-display">KNJ</h1>
      <div
        className={`absolute md:relative w-full md:w-auto transition-all ${
          isMobileMenuOpen ? "top-16" : "-top-full"
        } md:top-0`}
      >
        <ul
          className={`flex flex-col md:flex-row justify-center items-center fixed md:static bg-white md:bg-transparent w-full`}
        >
          <ul className="flex flex-col md:flex-row md:space-x-20 text-md items-center font-semibold">
            <li className="hover:cursor-pointer">Home</li>
            <li className="hover:cursor-pointer">
              <Link to="/about">About</Link>
            </li>
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
        </ul>
      </div>
    </nav>
  );
}
