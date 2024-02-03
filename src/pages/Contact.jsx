import React from "react";
// Icons below
import { FaArrowLeft } from "react-icons/fa";
import { FaPhoneSquareAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
//
import { Link } from "react-router-dom";

// Import phone icon

export default function Contact() {
  return (
    //
    <>
      <div className="mobile-container mx-auto w-[100%] lg:hidden md:hidden">
        <div className="m-2">
          <div className="mb-2 w-6 p-1 bg-blue-200 rounded-xl">
            <Link to="/">
              <FaArrowLeft className="w-4" />
            </Link>
          </div>
        </div>

        <div className="w-[90%] mx-auto mt-4">
          <h2 className="font-bold text-xl">Contact Us</h2>
          <p>
            If you have any questions or want to place an order, we would be
            more than happy to help!
          </p>
        </div>
        {/* Box for the phone parent container below */}
        <div className="w-[80%] mx-auto bg-blue-200 mt-6 flex flex-col rounded-2xl">
          {/* Phone content */}
          <div className="w-[95%] mx-auto">
            <div className="mt-4">
              <FaPhoneSquareAlt className="w-10 h-10" />
            </div>
            <div className="mt-4 mb-2">
              <p className="text-xl mb-2">Phone</p>
              <p className="text-md mb-2">
                Call, text or WhatsApp us on the numbers below.
              </p>
              <p>(619)866-7776</p>
            </div>
          </div>
        </div>
        {/* Box for email */}
        <div className="w-[80%] mx-auto bg-blue-200 mt-6 flex flex-col rounded-2xl">
          {/* Email content */}
          <div className="w-[95%] mx-auto">
            <div className="mt-4">
              <MdEmail className="w-10 h-10" />
            </div>
            <div className="mt-4 mb-2">
              <p className="text-xl mb-2">Email</p>
              <p className="text-md mb-2">
                You can expect a reply in 2 hours during business days Monday -
                Friday.
              </p>
              <p>support@knjgreenpack.com</p>
            </div>
          </div>
        </div>
        {/* Form Box Below */}
        <div className="mt-6 mb-8">
          <form onSubmit="">
            <div className="flex flex-col w-[50%] ml-[10%]">
              <div>
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

              <div className="">
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

              <div className="text-left mt-4">
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
      </div>

      {/* Desktop and Tablet Page */}
      <div className="hidden lg:block md:block">
        <div className="flex items-center w-full">
          <div className="grid grid-cols-12 mt-10">
            {/* Add grid cols below */}
            <div className="col-start-3 col-end-7">
              <h2 className="text-6xl mb-4 font-semibold">Contact Us</h2>
              <p className="font-light mb-2">
                Email, call, or complete the form to learn more about our
                products
              </p>
              <p className="font-light mb-2">info@knjgreenpack.com</p>
              <p className="font-light mb-2">(800) 212-2221</p>
            </div>
            {/* Add grid cols below */}
            <div className="bg-slate-200 rounded-xl col-start-8 col-end-12">
              <div className="grid grid-cols-2 grid-rows-1 place-items-center">
                <div className="bg-slate-200 rounded-xl row-start-1 row-end-1 col-start-1 col-end-3">
                  <h3 className="text-3xl mb-2 font-semibold">Get in touch</h3>
                  <p className="font-light">You can reach us anytime</p>
                </div>
                <div className="bg-slate-200 rounded-xl row-start-2 row-end-2 col-start-1 col-end-3 w-full">
                  <form className="bg-slate-200 rounded-xl">
                    <div className="mt-2 mb-2 w-full">
                      {/* First nanme */}
                      <input
                        className="bg-slate-200 border-2 border-slate-400 rounded-lg h-10 w-full"
                        type="text"
                        id="first"
                        placeholder="ex. John Wick"
                        required
                      />
                    </div>
                    <div className="bg-slate-200 mt-2">
                      {/* Email nanme */}
                      <input
                        className="bg-slate-200 border-2 border-slate-400 rounded-lg h-10 w-full"
                        type="email"
                        id="email"
                        placeholder="johnwick@email.com"
                        required
                      />
                    </div>
                    <div className="mt-2">
                      {/* Text box */}
                      <textarea
                        className="bg-slate-200 border-2 border-slate-400 rounded-lg px-2 h-auto w-full"
                        type="text"
                        id="inputBox"
                        placeholder="How can we help?"
                      />
                    </div>
                    <div>
                      {/* Submit button */}
                      <button
                        type="submit"
                        className="mt-4 mb-2 py-1 px-4 font-light text-md text-white bg-[#59c9a5] rounded-md"
                      >
                        Submit
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
    //
  );
}
