import React from "react";
import ProductCarousel from "../components/ProductsComponents/ProductCarousel";
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Products() {
  const products = [
    {
      img: "https://res.cloudinary.com/dscoioscc/image/upload/v1706735437/LDPEGradeA_2_orkrk2.png",
      title: "LDPE Grade A++",
    },
    {
      img: "https://res.cloudinary.com/dscoioscc/image/upload/v1706735881/LDPEGradeA_u3cafs.png",
      title: "LDPE GRADE A",
    },
    {
      img: "https://res.cloudinary.com/dscoioscc/image/upload/v1706735881/LDPEGradeA_qxyez7.png",
      title: "LDPE GRADE B",
    },
  ];

  return (
    //
    <div>
      <div className="mt-6 ml-4 lg:hidden md:hidden">
        <Link to="/">
          <FaArrowLeft className="w-10 h-10" />
        </Link>
      </div>
      <div className="w-[60%] mx-auto mt-4">
        <ProductCarousel products={products} />
      </div>
    </div>
    //
  );
}
