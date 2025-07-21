// import React from "react";
// import CircularGallery from "../functionalities/CircularGallery";

// const CircularGallerySection = () => {
//   return (
//     <div className="bg-gradient-to-br from-[#1f1f27] to-[#2c2c38] px-4 sm:px-6 md:px-10 lg:px-20 py-20 w-full min-h-screen flex flex-col items-center justify-center text-white">
//       {/* 💫 Hero Content Section */}
//       <div className="text-center max-w-4xl">
//         <p className="text-gray-400 uppercase text-sm tracking-widest font-semibold mb-3">
//           — Timeless Comfort, Unmatched Craft
//         </p>
//         <h2 className="text-3xl sm:text-3xl md:text-5xl mt-8 font-extrabold tracking-tight text-white leading-tight mb-5">
//           Elevate Every Corner of Your Home
//         </h2>
//         <p className="text-gray-300 text-base sm:text-lg leading-relaxed font-light">
//           Discover our handpicked collection of statement furniture — crafted
//           for elegance, comfort, and lasting impressions. Whether it’s a cozy
//           reading nook or a modern living space, our designs blend naturally
//           into your home’s rhythm.
//         </p>
//       </div>

//       {/* 🔄 Animated Gallery */}
//       <div className="w-full max-w-8xl">
//         <CircularGallery
//           bend={0}
//           textColor="#ffffff"
//           borderRadius={0.02}
//           scrollEase={0.4}
//         />
//       </div>
//       {/* 📦 Call to Action */}
//       <div className="mt-8">
//         <p className="text-gray-300 text-base sm:text-lg leading-relaxed font-light">
//           Checkout Our Collections →
//         </p>
//       </div>
//     </div>
//   );
// };

// export default CircularGallerySection;












import React, { Suspense, lazy } from "react";

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
        data-aos-duration="1000"
      >
        <p className="text-gray-400 uppercase text-sm tracking-widest font-semibold mb-3" data-aos="fade-up"
        data-aos-duration="1000">
          — Timeless Comfort, Unmatched Craft
        </p>
        <h2 className="text-3xl sm:text-3xl md:text-5xl mt-8 font-extrabold tracking-tight text-white leading-tight mb-5"  data-aos="fade-up"
        data-aos-duration="1000">
          Elevate Every Corner of Your Home
        </h2>
        <p className="text-gray-300 text-base sm:text-lg leading-relaxed font-light"  data-aos="fade-up"
        data-aos-duration="1000">
          Discover our handpicked collection of statement furniture — crafted
          for elegance, comfort, and lasting impressions. Whether it’s a cozy
          reading nook or a modern living space, our designs blend naturally
          into your home’s rhythm.
        </p>
      </div>

      {/* 🔄 Lazy-loaded Animated Gallery */}
      <div
        className="w-full max-w-8xl mt-12"
        data-aos="zoom-in-up"
        data-aos-duration="1200"
      >
        <Suspense fallback={<div className="text-gray-400">Loading gallery...</div>}>
          <CircularGallery
            bend={0}
            textColor="#ffffff"
            borderRadius={0.02}
            scrollEase={0.15}
          />
        </Suspense>
      </div>

      {/* 📦 Call to Action */}
      <div
        className="mt-8"
        data-aos="fade-up"
      >
        <p className="text-gray-300 text-base sm:text-lg leading-relaxed font-light">
          Checkout Our Collections →
        </p>
      </div>
    </div>
  );
};

export default CircularGallerySection;
