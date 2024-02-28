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
      </div>

      {/* Desktop and Tablet Page */}
    </>
    //
  );
}
