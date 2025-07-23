import React, { lazy } from "react";

const CircularGallery = lazy(() =>
  import("../functionalities/CircularGallery")
);

const CircularGallerySection = () => {
  return (
    <div className="bg-gradient-to-br from-[#1f1f27] to-[#2c2c38] px-4 sm:px-6 md:px-10 lg:px-20 py-20 w-full min-h-screen flex flex-col items-center justify-center text-white">
      {/* 💫 Hero Content Section */}
      <div
        className="text-center max-w-4xl"
        data-aos="fade-up"
        data-aos-duration="800"
        data-aos-delay="100"
      >
        <p className="text-gray-400 uppercase text-sm tracking-widest font-semibold mb-3">
          — Timeless Comfort, Unmatched Craft
        </p>
        <h2 className="text-3xl sm:text-3xl md:text-5xl mt-8 font-extrabold tracking-tight leading-tight mb-5 text-white">
          Elevate Every Corner of Your Home
        </h2>
        <p className="text-gray-300 text-base sm:text-lg leading-relaxed font-light">
          Discover our handpicked collection of statement furniture — crafted
          for elegance, comfort, and lasting impressions. Whether it’s a cozy
          reading nook or a modern living space, our designs blend naturally
          into your home’s rhythm.
        </p>
      </div>

      {/* 🔄 Lazy-loaded Animated Gallery */}
      <div
        className="w-full max-w-8xl mt-6"
        data-aos="fade-up"
        data-aos-delay="300"
        data-aos-duration="1000"
      >
        <CircularGallery
          bend={0}
          textColor="#a08f8fff"
          borderRadius={0.02}
          scrollEase={0.15}
        />
      </div>
    </div> 
  );
};

export default CircularGallerySection;
