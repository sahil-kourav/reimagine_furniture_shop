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
