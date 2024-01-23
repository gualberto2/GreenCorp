import React from "react";
// import KNJLogo from "../path-to-your-logo/logo.svg"; // Update with your logo path

const Footer = () => {
  return (
    <div className="bg-gray-800 text-white">
      <div className="container mx-auto py-10 px-4">
        <div className="flex md:flex-row justify-between">
          {/* Footer Menu */}
          <div className="mb-6 md:mb-0">
            <ul className="flex justify-evenly">
              <li className="mx-2">
                <a href="/about-us" className="hover:text-gray-300">
                  About Us
                </a>
              </li>
              <li className="mx-2">
                <a href="/services" className="hover:text-gray-300">
                  Services
                </a>
              </li>
              <li className="mx-2">
                <a href="/contact" className="hover:text-gray-300">
                  Contact
                </a>
              </li>
              <li className="mx-2">
                <a href="/privacy-policy" className="hover:text-gray-300">
                  Privacy Policy
                </a>
              </li>
              {/* Add additional links as needed */}
            </ul>
          </div>

          {/* Contact Information */}
          <div className="footer-contacts text-center md:text-right mt-6 md:mt-0">
            <div className="footer-title mb-2 font-bold">Contact Us</div>
            <div>
              <a href="tel:+1234567890" className="block hover:text-gray-300">
                +1 234 567 890
              </a>
              <a href="mailto:contact@knj.com" className="hover:text-gray-300">
                contact@knj.com
              </a>
            </div>
            <div className="mt-4">
              <address className="not-italic">
                123 KNJ Street, City, Country
                <br />
                Mon-Fri 09:00 - 18:00
              </address>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
