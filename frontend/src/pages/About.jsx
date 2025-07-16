import React from "react";
import Title from "../components/Title";
import { assets } from "../assets/assets";

const About = () => {
  return (
    <div className="px-4 sm:px-6 md:px-10 lg:px-20 py-10 text-gray-700 max-w-screen-xl mx-auto">
      {/* About Title */}
      <div className="text-center text-2xl mb-10">
        <Title text1="ABOUT" text2="US" />
      </div>

      <div className="flex flex-col-reverse md:flex-row items-center justify-center gap-10 mb-16 px-4 sm:px-8">
        {/* Image Section */}
        <div className="w-full md:w-1/2">
          <img
            src={assets.about_img}
            alt="NestCraft Furniture Store"
            className="w-full h-auto max-h-[500px] object-cover rounded-xl shadow-md"
          />
        </div>

        {/* Text Section */}
        <div className="flex flex-col gap-5 md:w-1/2 text-base leading-relaxed text-gray-700">
          <p>
            At <span className="font-semibold text-gray-800">NestCraft</span>,
            we believe that furniture is more than just décor — it's the soul of
            a home. Born from a deep appreciation for timeless design and
            reliable craftsmanship, NestCraft is your destination for creating
            stylish and comfortable living spaces.
          </p>
          <p>
            Whether you’re furnishing a cozy corner or designing your dream
            home, our curated collection offers something for every taste — from
            modern minimalism to classic elegance. We bring you quality pieces
            crafted with care and built to last.
          </p>
          <div>
            <h3 className="font-semibold text-xl text-gray-900 mb-2">
              Our Mission
            </h3>
            <p>
              Our mission at NestCraft is to make great furniture accessible and
              enjoyable for everyone. We’re committed to delivering premium
              quality, elegant design, and an effortless shopping experience
              that helps turn your house into a home.
            </p>
          </div>
        </div>
      </div>

      {/* Why Choose Us Title */}
      <div className="text-center text-xl mb-10">
        <Title text1="WHY" text2="CHOOSE US" />
      </div>

      {/* Feature Cards */}
      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
        {[
          {
            title: "Premium Craftsmanship",
            desc: "Each NestCraft piece is built with high-quality materials and attention to detail, ensuring durability and timeless appeal.",
          },
          {
            title: "Seamless Shopping",
            desc: "Enjoy a smooth and intuitive online experience, from exploring designs to doorstep delivery.",
          },
          {
            title: "Customer-First Approach",
            desc: "Our dedicated support team is here to assist you every step of the way, ensuring your satisfaction is always our top priority.",
          },
        ].map((item, index) => (
          <div
            key={index}
            className="border px-6 py-8 shadow-sm hover:shadow-lg transition-all duration-300 rounded-lg bg-white text-center"
          >
            <h4 className="font-semibold text-lg mb-3 text-gray-900">
              {item.title}
            </h4>
            <p className="text-gray-600 text-sm sm:text-base">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
