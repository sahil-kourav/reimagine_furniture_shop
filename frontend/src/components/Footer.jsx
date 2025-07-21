import React from "react";

const Footer = () => {
  return (
    <div>
      <div className="flex flex-col sm:grid grid-cols-[4fr_1fr_1fr] border-t-2 my-6 mt-0 text-md px-4 sm:px-6 md:px-10 lg:px-14 py-4">
        <div className="py-3">
          <p className="text-lg font-medium mb-3">NestCraft</p>
          <p className="w-full md:w-2/3 text-gray-600 ">
            {" "}
            NestCraft brings you more than furniture — we deliver character to
            your space. Explore a handpicked collection of beautifully crafted
            pieces that blend style, comfort, and functionality. With premium
            materials, modern aesthetics, and seamless online shopping, we make
            it easy to elevate your living experience.
          </p>
        </div>

        <div className="py-3">
          <p className="text-lg font-medium mb-3">About Us</p>
          <ul className="flex flex-col gap-1 text-md text-gray-600">
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
          </ul>
        </div>

        <div className="py-3">
          <p className="text-lg font-medium mb-3">Contect Us</p>
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