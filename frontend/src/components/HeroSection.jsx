import React from "react";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/collection");
  };

  return (
    <section className="w-full mt-20 bg-white text-center">
      <div className="max-w-4xl mx-auto px-4">
        {/* Small top label */}
        <p className="text-sm font-semibold tracking-widest uppercase text-gray-600 mb-4">
          Smarter by Design
        </p>

        {/* Main heading */}
        <h2 className="text-3xl sm:text-3xl md:text-4xl font-ubuntu font-semibold text-gray-800 leading-snug">
          We make furniture that works harder so you can live easier.
        </h2>

        {/* Subtext */}
        <p className="text-gray-700 mt-4 text-sm sm:text-base max-w-2xl mx-auto">
          Clever features. Lasting quality. Delivery in days <br />
          —not months. Welcome to the new standard.
        </p>

        {/* Button */}
         <button
          onClick={handleClick}
          className="mt-8 rounded-md inline-block px-6 py-3 bg-[#e6daca] hover:bg-[#d9cab8] text-gray-700 text-md font-medium rounded transition-colors"
        >
          Explore Collection
        </button>   
      </div>
    </section>
  );
};

export default HeroSection;
