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
          className="relative min-h-[360px] sm:min-h-[480px] md:min-h-[560px] lg:min-h-[600px] h-auto w-full max-w-xs sm:max-w-sm md:max-w-md flex justify-center items-center order-2 lg:order-none"
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
                      <div className="bg-[#141420]/80 backdrop-blur-xl rounded-md overflow-hidden border border-gray-600 shadow-2xl ring-1 ring-[#ffffff18] transition-all duration-300 hover:scale-[1.02]">
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
                          className="w-full h-[280px] object-cover rounded"
                          src={src}
                          autoPlay
                          loop
                          muted
                          playsInline
                          loading="lazy"
                          data-aos="zoom-out"
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
