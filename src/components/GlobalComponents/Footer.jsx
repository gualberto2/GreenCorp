import React from "react";
// import KNJLogo from "../path-to-your-logo/logo.svg"; // Update with your logo path

const Footer = () => {
  return (
    <footer className="lg:text-left pt-12">
      <div className="lg:flex lg:max-w-6xl lg:mx-auto">
        <div className="w-full lg:w-auto border-t border-slate-400">
          <h2 className="text-center text-2xl font-semibold">
            Let's get in touch
          </h2>
          <form onSubmit="" className="w-[70%] mx-auto ">
            <div className="flex flex-col">
              {/* Name Input Fields */}
              <div className="lg:flex">
                {/* First Name */}
                <div className="flex flex-col lg:w-1/2 lg:pr-2">
                  <label
                    htmlFor="first"
                    className="font-light text-md text-gray"
                  >
                    First Name
                  </label>
                  <input
                    type="text"
                    id="first"
                    placeholder="ex. John"
                    className="text-center w-full px-3 py-2 focus:ring-transparent bg-gray-200 border-gray-200 focus:bg-gray-300 focus:border-blue-800 border-[1px] rounded-md"
                    required
                  />
                </div>
                {/* Last Name */}
                <div className="flex flex-col lg:w-1/2 lg:pl-2">
                  <label
                    htmlFor="last"
                    className="font-light text-md text-gray"
                  >
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="last"
                    placeholder="ex. Wick"
                    className="text-center w-full px-3 py-2 focus:ring-transparent bg-gray-200 border-gray-200 focus:bg-gray-300 focus:border-blue-800 border-[1px] rounded-md"
                    required
                  />
                </div>
              </div>
              {/* Email & Phone Number for lg */}
              <div className="lg:flex">
                {/* Email Desktops Name */}
                <div className="flex flex-col lg:w-1/2 lg:pr-2">
                  <label
                    htmlFor="email"
                    className="font-light text-md text-gray"
                  >
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
                {/* Phone Desktops Name */}
                <div className="flex flex-col lg:w-1/2 lg:pl-2">
                  <label
                    htmlFor="phone"
                    className="font-light text-md text-gray"
                  >
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    placeholder="(123)-456-7890"
                    className="text-center w-full px-3 py-2 focus:ring-transparent bg-gray-200 border-gray-200 focus:bg-gray-300 focus:border-blue-800 border-[1px] rounded-md"
                    required
                  />
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-4 lg:w-full">
                <button
                  type="submit"
                  className="w-full py-3 px-4 font-light text-md text-white bg-[#59c9a5] rounded-md"
                >
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-col justify-center w-[70%] mx-auto text-center pt-4 border-t border-slate-400">
          <div className="">
            <div className="flex justify-between lg:text-lg lg:pr-4 ">
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
      </div>
    </footer>
  );
};

export default Footer;
