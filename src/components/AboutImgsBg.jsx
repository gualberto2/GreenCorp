import React from "react";

const AboutImgsBg = ({ img }) => {
  return (
    <div className="pb-40">
      {img && <img src={img} className="w-full h-64 object-cover" />}
    </div>
  );
};

export default AboutImgsBg;
