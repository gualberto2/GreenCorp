import React, { useEffect, useState } from "react";
// import KNJLogo from "../path-to-your-logo/logo.svg"; // Update with your logo path

const Footer = () => {
  return (
    <footer>
      <div>
        <div>
          <div>
            <div>
              <form onSubmit="">
                <div className="w-[70%] mx-auto">
                  {/* This div above houses all the div with sib labels, inputs, buttons for the form */}
                  <div className="">
                    {/* This div is parent of fname lname parent divs */}
                    <div className="flex flex-col">
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
                        value=""
                        onChange=""
                        className="text-center w-full px-3 py-2 focus:ring-transparent bg-gray-200 border-gray-200 focus:bg-gray-300 focus:border-blue-800 border-[1px] rounded-md "
                        required
                      />
                    </div>
                    <div>
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
                        value=""
                        onChange=""
                        className="text-center w-full px-3 py-2 focus:ring-transparent bg-gray-200 border-gray-200 focus:bg-gray-300 focus:border-blue-800 border-[1px] rounded-md "
                        required
                      />
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <label
                      htmlFor="email"
                      className="font-light text-md text-gray"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      value=""
                      placeholder="johnwick@email.com"
                      onChange=""
                      className="text-center transition duration-150 ease-in-out  py-3 rounded-md bg-gray-200 border-gray-200 border-[1px] focus:bg-gray-300  focus:border-blue-800 focus:ring-transparent w-full"
                      required
                    />
                  </div>
                  <div className="flex flex-col">
                    <label
                      htmlFor="phone"
                      className="font-light text-md text-gray"
                    >
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      value=""
                      onChange=""
                      placeholder="(123)-456-7890"
                      className="text-center transition duration-150 ease-in-out  py-3 rounded-md bg-gray-200 border-gray-200 border-[1px] focus:bg-gray-300  focus:border-blue-800 focus:ring-transparent w-full"
                      required
                    />
                  </div>
                  <div className="pt-4">
                    <button
                      type="submit"
                      className="w-full py-3 px-4 font-light text-md text-white bg-[#566E3D] rounded-md"
                    >
                      Submit
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="flex flex-col w-[70%] mx-auto text-center pt-4">
            <div className="pt-4 border-t border-slate-400"></div>
            <div className="flex justify-between text-lg">
              <div className="lg:hover:cursor-pointer lg:hover:underline lg:decoration-green-500">
                <p>Home</p>
              </div>
              <div className="lg:hover:cursor-pointer lg:hover:underline lg:decoration-green-500">
                <p>About</p>
              </div>
              <div className="lg:hover:cursor-pointer lg:hover:underline lg:decoration-green-500">
                <p>Contact</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
