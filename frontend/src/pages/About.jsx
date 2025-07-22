import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import VerifiedIcon from "@mui/icons-material/Verified";
import FlashOnIcon from "@mui/icons-material/FlashOn";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import LockIcon from "@mui/icons-material/Lock";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import AutorenewIcon from "@mui/icons-material/Autorenew";
import Title from "../components/Title";

const features = [
  {
    icon: <VerifiedIcon fontSize="large" className="text-[#3bc9db]" />,
    title: "Quality Assurance",
    desc: "Each piece is handpicked to ensure superior craftsmanship and long-lasting durability.",
  },
  {
    icon: <FlashOnIcon fontSize="large" className="text-[#3bc9db]" />,
    title: "Seamless Experience",
    desc: "Effortless browsing and checkout experience across all your devices.",
  },
  {
    icon: <SupportAgentIcon fontSize="large" className="text-[#3bc9db]" />,
    title: "Customer First",
    desc: "Dedicated support to assist you before, during, and after your purchase.",
  },
  {
    icon: <LockIcon fontSize="large" className="text-[#3bc9db]" />,
    title: "Secure Payments",
    desc: "Industry-standard encryption ensures your payment details stay protected.",
  },
  {
    icon: <LocalShippingIcon fontSize="large" className="text-[#3bc9db]" />,
    title: "Fast & Reliable Delivery",
    desc: "Track your orders in real-time and enjoy speedy doorstep delivery.",
  },
  {
    icon: <AutorenewIcon fontSize="large" className="text-[#3bc9db]" />,
    title: "Easy Returns",
    desc: "Simple, no-questions-asked return policy for peace of mind.",
  },
];

const AboutUs = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <section className="bg-white text-gray-800 font-sans overflow-hidden">
      {/* Hero Section */}
      <div className="relative w-full h-[700px] md:h-[750px]">
        <img
          loading="lazy"
          src="https://cdn.sanity.io/images/gan92b2a/burrow-production/7fa20e71737b0d1ca5b1d892c3b78973b0a6e621-2880x1600.jpg?auto=format&fit=max&q=75&w=1440"
          data-aos="zoom-out"
          alt="Furniture Hero"
          className="absolute inset-0 w-full h-full object-cover brightness-[0.5]"
        />
        <div
          className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent flex flex-col items-center justify-center px-6 text-center"
          data-aos="fade-up"
        >
          <p className="text-sm uppercase tracking-widest text-gray-300 mb-3">
            Smarter by Design
          </p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white max-w-4xl leading-tight">
            Furniture That Just Makes Sense
          </h1>
          <p className="text-base md:text-lg text-gray-200 mt-4 max-w-2xl">
            Tired of choosing between quality and affordability? NestCraft
            redefines home living — where smart design meets unmatched value.
          </p>
        </div>
      </div>

      {/* About Section */}
      <div className="flex flex-col md:flex-row items-center gap-12 px-6 md:px-20 py-24">
        <div
          className="w-full md:w-1/2 space-y-6 text-center md:text-left"
          data-aos="fade-up"
        >
          <div className="text-2xl">
            <Title text1="ABOUT" text2="US" />
          </div>
          <p className="text-gray-600 text-base leading-relaxed mb-4">
            At <strong>NestCraft</strong>, we believe your furniture should
            express your personality. Our goal is to help you shape spaces that
            feel welcoming, stylish, and truly yours.
          </p>

          <p className="text-gray-600 text-base leading-relaxed mb-4">
            From cozy sofas to minimalist tables, our curated collection
            balances timeless craftsmanship with modern design—perfect for
            upgrading any room with comfort and charm.
          </p>

          <p className="text-gray-600 text-base leading-relaxed mb-4">
            We work with skilled artisans and use responsibly sourced materials,
            blending quality with sustainability. Expect fast delivery, secure
            payments, and friendly customer support.
          </p>

          <p className="text-gray-600 text-base leading-relaxed">
            Discover furniture that fits your life and lifts your space. Because
            good design isn’t just seen—it’s felt every time you come home.
          </p>
        </div>
        <div className="w-full md:w-1/2" data-aos="fade-up">
          <img
            loading="lazy"
            src="https://media.istockphoto.com/id/1197547529/photo/young-couple-using-smartphones-share-social-media-news-at-home.jpg?s=612x612&w=0&k=20&c=9nky62HiagWNQl5shfqiQiAZGK2-CbvEYvkHT5kiDXA="
            alt="NestCraft Interior"
            className="rounded shadow w-full object-cover h-[250px] sm:h-[350px] md:h-[440px]"
          />
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="text-center px-6 sm:px-10 py-10" data-aos="fade-up">
        <div className="text-2xl">
          <Title text1="WHY" text2="CHOOSE US" />
        </div>
        <p className="text-gray-600 text-base sm:text-lg mt-2 max-w-2xl mx-auto">
          We don’t just sell furniture — we craft experiences...
        </p>
      </div>

      {/* Features Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-6 md:px-20 pb-20">
        {features.map((feature, idx) => (
          <div
            key={idx}
            data-aos="zoom-in-up"
            className="bg-white rounded-xl p-6 text-center shadow hover:shadow-lg transition duration-300 border border-gray-200"
          >
            <div className="flex justify-center mb-4">
              <div className="bg-[#e3fafc] p-3 rounded-full">
                {feature.icon}
              </div>
            </div>
            <h3 className="font-semibold text-lg text-gray-900">
              {feature.title}
            </h3>
            <p className="text-sm text-gray-600 mt-2">{feature.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AboutUs;
