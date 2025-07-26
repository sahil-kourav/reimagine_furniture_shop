import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  const handleClick = () => {
    navigate("/collection");
  };

  return (
    <section className="w-full min-h-[100vh] py-12 sm:py-16 md:py-20 bg-white flex items-center justify-center px-4 sm:px-6">
      <div className="max-w-4xl text-center space-y-6 lg:space-y-8">
        {/* Top Tagline */}
        <p
          className="text-sm font-semibold tracking-widest uppercase text-gray-600"
          data-aos="fade-down"
          data-aos-delay="100"
        >
          Smarter by Design
        </p>

        {/* Main Heading */}
        <h2
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 leading-snug"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          We make furniture that works harder
          <br/>
           so you can live easier.
        </h2>

        {/* Subtext */}
        <p
          className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          Beautifully designed. Built to last. Delivered when you need it.
          <br className="hidden sm:block" /> 
          Furniture that fits your style — and your schedule.
        </p>

        {/* CTA Button */}
        <div data-aos="fade-up" data-aos-delay="400">
          <button
            onClick={handleClick}
            className="group mt-4 px-6 py-3 bg-black text-white rounded-md flex items-center justify-center gap-2 
                     font-medium mx-auto hover:bg-gray-800 transition-all duration-300"
          >
            Explore Collection
            <ArrowRight
              className="group-hover:translate-x-1 transition-transform duration-300"
              size={18}
            />
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
