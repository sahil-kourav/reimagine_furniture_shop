// import React from "react";
// import { assets } from "../assets/assets";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Pagination, Autoplay } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/pagination";
// import { ArrowBigLeftDash, ArrowBigRightDash } from "lucide-react";
// import "../index.css";

// const Hero = () => {
//   return (
//     <div className="relative w-full py-2 overflow-hidden">
//       {/* Swiper Carousel */}
//       <Swiper
//         modules={[Pagination, Autoplay]}
//         pagination={{ clickable: true }}
//         autoplay={{ delay: 3500 }}
//         loop
//         className="w-full"
//       >
//         {[assets.firstscroll, assets.secondscroll].map((img, idx) => (
//           <SwiperSlide key={idx}>
//             <div className="w-full aspect-[16/12] sm:aspect-[21/12] md:aspect-[18/12] max-h-[calc(100vh-5rem)]">
//               <img
//                 src={img}
//                 alt={`Slide ${idx + 1}`}
//                 className="w-full h-full object-cover"
//               />
//             </div>
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </div>
//   );
// };

// export default Hero;




// import React from "react";


// const Hero = () => {
//   return (
//     <section
//       className="relative w-full h-[80vh] md:h-[90vh] bg-cover bg-center flex items-center justify-center"
//       style={{
//         backgroundImage: `url(https://cdn.sanity.io/images/gan92b2a/burrow-production/e3c04963662e8a7e73a918e152814e332197983a-1920x1080.jpg?auto=format&fit=max&q=75&w=1440)`,
//       }}
//     >
//       <div className="absolute inset-0 bg-black bg-opacity-20"></div>
//       <div className="relative z-10 max-w-3xl mx-auto text-center px-4">
//         <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
//           Transform Your Space with Modern Furniture
//         </h1>
//         <p className="text-white text-sm sm:text-base md:text-lg mb-6">
//           At <span className="font-semibold">NestCraft</span>, we craft
//           timeless furniture that blends elegance and comfort. Explore our
//           curated collection designed to elevate every corner of your home.
//         </p>
//       </div>
//     </section>
//   );
// };

// export default Hero;



















import React from "react";

const Hero = () => {
  return (
    <section
      className=" relative w-full h-[100vh] md:h-[95vh] lg:h-[100vh] bg-cover bg-center flex items-center justify-center"
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.3), rgba(0,0,0,0.5)), url(https://cdn.sanity.io/images/gan92b2a/burrow-production/e3c04963662e8a7e73a918e152814e332197983a-1920x1080.jpg?auto=format&fit=max&q=75&w=1440)`,
      }}
    >
      <div className="relative z-10 max-w-4xl mx-auto text-center px-4">
        <h1 className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-4 animate-fadeInUp">
          Discover Modern Furniture Crafted for You
        </h1>
        <p className="text-white text-base sm:text-lg md:text-xl mb-6 animate-fadeInUp delay-150">
          <span className="font-semibold">NestCraft</span> brings you handcrafted, sustainable furniture
          to transform your home into a space you love. Experience the blend of style and comfort.
        </p>
      </div>
    </section>
  );
};

export default Hero;
