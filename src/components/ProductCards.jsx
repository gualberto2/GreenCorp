import React from "react";
import { IconContext } from "react-icons";

const ProductCards = ({ img, title, description }) => {
  return (
    <div className="flex flex-col items-center bg-zinc p-4 rounded-xl shadow-md">
      <IconContext.Provider value={{ size: "2em", className: "text-blue-500" }}>
        <div className="mb-4">{img}</div>
      </IconContext.Provider>
      <h2 className="text-lg font-semibold mb-2 text-center">{title}</h2>
      <p className="text-gray-600 text-center">{description}</p>
      <button>Learn More</button>
    </div>
  );
};

export default ProductCards;
