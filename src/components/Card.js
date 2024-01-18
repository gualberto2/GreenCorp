import React from "react";
import { IconContext } from "react-icons";
import { FaExampleIcon } from "react-icons/fa"; // Replace 'FaExampleIcon' with the desired icon from react-icons

const Card = ({ title, description }) => {
  return (
    <div className="bg-white p-4 rounded-xl shadow-md">
      <IconContext.Provider value={{ size: "2em", className: "text-blue-500" }}>
        <div className="mb-4">
          <FaExampleIcon />
        </div>
      </IconContext.Provider>
      <h2 className="text-lg font-semibold mb-2">{title}</h2>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default Card;
