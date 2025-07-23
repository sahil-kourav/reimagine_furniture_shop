import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Mail } from "lucide-react";

const Newsletter = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section
      className="w-full bg-gradient-to-br from-white via-gray-50 to-white py-28 px-4 sm:px-6 lg:px-8 text-center"
      data-aos="fade-up"
    >
      <div className="max-w-2xl mx-auto space-y-8">
        <p
          className="text-sm font-medium tracking-widest text-gray-500 uppercase"
          data-aos="fade-right"
          data-aos-delay="100"
        >
          — Our Newsletter
        </p>

        <h2
          className="text-3xl sm:text-3xl md:text-6xl font-serif font-bold text-gray-900 leading-tight"
          data-aos="zoom-in"
          data-aos-delay="100"
        >
          Get the Latest Updates
        </h2>

        <p
          className="text-lg md:text-xl text-gray-700 font-light max-w-md mx-auto"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          Subscribe now and enjoy <span className="font-medium text-gray-700">20% off</span> your first order, plus exclusive access to our newest arrivals.
        </p>

        <form
          className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-3 bg-white border border-gray-400 rounded-lg p-2 sm:p-1 shadow-md max-w-xl mx-auto"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <div className="flex items-center w-full px-3 gap-3">
            <Mail className="text-gray-500 w-5 h-5" />
            <input
              type="email"
              required
              placeholder="Enter your email"
              className="w-full text-md py-3 text-gray-900 px-2 outline-none placeholder-gray-500"

            />
          </div>
          <button
            type="submit"
            className="w-full sm:w-auto px-6 py-3 bg-black text-white text-sm font-semibold rounded-md hover:bg-gray-800 hover:scale-[1.02] transition-all duration-200"
          >
            SUBSCRIBE
          </button>
        </form>
      </div>
    </section>
  );
};

export default Newsletter;
