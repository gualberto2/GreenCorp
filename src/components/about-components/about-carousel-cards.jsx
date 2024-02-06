import React from "react";
import { CiMail } from "react-icons/ci";

export function Card({ description, title }) {
  return (
    //
    <div className="flex flex-col">
      <div>
        <h3 className="text-2xl">{title}</h3>
      </div>
      <div>
        <p className="text-gray-300 text-">{description}</p>
      </div>
    </div>
    //
  );
}
