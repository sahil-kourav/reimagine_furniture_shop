import React from "react";
import VerifiedIcon from "@mui/icons-material/Verified";
import FlashOnIcon from "@mui/icons-material/FlashOn";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import LockIcon from "@mui/icons-material/Lock";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import AutorenewIcon from "@mui/icons-material/Autorenew";
import { assets } from "../assets/assets";

const features = [
  {
    icon: <VerifiedIcon fontSize="large" className="text-[#3bc9db]" />,
    title: "Quality Assurance",
    desc: "Every product is selected to meet high standards of quality and durability.",
  },
  {
    icon: <FlashOnIcon fontSize="large" className="text-[#3bc9db]" />,
    title: "Seamless Experience",
    desc: "Fast, intuitive, and responsive shopping across all platforms.",
  },
  {
    icon: <SupportAgentIcon fontSize="large" className="text-[#3bc9db]" />,
    title: "Customer First",
    desc: "Our support team is here for you every step of the way.",
  },
  {
    icon: <LockIcon fontSize="large" className="text-[#3bc9db]" />,
    title: "Secure Payments",
    desc: "Protected by encryption to ensure your payment information is safe.",
  },
  {
    icon: <LocalShippingIcon fontSize="large" className="text-[#3bc9db]" />,
    title: "Fast & Reliable Delivery",
    desc: "Quick shipping with real-time order tracking for peace of mind.",
  },
  {
    icon: <AutorenewIcon fontSize="large" className="text-[#3bc9db]" />,
    title: "Easy Returns",
    desc: "Hassle-free returns with full support. Satisfaction guaranteed.",
  },
];

const AboutUs = () => {
  return (
    <section className="bg-white text-gray-800 font-sans">

      {/* Hero Section */}
      <div className="relative w-full h-[500px] sm:h-[600px] md:h-[700px] lg:h-[750px]">
        <img
          src="https://cdn.sanity.io/images/gan92b2a/burrow-production/7fa20e71737b0d1ca5b1d892c3b78973b0a6e621-2880x1600.jpg?auto=format&fit=max&q=75&w=1440"
          alt="Furniture Hero"
          className="w-full h-full object-cover brightness-75"
        />
        <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center px-4 sm:px-8 text-center">
          <p className="text-xs sm:text-sm font-semibold tracking-widest uppercase text-gray-300 mb-4">
            Smarter by Design
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight max-w-3xl">
            Furniture That Just Makes Sense
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-gray-200 mt-4 max-w-2xl">
            Frustrated by compromises between quality, affordability, and convenience,
            NestCraft was founded as a new approach to furniture. Because normal was never good enough.
          </p>
        </div>
      </div>

      {/* About Section */}
      <div className="flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-16 py-20 gap-10">
        
        {/* Text Content */}
        <div className="w-full md:w-[50%] space-y-5">
          <h2 className="text-3xl font-bold text-center md:text-left text-gray-800">
            About Us
          </h2>
          <p className="text-gray-600 text-md md:text-base leading-relaxed">
            At NestCraft, we believe your home should tell your story.
            Our mission is to craft more than just furniture — we create
            timeless, functional pieces that elevate everyday living.
            From modern minimalism to classic comfort, our collections
            are designed to blend style, quality, and versatility.
          </p>
          <p className="text-gray-600 text-md md:text-base leading-relaxed">
            With a customer-first mindset, flexible payment options, and
            seamless doorstep delivery, we make the journey from inspiration
            to installation effortless. Whether you’re styling a new space
            or redefining an old one, NestCraft is your trusted partner in
            bringing your dream interiors to life.
          </p>
        </div>

        {/* Video */}
        <div className="w-full md:w-1/2 overflow-hidden rounded shadow-md">
          <video
            src={assets.about_video}
            className="w-full h-[280px] object-cover"
            autoPlay
            loop
            muted
            playsInline
          />
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="text-center py-10 px-4">
        <h2 className="text-3xl font-bold text-gray-800">
          Why Choose Us
        </h2>
        <div className="mt-3 h-[2px] w-24 mx-auto bg-gradient-to-r from-[#3bc9db] via-blue-500 to-[#3bc9db] rounded-full" />
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-6 md:px-24 pb-20">
        {features.map((item, idx) => (
          <div
            key={idx}
            className="p-8 border border-gray-200 bg-white rounded-lg shadow-sm text-center space-y-3 hover:shadow-md transition"
          >
            <div className="flex justify-center">{item.icon}</div>
            <h4 className="font-semibold text-lg text-gray-800">
              {item.title}
            </h4>
            <p className="text-gray-600 text-sm">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AboutUs;
