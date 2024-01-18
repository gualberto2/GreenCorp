import React from "react";

export default function Navbar() {
  return (
    <div className="bg-slate-950/70 p-8 top-0 left-0 absolute w-full">
      {/* The parent div of the entire component ABOVE */}
      <div className="flex justify-around text-white">
        {/* The PARENT div of the navigation bar is ABOVE*/}
        <h1>KNJ Green Corp</h1>
        <ul className="flex space-x-20">
          <li>Home</li>
          <li>About</li>
          <li>Products</li>
          <li>Services</li>
          <li>
            <div>Contact</div>
          </li>
        </ul>
      </div>
    </div>
  );
}
