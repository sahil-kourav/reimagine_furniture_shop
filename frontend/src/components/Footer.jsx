import React from "react";

const Footer = () => {
  return (
    <div>
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-10 border-t-2 my-6 mt-0 text-sm px-4 sm:px-6 md:px-10 lg:px-14 py-8">
        <div>
          <p className="text-lg font-medium mb-3">NestCraft</p>
          <p className="w-full md:w-2/3 text-gray-600 ">
            {" "}
            NestCraft brings you beautifully crafted furniture designed to make
            your home stylish, cozy, and unique. Discover premium quality,
            modern designs, and effortless online shopping — all in one place.
          </p>
        </div>

        <div>
          <p className="text-lg font-medium mb-3">COMPANY</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
          </ul>
        </div>

        <div>
          <p className="text-lg font-medium mb-3">GET IN TOUCH</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>+91-000-001-1000</li>
            <li>Contact@nestcraft.com</li>
          </ul>
        </div>
      </div>

      <div>
        <hr />
        <div className="w-full text-center py-6 text-sm text-gray-500 border-t bg-white">
          © 2025{" "}
          <span className="font-semibold text-gray-700">NestCraft.com</span> —
          All Rights Reserved.
        </div>
      </div>
    </div>
  );
};

export default Footer;
