import React, { useRef, useState, useEffect } from "react";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import PauseIcon from "@mui/icons-material/Pause";

const PromoteProducts = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const toggleVideo = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.pause();
    }
  }, []);

  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* 🔻 Lazy-loaded background video */}
      <video
        ref={videoRef}
        className="absolute w-full h-full object-cover"
        src={"https://res.cloudinary.com/dbz0bpnhw/video/upload/v1753293225/brand_promotion_jnrra1.mp4"}
        muted
        loop
        playsInline
        loading="lazy"
        data-aos="zoom-out" 
        data-aos-duration="1200"
      />

      <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-transparent z-0" />
      <div
        className="relative z-10 flex items-start justify-start w-full h-full px-6 md:px-16 pt-20 bg-black/30"
        data-aos="fade-up" data-aos-delay="200"
      >
        <div className="text-white text-left mt-24 w-[90%] sm:w-[70%] md:w-[60%] lg:w-[52%] xl:w-[34%]">
          <p className="text-xs md:text-sm tracking-widest uppercase text-gray-200">
            COMFY SIT. BETTER SLEEP.
          </p>
          <h1 className="mt-4 text-3xl md:text-4xl font-bold leading-snug">
            Designed for those who want it all
          </h1>
          <p className="mt-5 text-sm md:text-base text-gray-200">
            At <span className="font-semibold">NestCraft</span>, we turned a
            real queen-sized mattress into a stylish sleeper sofa of your
            dreams.
          </p>

          <button
            onClick={toggleVideo}
            className="bg-white/20 mt-5 text-white border border-white px-5 py-2 rounded hover:bg-white/30 transition flex items-center gap-2"
          >
            {isPlaying ? <PauseIcon /> : <PlayArrowIcon />}
            <span className="hidden sm:inline">
              {isPlaying ? "Pause" : "Play"}
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default PromoteProducts;
