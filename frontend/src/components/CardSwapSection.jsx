// import React from "react";
// import CardSwap, { Card } from "../functionalities/CardSwap";
// import { assets } from "../assets/assets";

// const CardSwapSection = () => {
//   return (
//     <section className="relative py-24 px-6 md:px-16 bg-[#1f1f27] text-white overflow-hidden">
//       <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-12">
//         {/* Left Text Section */}
//         <div className="space-y-5 animate-fadeInLeft">
//           <h2 className="text-4xl md:text-5xl font-bold leading-tight font-ubuntu">
//             Card stacks have never
//             <br /> looked so good
//           </h2>
//           <p className="text-gray-400 text-lg">Just look at it go!</p>
//         </div>

//         {/* Right Card Stack Animation */}
//         <div className="relative h-[500px] w-full max-w-md mx-auto animate-fadeInRight">
//           <div className="absolute inset-0">
//             <CardSwap
//               cardDistance={50}
//               verticalDistance={60}
//               delay={3000}
//               pauseOnHover={true}
//             >
//               <Card>
//                 <div className="bg-[#141020] rounded-xl overflow-hidden border border-gray-700 shadow-xl">
//                   <video
//                     className="w-full h-auto object-cover"
//                     src={assets.Furniture_Product_1}
//                     autoPlay
//                     loop
//                     muted
//                     playsInline
//                   />
//                   <div className="p-4">
//                     <p className="text-sm text-white font-semibold">
//                       🎯 Smooth
//                     </p>
//                   </div>
//                 </div>
//               </Card>

//               <Card>
//                 <div className="bg-[#141020] rounded-xl overflow-hidden border border-gray-700 shadow-xl">
//                   <video
//                     className="w-full h-auto object-cover"
//                     src={assets.Furniture_Product_2}
//                     autoPlay
//                     loop
//                     muted
//                     playsInline
//                   />
//                   <div className="p-4">
//                     <p className="text-sm text-white font-semibold">
//                       🎯 Smooth
//                     </p>
//                   </div>
//                 </div>
//               </Card>

//               {/* <Card>
//                 <div className="bg-[#141020] rounded-xl overflow-hidden border border-gray-700 shadow-xl">
//                   <video
//                     className="w-full h-auto object-fit"
//                     src={assets.Furniture_Product_3}
//                     autoPlay
//                     loop
//                     muted
//                     playsInline
//                   />
//                   <div className="p-4">
//                     <p className="text-sm text-white font-semibold">
//                       🎯 Smooth
//                     </p>
//                   </div>
//                 </div>
//               </Card> */}

//               <Card>
//                 <div className="bg-[#141020] rounded-xl overflow-hidden border border-gray-700 shadow-xl">
//                   <video
//                     className="w-full h-auto object-cover"
//                     src={assets.Furniture_Product_4}
//                     autoPlay
//                     loop
//                     muted
//                     playsInline
//                   />
//                   <div className="p-4">
//                     <p className="text-sm text-white font-semibold">
//                       🛡️ Reliable
//                     </p>
//                   </div>
//                 </div>
//               </Card>
//             </CardSwap>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default CardSwapSection;














// import React from "react";
// import CardSwap, { Card } from "../functionalities/CardSwap";
// import { assets } from "../assets/assets";
// import { motion } from "framer-motion";

// const CardSwapSection = () => {
//   return (
//     <section className="relative py-20 px-4 sm:px-8 md:px-16 bg-[#0e0e14] text-white overflow-hidden">
//       <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-16 lg:gap-24">
//         {/* Left Content */}
//         <motion.div
//           initial={{ x: -50, opacity: 0 }}
//           whileInView={{ x: 0, opacity: 1 }}
//           transition={{ duration: 0.8, ease: "easeOut" }}
//           viewport={{ once: true }}
//           className="space-y-6 text-center lg:text-left"
//         >
//           <p className="uppercase text-xs sm:text-sm tracking-widest text-[#c1bfbf]">
//             furniture experience
//           </p>
//           <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight font-ubuntu text-white">
//             Card stacks have never
//             <br className="hidden md:block" /> looked this good.
//           </h2>
//           <p className="text-gray-400 text-base sm:text-lg max-w-md mx-auto lg:mx-0">
//             Our products don’t just sit pretty. They move, rotate, and adapt
//             beautifully — just like your taste.
//           </p>
//         </motion.div>

