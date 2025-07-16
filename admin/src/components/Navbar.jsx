import React from "react";
import { assets } from "../assets/assets";
import { Link } from 'react-router-dom';

const Navbar = ({ setToken }) => {
  return (
    <div className="flex items-center py-2 px-[4%] justify-between">
      <Link to="/" className="text-2xl font-semibold text-gray-800">
        NestCraft
      </Link>
      <button
        onClick={() => setToken("")}
        className="bg-gray-800 hover:bg-gray-700 text-white px-5 py-2 sm:px-7 sm:py-2 rounded-full text-xs sm:text-sm"
      >
        Logout
      </button>
    </div>
  );
};

export default Navbar;
