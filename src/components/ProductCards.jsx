// Product cards component, got to go add to the array in the home this just changes the layout and UI

import React from "react";

const ProductCards = ({ img, title, description }) => {
  return (
    <div className="flex flex-col items-center bg-zinc p-4 rounded-xl shadow-md">
      <div className="mb-4 w-40">
        {img && (
          <img src={img} alt={title} className="object-cover rounded-t-xl" />
        )}
      </div>
      <h2 className="text-lg font-semibold mb-2 text-center">{title}</h2>
      <p className="text-gray-600 text-center">{description}</p>
      <button>Learn More</button>
    </div>
  );
};

export default ProductCards;
