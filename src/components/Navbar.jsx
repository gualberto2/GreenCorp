import React from "react";

export default function Navbar() {
  return (
    <div className="bg-slate-950/70 top-0 left-0 absolute w-full">
      {/* The parent div of the entire component ABOVE */}
      <div className="flex justify-around text-white">
        {/* The PARENT div of the navigation bar is ABOVE*/}
        <h1 className="text-lg">KNJ Green Corp</h1>
        <ul className="flex space-x-20 text-md">
          <li className="hover:cursor-pointer">Home</li>
          <li className="hover:cursor-pointer">About</li>
          <li className="hover:cursor-pointer">Products</li>
          <li className="hover:cursor-pointer">Services</li>
          <li className="hover:cursor-pointer">
            <button className="border-1 border-blue-400 bg-green-500 p-2 rounded-xl">
              Contact
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}
