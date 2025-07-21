// import React from "react";

// const Footer = () => {
//   return (
//     <div>
//       <div className="flex flex-col sm:grid grid-cols-[4fr_1fr_1fr] border-t-2 my-6 mt-0 text-md px-4 sm:px-6 md:px-10 lg:px-14 py-8">
//         <div>
//           <p className="text-lg font-medium mb-3">NestCraft</p>
//           <p className="w-full md:w-2/3 text-gray-600 ">
//             {" "}
//             NestCraft brings you more than furniture — we deliver character to
//             your space. Explore a handpicked collection of beautifully crafted
//             pieces that blend style, comfort, and functionality. With premium
//             materials, modern aesthetics, and seamless online shopping, we make
//             it easy to elevate your living experience.
//           </p>
//         </div>

//         <div>
//           <p className="text-lg font-medium mb-3">About Us</p>
//           <ul className="flex flex-col gap-1 text-md text-gray-600">
//             <li>Home</li>
//             <li>About us</li>
//             <li>Delivery</li>
//             <li>Privacy policy</li>
//           </ul>
//         </div>

//         <div>
//           <p className="text-lg font-medium mb-3">Contect Us</p>
//           <ul className="flex flex-col gap-1 text-gray-600">
//             <li>+91-000-001-1000</li>
//             <li>Contact@nestcraft.com</li>
//           </ul>
//         </div>
//       </div>

//       <div>
//         <hr />
//         <div className="w-full text-center py-6 text-sm text-gray-500 border-t bg-white">
//           © 2025{" "}
//           <span className="font-semibold text-gray-700">NestCraft.com</span> —
//           All Rights Reserved.
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Footer;











// import React from "react";

// const Footer = () => {
//   return (
//     <div>
//       <div
//         className="flex flex-col sm:grid grid-cols-[4fr_1fr_1fr] border-t-2 my-6 mt-0 text-md px-4 sm:px-6 md:px-10 lg:px-14 py-8"
//         data-aos="fade-up" data-aos-delay="200"
//       >
//         {/* Brand Description */}
//         <div data-aos="fade-right" data-aos-delay="200">
//           <p className="text-lg font-medium mb-3">NestCraft</p>
//           <p className="w-full md:w-2/3 text-gray-600">
//             NestCraft brings you more than furniture — we deliver character to
//             your space. Explore a handpicked collection of beautifully crafted
//             pieces that blend style, comfort, and functionality. With premium
//             materials, modern aesthetics, and seamless online shopping, we make
//             it easy to elevate your living experience.
//           </p>
//         </div>

//         {/* About Us Links */}
//         <div data-aos="fade-up" data-aos-delay="200">
//           <p className="text-lg font-medium mb-3">About Us</p>
//           <ul className="flex flex-col gap-1 text-md text-gray-600">
//             <li>Home</li>
//             <li>About us</li>
//             <li>Delivery</li>
//             <li>Privacy policy</li>
//           </ul>
//         </div>

//         {/* Contact Info */}
//         <div data-aos="fade-left" data-aos-delay="300">
//           <p className="text-lg font-medium mb-3">Contact Us</p>
//           <ul className="flex flex-col gap-1 text-gray-600">
//             <li>+91-000-001-1000</li>
//             <li>Contact@nestcraft.com</li>
//           </ul>
//         </div>
//       </div>

//       {/* Bottom Copyright */}
//       <div data-aos="fade-up" data-aos-delay="400">
//         <hr />
//         <div className="w-full text-center py-6 text-sm text-gray-500 border-t bg-white">
//           © 2025{" "}
//           <span className="font-semibold text-gray-700">NestCraft.com</span> — All Rights Reserved.
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Footer;














import React from "react";

const Footer = () => {
  return (
    <div>
      {/* Main Footer Section */}
      <div
        className="flex flex-col sm:grid grid-cols-[4fr_1fr_1fr] border-t-2 my-6 mt-0 text-md px-4 sm:px-6 md:px-10 lg:px-14 py-8"
        data-aos="fade-up" data-aos-delay="2100"
      >
        {/* Brand Description */}
        <div data-aos="fade-right" data-aos-delay="100">
          <p className="text-lg font-medium mb-3">NestCraft</p>
          <p className="w-full md:w-2/3 text-gray-600">
            NestCraft brings you more than furniture — we deliver character to
            your space. Explore a handpicked collection of beautifully crafted
            pieces that blend style, comfort, and functionality. With premium
            materials, modern aesthetics, and seamless online shopping, we make
            it easy to elevate your living experience.
          </p>
        </div>

        {/* About Links */}
        <div data-aos="fade-up" data-aos-delay="200">
          <p className="text-lg font-medium mb-3">About Us</p>
          <ul className="flex flex-col gap-1 text-md text-gray-600">
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
          </ul>
        </div>

        {/* Contact Info */}
        <div data-aos="fade-left" data-aos-delay="300">
          <p className="text-lg font-medium mb-3">Contact Us</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>+91-000-001-1000</li>
            <li>Contact@nestcraft.com</li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div data-aos="fade-up" data-aos-delay="400">
        <hr />
        <div className="w-full text-center py-6 text-sm text-gray-500 border-t bg-white">
          © 2025{" "}
          <span className="font-semibold text-gray-700">NestCraft.com</span> — All Rights Reserved.
        </div>
      </div>
    </div>
  );
};

export default Footer;
