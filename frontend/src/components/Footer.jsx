import React from "react";
import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from "lucide-react";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <footer className="border-t-2 mt-10 text-gray-700">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 py-6 mt-4 text-center flex flex-col items-center">
        {/* Logo & Tagline */}
        <Link to="/">
          <img src={assets.logo} alt="NestCraft Logo" className="w-36 mb-4" />
        </Link>
        <p className="max-w-xl text-sm text-gray-600 mb-6">
          At <span className="font-semibold text-gray-800">NestCraft</span>, we design furniture that transforms homes. With timeless aesthetics and durable materials, our mission is to bring beauty, functionality, and warmth to every corner of your space.
        </p>

        {/* Grid Content */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 w-full text-left mt-8 text-sm text-gray-600">
          {/* Explore */}
          <div>
            <p className="text-base font-semibold text-gray-800 mb-4 text-center">Explore</p>
            <ul className="flex flex-col gap-2 items-center">
              <li><Link to="/" className="hover:text-black transition">Home</Link></li>
              <li><Link to="/about" className="hover:text-black transition">About Us</Link></li>
              <li><Link to="/collection" className="hover:text-black transition">Our Collection</Link></li>
              <li><Link to="/privacy" className="hover:text-black transition">Privacy Policy</Link></li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <p className="text-base font-semibold text-gray-800 mb-4 text-center">Customer Service</p>
            <ul className="flex flex-col gap-2 items-center">
              <li><Link to="/orders" className="hover:text-black transition">Track My Order</Link></li>
              <li><Link to="/contact" className="hover:text-black transition">Help Center</Link></li>
              <li><Link to="/delivery" className="hover:text-black transition">Shipping & Delivery</Link></li>
              <li><Link to="/returns" className="hover:text-black transition">Returns & Refunds</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="text-center">
            <p className="text-base font-semibold text-gray-800 mb-4">Contact Us</p>
            <ul className="space-y-2">
              <li className="flex justify-center items-center gap-2">
                <Phone size={16} /> +91-000-001-1000
              </li>
              <li className="flex justify-center items-center gap-2">
                <Mail size={16} /> contact@nestcraft.com
              </li>
              <li className="flex justify-center items-center gap-2">
                <MapPin size={16} /> Mumbai, India – 400001
              </li>
            </ul>
          </div>
        </div>

        {/* Social Icons */}
        <div className="flex gap-6 mt-10">
          <a href="#" className="text-gray-500 hover:text-black transition">
            <Instagram size={20} />
          </a>
          <a href="#" className="text-gray-500 hover:text-black transition">
            <Facebook size={20} />
          </a>
          <a href="#" className="text-gray-500 hover:text-black transition">
            <Twitter size={20} />
          </a>
        </div>

        {/* Bottom Line */}
        <div className="text-center text-sm text-gray-500 mt-10 border-t w-full pt-6">
          © 2025 <span className="font-semibold text-gray-700">NestCraft</span> — All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
