import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import { Link } from "react-router-dom";

const ProductItem = ({ id, image, name, price }) => {
  const { currency } = useContext(ShopContext);

  return (
    <Link to={`/product/${id}`} onClick={() => window.scrollTo(0, 0)} className='text-gray-700 cursor-pointer'>
      {/* Image section */}
      <div className="relative overflow-hidden">
        <img
          src={image[0]}
          alt={name}
           className="w-full h-64 object-fit hover:scale-110 transition ease-in-out"
        />

        <span className="absolute top-3 left-3 bg-white/90 text-gray-800 text-[11px] px-2 py-[2px] rounded-full font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          Quick View
        </span>
      </div>

      {/* Product Details */}
      <div className="py-3 space-y-1">
        <h2 className="text-md w-[90%] font-medium text-gray-800 group-hover:text-black transition duration-200 truncate">
          {name}
        </h2>
        <p className="text-sm text-gray-500">
          {price.toLocaleString("en-IN", {
            style: "currency",
            currency: "INR",
            maximumFractionDigits: 0,
          })}
        </p>
      </div>
    </Link>
  );
};

export default ProductItem;
