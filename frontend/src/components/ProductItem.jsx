import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import { Link } from "react-router-dom";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const ProductItem = ({ id, image, name, price }) => {
  const { currency } = useContext(ShopContext);

  return (
    <Link
      to={`/product/${id}`}
      onClick={() => window.scrollTo(0, 0)}
      className="group block bg-white transition-all duration-300 overflow-hidden"
    >
      {/* Image */}
      <div className="relative overflow-hidden rounded-t-md">
        <LazyLoadImage 
          src={image[0]}
          alt={name}
          className="w-full h-[250px] object-fit group-hover:scale-105 transition-transform duration-500 ease-in-out"
        />
        <span className="absolute top-3 left-3 bg-white/90 text-gray-800 text-[11px] px-3 py-[2px] rounded-full font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          Quick View
        </span>
      </div>

      {/* Content */}
      <div className="px-1 py-2 space-y-1">
        <h3 className="text-[15px] font-medium text-gray-800 group-hover:text-black truncate">
          {name}
        </h3>
        <p className="text-sm text-gray-600 font-semibold">
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
