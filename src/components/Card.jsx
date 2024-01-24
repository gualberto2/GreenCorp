import React from "react";
import { IconContext } from "react-icons";

const Card = ({ onMouseEnter, onMouseLeave, icon, title, description }) => {
  return (
    <div
      className="flex flex-col items-center rounded-xl hover:scale-105 transition-scale duration-200 ease-in"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <IconContext.Provider value={{ size: "2em", className: "text-blue-500" }}>
        <div className="mb-4">{icon}</div>
      </IconContext.Provider>
      <h2 className="text-5xl font-semibold mb-2 text-center">{title}</h2>
      <p className="text-gray-600 text-center">{description}</p>
    </div>
  );
};

export default Card;
