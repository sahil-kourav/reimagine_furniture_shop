import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Hero = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  return (
    <section
      className="relative w-full h-[100vh] md:h-[95vh] lg:h-[100vh] bg-cover bg-center flex items-center justify-center"
      data-aos="zoom-out"
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.4), rgba(0,0,0,0.7)), url(https://cdn.sanity.io/images/gan92b2a/burrow-production/e3c04963662e8a7e73a918e152814e332197983a-1920x1080.jpg?auto=format&fit=max&q=75&w=1440)`,
      }}
    >
      <div
        className="relative z-10 max-w-4xl mx-auto text-center px-4"
        data-aos="fade-up"
      >
        <h1
          className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-tight drop-shadow-[0_2px_4px_rgba(0,0,0,0.4)]"
          data-aos="fade-up"
          data-aos-delay="50"
        >
          Discover Modern Furniture<br />Crafted Just for You
        </h1>

        <p
          className="text-gray-100 text-lg sm:text-lg md:text-xl font-light mb-6 leading-snug max-w-2xl mx-auto"
          data-aos="fade-up"
          data-aos-delay="100"
        >
        NestCraft delivers handcrafted, sustainable furniture to elevate your living space. Experience timeless design, built for comfort and style.
        </p>
      </div>
    </section>
  );
};

export default Hero;
