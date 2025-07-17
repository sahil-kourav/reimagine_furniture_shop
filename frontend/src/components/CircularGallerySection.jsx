// import React from "react";
// import CircularGallery from "../functionalities/CircularGallery";

// const CircularGallerySection = () => {
//   return (
//     <div
//       className="bg-[#1f1f27] px-2 sm:px-6 md:px-10 lg:px-20 py-10 w-full h-screen overflow-hidden flex items-center justify-center"
//     >
//       <CircularGallery bend={0} textColor="#ffffff" borderRadius={0.05} scrollEase={0.02}>
//       </CircularGallery>
//     </div>
//   );
// };

// export default CircularGallerySection;

import React from "react";
import CircularGallery from "../functionalities/CircularGallery";

const CircularGallerySection = () => {
  return (
    <div className="bg-gradient-to-br from-[#1f1f27] to-[#2c2c38] px-4 sm:px-6 md:px-10 lg:px-20 py-20 w-full min-h-screen flex flex-col items-center justify-center text-white">
      {/* 💫 Hero Content Section */}
      <div className="text-center mb-6 max-w-4xl">
        <p className="text-emerald-400 uppercase text-sm tracking-widest font-semibold mb-3">
          — Timeless Comfort, Unmatched Craft
        </p>
        <h2 className="text-4xl sm:text-5xl md:text-6xl mt-8 font-extrabold tracking-tight text-white leading-tight mb-5">
          Elevate Every Corner of Your Home
        </h2>
        <p className="text-gray-300 text-base sm:text-lg leading-relaxed font-light">
          Discover our handpicked collection of statement furniture — crafted
          for elegance, comfort, and lasting impressions. Whether it’s a cozy
          reading nook or a modern living space, our designs blend naturally
          into your home’s rhythm.
        </p>
      </div>

      {/* 🔄 Animated Gallery */}
      <div className="w-full max-w-7xl">
        <CircularGallery
          bend={0}
          textColor="#ffffff"
          borderRadius={0.05}
          scrollEase={0.02}
        />
      </div>

      {/* 🔘 Optional CTA */}
      <div className="mt-8">
        <p className="text-gray-300 text-base sm:text-lg leading-relaxed font-medium">Shop Our Best Sellers →</p>
      </div>
    </div>
  );
};

export default CircularGallerySection;
