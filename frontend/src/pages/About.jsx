import React from "react";
import { assets } from "../assets/assets";

// Material UI Icons
import VerifiedIcon from "@mui/icons-material/Verified";
import FlashOnIcon from "@mui/icons-material/FlashOn";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import LockIcon from "@mui/icons-material/Lock";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import AutorenewIcon from "@mui/icons-material/Autorenew";

const features = [
  {
    icon: <VerifiedIcon fontSize="large" className="text-[#3bc9db]" />,
    title: "Quality Assurance",
    desc: "Every product is selected to meet high standards of quality and durability.",
  },
  {
    icon: <FlashOnIcon fontSize="large" className="text-[#3bc9db]" />,
    title: "Seamless Experience",
    desc: "Fast, responsive, and user-friendly shopping experience on all devices.",
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

const About = () => {
  return (
    <div className="px-4 sm:px-8 md:px-16 lg:px-24 py-14 bg-[#f9f9f9] text-gray-700">
      {/* Heading */}
       <div className="text-center mb-16">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">About NestCraft</h1>
        <p className="text-gray-500 text-lg max-w-xl mx-auto">
          Blending innovation, trust, and a seamless experience — all in one place.
        </p>
        <div className="mx-auto mt-2 h-[2px] w-24 bg-gradient-to-r from-[#3bc9db] via-sky-500 to-[#3bc9db] rounded-full" />
      </div>

      {/* Video and About Text */}
      <div className="flex flex-col lg:flex-row items-center gap-12 mb-24">
        <div className="w-full lg:w-1/2 animate-fadeInUp">
          <div className="overflow-hidden">
            <video
              className="w-full h-auto object-fit"
              src={assets.about_video}
              autoPlay
              loop
              muted
              playsInline
            />
          </div>
        </div>

        <div className="w-full lg:w-1/2 animate-fadeInUp space-y-6">
          <p className="text-gray-600 leading-relaxed text-[16px]">
            <strong className="text-gray-800">NestCraft</strong> was founded to simplify shopping. With a strong focus on reliability, comfort, and trust, we provide an elegant and smooth online experience.
          </p>
          <p className="text-gray-600 leading-relaxed text-[16px]">
            From style to essentials, we handpick every product to meet your expectations, delivering quality with every order.
          </p>
          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Our Mission</h3>
            <p className="text-gray-600 leading-relaxed">
              We aim to empower shoppers with <strong>choice, confidence, and convenience</strong> by building a trusted digital space.
            </p>
          </div>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="text-center pt-2 pb-6">
        <h2 className="text-4xl sm:text-3xl font-semibold font-ubuntu text-gray-800">
          Why Choose Us
        </h2>
        <div className="mx-auto mt-2 h-[2px] w-32 bg-gradient-to-r from-[#3bc9db] via-blue-500 to-[#3bc9db] rounded-full" />
      </div>

      {/* Feature Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10 animate-fadeInUp">
        {features.map((item, index) => (
          <div
            key={index}
            className="bg-white p-8 border border-gray-200 shadow-md transition-transform duration-300"
          >
            <div className="mb-4">{item.icon}</div>
            <h4 className="font-semibold text-gray-800 mb-1">{item.title}</h4>
            <p className="text-gray-600 text-sm">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
