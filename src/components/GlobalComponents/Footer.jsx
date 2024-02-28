import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaArrowRightFromBracket } from "react-icons/fa6";

const Footer = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
  });
  const { email } = formData;

  function onChange(e) {
    if (!e.target.files) {
      setFormData((prevState) => ({
        ...prevState,
        [e.target.id]: e.target.value,
      }));
    }
  }

  return (
    <footer className="bg-gray-700">
      <div>
        <div>
          <div className="md:grid md:grid-cols-11 flex flex-col text-white">
            <div className="border-b md:border-r py-10 px-4 md:col-start-1 md:col-end-7">
              <h1
                className={`font-display text-2xl  md:text-4xl cursor-pointer text-nowrap transition-opacity duration-500 mb-8 md:mb-0
                `}
                onClick={() => navigate("/")}
              >
                KnJ GREEN PACK CORP.
              </h1>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Consectetur aperiam nobis, soluta ea rerum enim possimus placeat
                eos eius repudiandae molestiae!
              </p>
            </div>
            <div className="flex flex-wrap md:flex-row gap-x-8 md:gap-0 md:col-start-1 md:col-end-7 md:row-start-2 md:border-r border-b px-7 py-10 ">
              <div className="flex flex-col">
                <h3 className="font-bold text-lg ">Resources</h3>
                <div className="font-light flex flex-col gap-1">
                  <p className="cursor-pointer hover:text-gray-400 transition duration-150 ease-in ">
                    Why KNJ Green pack?
                  </p>
                  <p className="cursor-pointer hover:text-gray-400 transition duration-150 ease-in ">
                    Buyer Stories
                  </p>
                  <p className="cursor-pointer hover:text-gray-400 transition duration-150 ease-in ">
                    Blog
                  </p>
                  <p className="cursor-pointer hover:text-gray-400 transition duration-150 ease-in ">
                    Guides
                  </p>
                </div>
              </div>
              <div className="flex flex-col">
                <h3 className="font-bold text-lg">Company</h3>
                <div className="font-light flex flex-col gap-1">
                  <p className="cursor-pointer hover:text-gray-400 transition duration-150 ease-in ">
                    About Us
                  </p>
                  <p className="cursor-pointer hover:text-gray-400 transition duration-150 ease-in ">
                    Careers
                  </p>
                  <p className="cursor-pointer hover:text-gray-400 transition duration-150 ease-in ">
                    Leadership
                  </p>
                  <p className="cursor-pointer hover:text-gray-400 transition duration-150 ease-in ">
                    Partners
                  </p>
                  <p className="cursor-pointer hover:text-gray-400 transition duration-150 ease-in ">
                    Press
                  </p>
                  <p className="cursor-pointer hover:text-gray-400 transition duration-150 ease-in ">
                    Contact Us
                  </p>
                </div>
              </div>
              <div className="flex flex-col">
                <h3 className="font-bold text-lg">Social</h3>
                <div className="font-light flex flex-col gap-1">
                  <p className="cursor-pointer hover:text-gray-400 transition duration-150 ease-in ">
                    LinkedIn
                  </p>
                  <p className="cursor-pointer hover:text-gray-400 transition duration-150 ease-in ">
                    Instagram
                  </p>
                  <p className="cursor-pointer hover:text-gray-400 transition duration-150 ease-in ">
                    Facebook
                  </p>
                  <p className="cursor-pointer hover:text-gray-400 transition duration-150 ease-in ">
                    Twitter
                  </p>
                  <p className="cursor-pointer hover:text-gray-400 transition duration-150 ease-in ">
                    Threads
                  </p>
                  <p className="cursor-pointer hover:text-gray-400 transition duration-150 ease-in ">
                    Recyclagram
                  </p>
                </div>
              </div>
            </div>{" "}
            <div className="md:col-start-7 md:col-end-12 md:row-start-1 md:row-span-2 border-b flex items-center justify-center w-full">
              <div className="w-full flex flex-col items-center justify-center">
                <h4 className="uppercase text-md font-bold">quote</h4>
                <div>
                  <h3>Request a quote today</h3>
                </div>

                <div>
                  <div className="flex flex-row items-center  w-full max-w-xl ">
                    <input
                      placeholder="Enter email here..."
                      className="w-full px-2 py-4 rounded-full text-black"
                      type="email"
                      value={email}
                      onChange={onChange}
                      id="email"
                    />
                    <button className="bg-green-500 cursor-pointer hover:bg-green-700 p-5 rounded-full text-lg absolute right-0 flex items-center align-center transition duration-150 ease-in">
                      <FaArrowRightFromBracket className="" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="md:row-start-3 md:col-start-1 col-end-12 mt-28 mb-4">
              <div>
                <div className="flex flex-col md:flex-row md:gap-4 px-2">
                  <h3 className="font-display text-lg tracking-wide">
                    &copy; Copyright, KNJ Green Pack Corporation Inc.
                  </h3>
                  <div className="flex-wrap flex text-lg md:text-md gap-x-4 tracking-tight text-md">
                    <p>Support</p>
                    <p>Privacy policy</p>
                    <p>Terms Of Use</p>
                    <p>Cookie Policy</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <section className="bg-purple-500 flex flex-row gap-1 text-bottom">
        <p className="text-2xl">Powered by</p>
        <p className="text-2xl font-black"> OCOMNI</p>
      </section> */}
    </footer>
  );
};

export default Footer;
