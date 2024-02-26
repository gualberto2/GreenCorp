// Icons below
import { useNavigate } from "react-router-dom";
import { FaPhoneSquareAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function Contact() {
  // navigation declaration below
  const navigate = useNavigate();

  return (
    //
    <>
      <div className="mobile-container mx-auto w-[100%] lg:hidden md:hidden">
        <div className="m-2 mt-32">
          <div className="flex">
            <p className="mr-2" onClick={() => navigate("/")}>
              Home
            </p>
            <span>/</span>
            <p className="ml-2">Contact</p>
          </div>
        </div>

        <div className="w-[90%] mx-auto mt-12">
          <h2 className="font-bold text-2xl text-center mb-10">Contact Us</h2>
          <p className="text-center">
            If you have any questions or want to place an order, we would be
            more than happy to help!
          </p>
        </div>
        {/* Box for the phone parent container below */}
        <div className="w-[80%] mx-auto bg-[#f1efef] mt-12 flex flex-col rounded-2xl">
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
        <div className="w-[80%] mx-auto bg-[#f1efef] mt-12 flex flex-col rounded-2xl">
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
        <div className=" container mx-auto w-[50%] mt-20">
          {/* <form onSubmit="">
            <div className="flex flex-col">
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

              <div className="text-center mt-4">
                <button
                  type="submit"
                  className="py-3 px-4 font-light text-md text-white bg-[#59c9a5] rounded-md"
                >
                  Submit
                </button>
              </div>
            </div>
          </form> */}
        </div>
      </div>

      {/* Desktop and Tablet Page */}
      <div className="hidden lg:block md:block container mx-auto mt-32 mb-0">
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
            <div className="bg-[#f1efef] col-start-8 col-end-12">
              <div className="grid grid-cols-2 grid-rows-1 place-items-center py-20">
                <div className="mt-2 mb-2 bg-[#f1efef] row-start-1 row-end-1 col-start-1 col-end-3">
                  <h3 className="text-3xl mb-2 font-semibold">Get in touch</h3>
                  <p className="font-light">You can reach us anytime</p>
                </div>
                <div className="bg-[#f1efef] row-start-2 row-end-2 col-start-1 col-end-3 w-[70%]">
                  <form className="bg-[#f1efef]">
                    <div className="rounded-lg mt-2 mb-2 w-full">
                      {/* First name */}
                      <input
                        className="bg-slate-100 border border-slate-400 py-2 px-2 h-10 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-green-500"
                        type="text"
                        id="first"
                        placeholder="ex. John Wick"
                        required
                      />
                    </div>
                    <div className="rounded-lg mt-2 mb-2 w-full">
                      {/* Email */}
                      <input
                        className="bg-slate-100 border border-slate-400 py-2 px-2 h-10 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-green-500"
                        type="text"
                        id="first"
                        placeholder="johnwick@email.com"
                        required
                      />
                    </div>
                    <div className="rounded-xl mt-2 mb-2 w-full ">
                      {/* Textbox */}
                      <textarea
                        className="bg-slate-100 border border-slate-400 h-10 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-green-500"
                        type="text"
                        id="first"
                        placeholder="How can we help?"
                        required
                      />
                    </div>

                    <div>
                      {/* Submit button */}
                      <button
                        type="submit"
                        className="mt-4 mb-2 py-1 px-4 font-light text-md text-white bg-[#59c9a5] rounded-full w-full"
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
