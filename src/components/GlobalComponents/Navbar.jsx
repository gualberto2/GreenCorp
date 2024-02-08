import React, { useState, useEffect } from "react";
import { IoIosArrowDown } from "react-icons/io";

import { useLocation, useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();

  // Initially set isScrolled based on the current page, not just false.
  // Navbar is always visible except on the home page without scrolling.
  const [isScrolled, setIsScrolled] = useState(location.pathname !== "/");

  // Check if the current page is one of the specified routes
  const isOneOfThePages = ["/about", "/contact", "/products"].includes(
    location.pathname
  );

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  useEffect(() => {
    const handleScroll = () => {
      // If the page is the home page and the user scrolled down, or it's one of the specific routes, show the navbar
      // Otherwise, if it's not the home page, always show the navbar
      setIsScrolled(
        window.scrollY > 0 || isOneOfThePages || location.pathname !== "/"
      );
    };

    window.addEventListener("scroll", handleScroll);
    // Ensure the navbar visibility updates correctly when the path changes, especially when moving away from the home page.
    handleScroll(); // Call handleScroll immediately in case the path changes to a non-home page.

    return () => window.removeEventListener("scroll", handleScroll);
  }, [location.pathname, isOneOfThePages]); // Update dependencies to include location.pathname

  return (
    <nav className="flex justify-center ">
      <div
        id="navbar"
        className={`flex flex-col justify-around items-center md:flex-row md:justify-between md:gap-16 rounded-lg px-3 py-1 md:py-2 mt-3 transition-all duration-300 ease-in-out ${
          isScrolled ? "scrolled" : ""
        }`}
      >
        <div>
          <h1 className="flex flex-col items-center">
            <span className="font-display text-2xl text-center ">
              KnJ GREEN PACK CORP.
            </span>
            <span className="flex md:hidden">
              <IoIosArrowDown className="text-gray-200 font-bold jumpin-arrow" />
            </span>
          </h1>
        </div>
        {/* <div className="flex md:hidden">
          <button className="text-white text-lg font-bold">v</button>
        </div> */}
        <div className=" flex-row justify-between hidden md:flex md:gap-6 text-white items-center  font-light  text-lg tracking-tighter">
          <p
            onClick={() => navigate("/")}
            className="hover:cursor-pointer  transition duration-150 ease-in-out hover:text-[#56e39f]"
          >
            Home
          </p>
          <p
            onClick={() => navigate("/products")}
            className="hover:cursor-pointer hover:text-[#56e39f]  transition duration-150 ease-in-out"
          >
            Products
          </p>
          <p
            onClick={() => navigate("/about")}
            className="hover:cursor-pointer transition duration-150 ease-in-out hover:text-[#56e39f]"
          >
            About
          </p>
          <p
            onClick={() => navigate("/contact")}
            className="hover:cursor-pointer hover:text-[#56e39f]  transition duration-150 ease-in-out"
          >
            Contact
          </p>
        </div>
      </div>
    </nav>
  );
}
