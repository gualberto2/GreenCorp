import React from "react";
// import KNJLogo from "../path-to-your-logo/logo.svg"; // Update with your logo path

const Footer = () => {
  return (
    <footer className="lg:text-left pt-20 flex items-center">
      {/* Navigation Links */}
      <div className="mx-auto text-center">
        <div className="font-light pb-10">
          <div className="flex flex-col text-left lg:text-lg lg:pr-4 gap-4">
            <p className="lg:hover:cursor-pointer lg:hover:underline lg:decoration-green-500 hidden lg:block md:block">
              Home
            </p>
            <p className="lg:hover:cursor-pointer lg:hover:underline lg:decoration-green-500">
              About
            </p>
            <p className="lg:hover:cursor-pointer lg:hover:underline lg:decoration-green-500">
              Products
            </p>
            <p className="lg:hover:cursor-pointer lg:hover:underline lg:decoration-green-500">
              Contact
            </p>
          </div>
        </div>
      </div>
      <div>
        <h2 className="text-center text-2xl font-semibold">Inquiries?</h2>
        <form onSubmit="" className="w-[80%] mx-auto">
          <div className="flex flex-col items-center">
            <div className="lg:flex">
              <div className="lg:w-1/2 lg:pr-2">
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
            </div>

            <div className="lg:flex">
              <div className="lg:w-1/2 lg:pr-2">
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
            </div>

            <div className="pt-4 lg:w-full text-left">
              <button
                type="submit"
                className="py-3 px-4 font-light text-md text-white bg-[#59c9a5] rounded-md"
              >
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </footer>
  );
};

export default Footer;
