import React from "react";
import { assets } from "../assets/assets";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { ArrowBigLeftDash, ArrowBigRightDash } from "lucide-react";
import "../index.css";

const Hero = () => {
  return (
    <div className="relative w-full py-2 overflow-hidden">
      {/* Swiper Carousel */}
      <Swiper
        modules={[Pagination, Autoplay]}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3500 }}
        loop
        className="w-full"
      >
        {[assets.firstscroll, assets.secondscroll].map((img, idx) => (
          <SwiperSlide key={idx}>
            <div className="w-full aspect-[16/12] sm:aspect-[21/12] md:aspect-[18/12] max-h-[calc(100vh-5rem)]">
              <img
                src={img}
                alt={`Slide ${idx + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Hero;
