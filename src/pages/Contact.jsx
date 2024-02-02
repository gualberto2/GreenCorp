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
          {/* Phone content */}
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
      </div>
    </>
    //
  );
}
