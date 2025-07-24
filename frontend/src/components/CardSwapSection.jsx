import React, { useRef, useEffect, useState } from "react";
import CardSwap, { Card } from "../functionalities/CardSwap";
import AOS from "aos";
import "aos/dist/aos.css";

const CardSwapSection = () => {
  const containerRef = useRef(null);
  const [rotate, setRotate] = useState({ x: 0, y: 0 });

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

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
      <div className="max-w-7xl mx-auto flex flex-col items-center lg:grid lg:grid-cols-2 gap-16 lg:gap-24 relative z-10">
        {/* Left Text */}
        <div
          data-aos="fade-right"
          className="space-y-6 text-center lg:text-left order-1 lg:order-none"
        >
          <p className="uppercase text-xs sm:text-sm tracking-widest text-[#c1bfbf]">
            It’s not just about how it looks
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight font-ubuntu text-white max-w-xl mx-auto lg:mx-0">
            Not Just Furniture
            <br className="hidden md:block" /> — A Moving Experience.
          </h2>
          <p className="text-gray-400 text-base sm:text-lg max-w-xl mx-auto lg:mx-0">
            Our pieces don’t just sit still. They animate, adapt, and elevate
            your space — because style should never be static.
          </p>
          <p className="text-gray-300 text-sm sm:text-base max-w-xl font-extralight tracking-wide">
            <span className="text-gray-400 font-normal">Furniture made to feel — </span>
            <span className="relative inline-flex items-center gap-1 group text-white font-medium transition duration-300">
              <span className="decoration-gray-400 group-hover:decoration-white">
                Browse Our Bestsellers
              </span>
              <svg
                className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 12h14m-7-7l7 7-7 7"
                />
              </svg>
            </span>
          </p>
        </div>

        {/* Right Cards */}
        <div
          ref={containerRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          data-aos="fade-left"
          className="relative min-h-[360px] sm:min-h-[480px] md:min-h-[560px] lg:min-h-[600px] h-auto w-full max-w-xs sm:max-w-sm md:max-w-md flex justify-center items-center order-2 lg:order-none"
        >
          <div
            className="absolute bottom-0 right-0 origin-bottom-right transform overflow-visible"
            style={{
              transform: `perspective(900px) rotateX(${rotate.x}deg) rotateY(${rotate.y}deg)`,
              transition: "transform 0.3s ease",
            }}
          >
            <CardSwap
              cardDistance={50}
              verticalDistance={100}
              delay={3500}
              pauseOnHover
            >
              {["https://res.cloudinary.com/dbz0bpnhw/video/upload/v1753291871/Furniture_Product_1_rsmh8i.mp4",
                "https://res.cloudinary.com/dbz0bpnhw/video/upload/v1753291873/Furniture_Product_2_fwhmtw.mp4",
                "https://res.cloudinary.com/dbz0bpnhw/video/upload/v1753291875/Furniture_Product_4_xs5t9t.mp4"
              ].map((src, index) => (
                <Card key={index}>
                  <div className="bg-gradient-to-br from-[#1a1a1f]/80 to-[#1f1f25]/70 backdrop-blur-xl rounded-xl overflow-hidden border border-white/10 shadow-[0_4px_40px_rgba(0,0,0,0.25)] ring-1 ring-white/5 hover:ring-white/10 transition-transform duration-300 hover:scale-[1.03]">
                    <div className="p-2">
                      <p className="text-sm text-white font-semibold">
                        {index % 3 === 0 ? "🎯 Smooth" : index % 3 === 1 ? "🛡️ Reliable" : "🛋️ Comfortable"}
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
                    />
                  </div>
                </Card>
              ))}
            </CardSwap>
          </div>
        </div>
      </div>

      {/* Glow Effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-purple-500/5 rounded-full blur-[120px] animate-pulse-slow z-0" />
      <div className="absolute -top-10 -left-10 w-56 h-56 sm:w-72 sm:h-72 bg-purple-500/20 rounded-full blur-3xl z-0"></div>
      <div className="absolute bottom-0 right-0 w-56 h-56 sm:w-72 sm:h-72 bg-pink-500/10 rounded-full blur-2xl z-0"></div>
    </section>
  );
};

export default CardSwapSection;
