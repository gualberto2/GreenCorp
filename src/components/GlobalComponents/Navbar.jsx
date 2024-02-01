import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  // Check if the current page is one of the specified routes
  const isOneOfThePages = ["/about", "/contact", "/products"].includes(
    location.pathname
  );

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  useEffect(() => {
    const handleScroll = () => {
      // If the page is one of the specific routes or user scrolled down, show the navbar
      setIsScrolled(window.scrollY > 0 || isOneOfThePages);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isOneOfThePages]); // Add isOneOfThePages as a dependency so it updates when the route changes

  return (
    <nav className="flex justify-center ">
      <div
        id="navbar"
        className={`flex flex-col md:flex-row md:justify-between md:gap-16 rounded-lg px-3 py-2 mt-3 transition-all duration-300 ease-in-out ${
          isScrolled ? "scrolled" : ""
        }`}
      >
        <div>
          <h1 className="font-display text-2xl text-center ">
            KnJ GREEN PACK CORP.
          </h1>
        </div>
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
