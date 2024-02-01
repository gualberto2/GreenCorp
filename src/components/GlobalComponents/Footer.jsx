import React from "react";
// import KNJLogo from "../path-to-your-logo/logo.svg"; // Update with your logo path

const Footer = () => {
  return (
    <footer className="bg-gray-200 mt-2 pt-2 lg:mt-10 md:mt-10">
      {/* Navigation Links */}
      <div>
        <div className="flex gap-4">
          <p className="hover:cursor-pointer hover:underline decoration-green-500">
            Home
          </p>
          <p className="hover:cursor-pointer hover:underline decoration-green-500">
            About
          </p>
          <p className="hover:cursor-pointer hover:underline decoration-green-500">
            Products
          </p>
          <p className="hover:cursor-pointer hover:underline decoration-green-500">
            Contact
          </p>
        </div>
        <div className="mt-2  mb-2 border-b border-black"></div>
      </div>
      <div>
        <p className="text-sm font-light">
          KnJ Green Pack Corp™
          <span className="pl-2 text-xs font-extralight">
            Powered by <span>Ocomni</span>
          </span>
        </p>
      </div>

      {/* Div for the footer form */}
      {/* <div className="bg-slate-100 lg:border-none md:border-none border-black mt-8 w-full"> */}
      {/* <form onSubmit="" className="">
          <div className="flex flex-col lg:flex-row md:flex-row items-center gap-2 lg:items-end md:items-end">
            <div className="lg:w-1/2 md:w-1/2 lg:pr-2 md:pr-2">
              <label htmlFor="first" className="font-light text-md text-gray">
                Name
              </label>
              <input
                type="text"
                id="first"
                placeholder="ex. John Wick"
                className="text-center w-full px-3 py-2 focus:ring-transparent bg-gray-200 border-gray-200 focus:bg-gray-300 focus:border-blue-800 border-[1px] rounded-md"
                required
              />
            </div>

            <div className="lg:w-1/2 md:w-1/2 lg:pr-2 md:pr-2">
              <label htmlFor="email" className="font-light text-md text-gray">
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="johnwick@email.com"
                className="text-center w-full px-3 py-2 focus:ring-transparent bg-gray-200 border-gray-200 focus:bg-gray-300 focus:border-blue-800 border-[1px] rounded-md"
                required
              />
            </div>

            <div className="text-center">
              <button
                type="submit"
                className="py-3 px-4 font-light text-md text-white bg-[#59c9a5] rounded-md"
              >
                Submit
              </button>
            </div>
          </div>
        </form> */}
      {/* </div> */}
    </footer>
  );
};

export default Footer;
