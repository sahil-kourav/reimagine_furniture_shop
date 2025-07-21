// import React from "react";
// import { useNavigate } from "react-router-dom";

// const HeroSection = () => {
//   const navigate = useNavigate();

//   const handleClick = () => {
//     navigate("/collection");
//   };

//   return (
//     <section className="w-full h-[600px] bg-white flex items-center justify-center px-4">
//       <div className="max-w-4xl text-center">
//         <p className="text-sm font-semibold tracking-widest uppercase text-gray-600 mb-4">
//           Smarter by Design
//         </p>

//         {/* Main heading */}
//         <h2 className="text-3xl sm:text-3xl md:text-4xl font-ubuntu font-semibold text-gray-800 leading-snug">
//           We make furniture that works harder so you can live easier.
//         </h2>

//         {/* Subtext */}
//         <p className="text-gray-700 mt-4 text-sm sm:text-base max-w-2xl mx-auto">
//           Clever features. Lasting quality. Delivery in days <br />
//           —not months. Welcome to the new standard.
//         </p>

//         {/* Button */}
//         <button
//           onClick={handleClick}
//           className="mt-8 px-6 py-3 bg-[#1F2937] hover:bg-[#374151] text-white text-md font-medium rounded-md transition-colors"
//         >
//           Explore Collection
//         </button>
//       </div>
//     </section>
//   );
// };

// export default HeroSection;
















// import React, { useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import AOS from "aos";
// import "aos/dist/aos.css";

// const HeroSection = () => {
//   const navigate = useNavigate();

//   useEffect(() => {
//     AOS.init({ duration: 1000, once: true });
//   }, []);

//   const handleClick = () => {
//     navigate("/collection");
//   };

//   return (
//     <section
//       className="w-full h-[600px] bg-white flex items-center justify-center px-4"
//       data-aos="fade-up"
//     >
//       <div className="max-w-4xl text-center">
//         <p className="text-sm font-semibold tracking-widest uppercase text-gray-600 mb-4">
//           Smarter by Design
//         </p>

//         <h2 className="text-3xl sm:text-3xl md:text-4xl font-ubuntu font-semibold text-gray-800 leading-snug">
//           We make furniture that works harder so you can live easier.
//         </h2>

//         <p className="text-gray-700 mt-4 text-sm sm:text-base max-w-2xl mx-auto">
//           Clever features. Lasting quality. Delivery in days <br />
//           —not months. Welcome to the new standard.
//         </p>

//         <button
//           onClick={handleClick}
//           className="mt-8 px-6 py-3 bg-[#1F2937] hover:bg-[#374151] text-white text-md font-medium rounded-md transition-colors"
//         >
//           Explore Collection
//         </button>
//       </div>
//     </section>
//   );
// };

// export default HeroSection;














import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

const HeroSection = () => {
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const handleClick = () => {
    navigate("/collection");
  };

  return (
    <section className="w-full h-[700px] bg-white flex items-center justify-center px-4">
      <div className="max-w-4xl text-center space-y-4">
        <p
          className="text-sm font-semibold tracking-widest uppercase text-gray-600"
          data-aos="fade-down"
          data-aos-delay="200"
        >
          Smarter by Design
        </p>

        <h2
          className="text-3xl sm:text-3xl md:text-4xl font-ubuntu font-semibold text-gray-800 leading-snug"
          data-aos="zoom-in"
        >
          We make furniture that works harder so you can live easier.
        </h2>

        <p
          className="text-gray-700 text-sm sm:text-base max-w-2xl mx-auto"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          Clever features. Lasting quality. Delivery in days
          <br />
          —not months. Welcome to the new standard.
        </p>

        <button
          onClick={handleClick}
          className="px-6 py-3 bg-[#1F2937] hover:bg-[#374151] text-white text-md font-medium rounded-md transition-colors"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          Explore Collection
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