//         <motion.div
//           initial={{ x: 50, opacity: 50 }}
//           whileInView={{ x: 0, opacity: 1 }}
//           transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
//           viewport={{ once: true }}
//           className="relative h-[300px] sm:h-[380px] md:h-[470px] lg:h-[560px] w-full max-w-xs sm:max-w-sm md:max-w-md"
//         >
//           <div className="absolute inset-0">
//             <CardSwap
//               cardDistance={50}
//               verticalDistance={90}
//               delay={3500}
//               pauseOnHover
//             >
//               {[
//                 assets.Furniture_Product_1,
//                 assets.Furniture_Product_2,
//                 assets.Furniture_Product_4,
//               ].map((src, index) => (
//                 <Card key={index}>
//                   <div className="bg-[#141420]/80 backdrop-blur-xl rounded-md overflow-hidden border border-gray-700 shadow-2xl ring-1 ring-[#ffffff18] transition-all duration-300 hover:scale-[1.02]">
//                     <div className="p-2">
//                       <p className="text-sm text-white font-semibold">
//                         {index % 3 === 0
//                           ? "🎯 Smooth"
//                           : index % 3 === 1
//                           ? "🛡️ Reliable"
//                           : "🛋️ Comfortable"}
//                       </p>
//                     </div>
//                     <video
//                       className="w-full h-[290px] object-cover rounded-md"
//                       src={src}
//                       autoPlay
//                       loop
//                       muted
//                       playsInline
//                     />
//                   </div>
//                 </Card>
//               ))}
//             </CardSwap>
//           </div>
//         </motion.div>
//       </div>

//       {/* Glow Effects */}
//       <div className="absolute -top-10 -left-10 w-56 h-56 sm:w-72 sm:h-72 bg-purple-500/20 rounded-full blur-3xl"></div>
//       <div className="absolute bottom-0 right-0 w-56 h-56 sm:w-72 sm:h-72 bg-pink-500/10 rounded-full blur-2xl"></div>
//     </section>
//   );
// };

// export default CardSwapSection;



















import React, { useRef, useEffect, useState } from "react";
import CardSwap, { Card } from "../functionalities/CardSwap";
import { assets } from "../assets/assets";
import { motion, useInView } from "framer-motion";

const CardSwapSection = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: false, margin: "-100px" });
  const [rotate, setRotate] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const { clientX, clientY, currentTarget } = e;
    const { width, height, left, top } = currentTarget.getBoundingClientRect();
    const x = ((clientX - left) / width - 0.5) * 20;
    const y = ((clientY - top) / height - 0.5) * -20;
    setRotate({ x, y });
  };

  const handleMouseLeave = () => setRotate({ x: 0, y: 0 });

  return (
    <section className="relative py-20 px-4 sm:px-8 md:px-16 bg-[#0e0e14] text-white overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col items-center lg:grid lg:grid-cols-2 gap-16 lg:gap-24">
        {/* Left Text */}
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="space-y-6 text-center lg:text-left order-1 lg:order-none"
        >
          <p className="uppercase text-xs sm:text-sm tracking-widest text-[#c1bfbf]">
            It’s not just about how it looks  
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight font-ubuntu text-white max-w-xl mx-auto lg:mx-0">
            Not Just Furniture
            <br className="hidden md:block" /> — A Moving Experience.
          </h2>
          <p className="text-gray-400 text-base sm:text-lg max-w-md mx-auto lg:mx-0">
            Our pieces don’t just sit still. They animate, adapt, and elevate your space — because style should never be static
          </p>
        </motion.div>

        {/* Right Cards */}
        <motion.div
          ref={containerRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
          viewport={{ once: true }}
          className="relative h-[300px] sm:h-[380px] md:h-[470px] lg:h-[560px] w-full max-w-xs sm:max-w-sm md:max-w-md flex justify-center items-center order-2 lg:order-none"
        >
          <div
            className="absolute bottom-0 right-0 origin-bottom-right transform overflow-visible"
            style={{
              transform: `perspective(900px) rotateX(${rotate.x}deg) rotateY(${rotate.y}deg) scale(${isInView ? 1 : 0.85})`,
              transition: "transform 0.3s ease",
            }}
          >
            {isInView && (
              <CardSwap
                cardDistance={50}
                verticalDistance={100}
                delay={3500}
                pauseOnHover
              >
                {[assets.Furniture_Product_1, assets.Furniture_Product_2, assets.Furniture_Product_4].map(
                  (src, index) => (
                    <Card key={index}>
                      <div className="bg-[#141420]/80 backdrop-blur-xl rounded-md overflow-hidden border border-gray-700 shadow-2xl ring-1 ring-[#ffffff18] transition-all duration-300 hover:scale-[1.02]">
                        <div className="p-2">
                          <p className="text-sm text-white font-semibold">
                            {index % 3 === 0
                              ? "🎯 Smooth"
                              : index % 3 === 1
                              ? "🛡️ Reliable"
                              : "🛋️ Comfortable"}
                          </p>
                        </div>
                        <video
                          className="w-full h-[290px] object-cover rounded-md"
                          src={src}
                          autoPlay
                          loop
                          muted
                          playsInline
                        />
                      </div>
                    </Card>
                  )
                )}
              </CardSwap>
            )}
          </div>
        </motion.div>
      </div>

      {/* Glow Effects */}
      <div className="absolute -top-10 -left-10 w-56 h-56 sm:w-72 sm:h-72 bg-purple-500/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-56 h-56 sm:w-72 sm:h-72 bg-pink-500/10 rounded-full blur-2xl"></div>
    </section>
  );
};

export default CardSwapSection;
