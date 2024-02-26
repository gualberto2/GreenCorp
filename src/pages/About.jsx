import React from "react";
import { Carousel as AboutCarousel } from "../components/about-components/about-carousel";

export default function About() {
  const cards = [
    {
      title: "01",
      description: "Helo",
    },
    {
      title: "02",
      description: "Helo",
    },
    {
      title: "04",
      description: "Helo",
    },
    {
      title: "05",
      description: "Helo",
    },
  ];

  return (
    <>
      <section className="mt-20 max-w-6xl mx-auto">
        <div className="flex flex-row items-center font-extralight text-lg tracking-tight text-gray-400 gap-2 px-4 md:px-8">
          <p className="underline decoration-gray-300 ">home</p>
          <p className="text-sm">{">"}</p>
          <p>Company</p>
        </div>

        <div className="px-4 md:px-10">
          <h2 className="font-bold trackingp-tighter text-4xl py-5 md:py-1">
            Company
          </h2>
          <div>
            <div>
              <img src="../../public/Company-Section.svg" alt="" />
            </div>
            <div className="text-lg font-normal leading-5 gap-2 flex flex-col tracking-tight">
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore
                nihil temporibus quidem ullam vel, aliquid illum enim?
                Repellendus.
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Repellat maiores perspiciatis ea quo aperiam eaque quaerat,
                consequuntur, neque assumenda repudiandae ullam in, excepturi
                nam harum corrupti quia nostrum deserunt voluptates.
              </p>
            </div>
          </div>
        </div>

        <div className="about-bg ">
          <div className="px-8 my-16 py-8">
            <h2 className="text-4xl text-white tracking-tighter font-semibold ">
              We are engaged in our distribution process
            </h2>
            <div class="text-white flex flex-col gap-8 md:hidden pl-10 my-14">
              <div>
                <div class="number relative font-bold  text-3xl before:absolute before:bg-orange-500 before:w-1 before:h-12 before:-left-4 before:top-1/2 before:-translate-y-1/2 after:absolute after:bg-black after:w-1 after:h-full after:-left-4 after:top-1/2 after:-translate-y-1/2 after:-z-10">
                  01
                </div>
                <p className="text-lg">Composite grading</p>
              </div>
              <div>
                <div class="number relative font-bold  text-3xl before:absolute before:bg-orange-500 before:w-1 before:h-12 before:-left-4 before:top-1/2 before:-translate-y-1/2 after:absolute after:bg-black after:w-1 after:h-full after:-left-4 after:top-1/2 after:-translate-y-1/2 after:-z-10">
                  02
                </div>
                <p className="text-lg">Roving fiberglass fabric</p>
              </div>
              <div>
                <div class="number relative font-bold  text-3xl before:absolute before:bg-orange-500 before:w-1 before:h-12 before:-left-4 before:top-1/2 before:-translate-y-1/2 after:absolute after:bg-black after:w-1 after:h-full after:-left-4 after:top-1/2 after:-translate-y-1/2 after:-z-10">
                  03
                </div>
                <p className="text-lg">
                  {" "}
                  Fiberglass profile (by pultrusion formation method)
                </p>
              </div>
              <div>
                <div class="number relative font-bold  text-3xl before:absolute before:bg-orange-500 before:w-1 before:h-12 before:-left-4 before:top-1/2 before:-translate-y-1/2 after:absolute after:bg-black after:w-1 after:h-full after:-left-4 after:top-1/2 after:-translate-y-1/2 after:-z-10">
                  04
                </div>
                <p className="text-lg">Pipelines, flues, ventilation systems</p>
              </div>
            </div>

            <div class="text-white hidden gap-4 md:flex flex-col pl-10">
              <div>
                <div>
                  <AboutCarousel card={cards} />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="bg-white text-gray-800 my-16 mx-auto max-w-2xl">
          <div class="text-center">
            <div class="mb-16">
              <div class="text-6xl font-semibold inline-block mr-4">5</div>
              <div class="text-4xl font-bold tracking-tighter inline-block align-top">
                <div>Reasons</div>
                <div>to work with us</div>
              </div>
            </div>

            <div class="relative border-l-2 md:border-t-2 md:border-l-0 border-gray-300 mx-16 md:mx-auto flex justify-center">
              <div class="flex flex-col md:flex-row justify-between  -mt-2">
                <div class="text-left px-2 flex flex-row md:flex-col items-center ">
                  <div class="h-3 w-3 bg-green-600 rounded-full -ml-[15px] md:ml-0 md:mb-1"></div>
                  <span class="text-left text-md font-medium ml-16">
                    Own production
                  </span>
                </div>

                <div class="text-left px-2 flex flex-row md:flex-col items-center ">
                  <div class="h-3 w-3 bg-green-600 rounded-full -ml-[15px] md:mb-1"></div>
                  <span class="text-left text-md font-medium ml-16">
                    Own production
                  </span>
                </div>

                <div class="text-left px-2 flex flex-row md:flex-col items-center ">
                  <div class="h-3 w-3 bg-green-600 rounded-full -ml-[15px] md:mb-1"></div>
                  <span class="text-left text-md font-medium ml-16">
                    Own production
                  </span>
                </div>

                <div class="text-left px-2 flex flex-row md:flex-col items-center ">
                  <div class="h-3 w-3 bg-green-600 rounded-full -ml-[15px] md:mb-1"></div>
                  <span class="text-left text-md font-medium ml-16">
                    Own production
                  </span>
                </div>

                <div class="text-left px-2 flex flex-row md:flex-col items-center ">
                  <div class="h-3 w-3 bg-green-600 rounded-full -ml-[15px] md:mb-1"></div>
                  <span class="text-left text-md font-medium ml-16">
                    Own production
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-purple-600 text-white py-20 px-4">
          {" "}
          <div>
            <div className="bg-white border-b-8 border-amber-600 py-10 px-6 ">
              <h3 className="text-xl text-gray-900 font-bold tracking-tight mb-2 flex flex-col">
                <span>Free</span>
                <span>Consultation</span>
              </h3>
              <h4 className="text-gray-800 text-lg font-light tracking-wide text-pretty mb-6">
                Our manager will call you and answer all questions
              </h4>
              <div>
                <form action="">
                  <div className="flex flex-col">
                    <input
                      type="email"
                      className="bg-gray-300 rounded-full py-5 mb-3 px-4 shadow-inner "
                      placeholder="Phone / (123)-123-1234"
                    />
                    <button className="bg-purple-800 rounded-full py-5 text-md text-gray-200 uppercase tracking-wider mb-4">
                      Call me back
                    </button>
                    <p className="text-gray-300 px-4">
                      by clicking agree, you agree to the terms of user
                      agreement
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
