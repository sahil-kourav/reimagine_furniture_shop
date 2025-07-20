// import React from "react";
// import VerifiedIcon from "@mui/icons-material/Verified";
// import FlashOnIcon from "@mui/icons-material/FlashOn";
// import SupportAgentIcon from "@mui/icons-material/SupportAgent";
// import LockIcon from "@mui/icons-material/Lock";
// import LocalShippingIcon from "@mui/icons-material/LocalShipping";
// import AutorenewIcon from "@mui/icons-material/Autorenew";
// import { assets } from "../assets/assets";
// import Title from "../components/Title";

// const features = [
//   {
//     icon: <VerifiedIcon fontSize="large" className="text-[#3bc9db]" />,
//     title: "Quality Assurance",
//     desc: "Every product is selected to meet high standards of quality and durability.",
//   },
//   {
//     icon: <FlashOnIcon fontSize="large" className="text-[#3bc9db]" />,
//     title: "Seamless Experience",
//     desc: "Fast, intuitive, and responsive shopping across all platforms.",
//   },
//   {
//     icon: <SupportAgentIcon fontSize="large" className="text-[#3bc9db]" />,
//     title: "Customer First",
//     desc: "Our support team is here for you every step of the way.",
//   },
//   {
//     icon: <LockIcon fontSize="large" className="text-[#3bc9db]" />,
//     title: "Secure Payments",
//     desc: "Protected by encryption to ensure your payment information is safe.",
//   },
//   {
//     icon: <LocalShippingIcon fontSize="large" className="text-[#3bc9db]" />,
//     title: "Fast & Reliable Delivery",
//     desc: "Quick shipping with real-time order tracking for peace of mind.",
//   },
//   {
//     icon: <AutorenewIcon fontSize="large" className="text-[#3bc9db]" />,
//     title: "Easy Returns",
//     desc: "Hassle-free returns with full support. Satisfaction guaranteed.",
//   },
// ];

// const AboutUs = () => {
//   return (
//     <section className="bg-white text-gray-800 font-sans">

//       {/* Hero Section */}
//       <div className="relative w-full h-[720px] sm:h-[600px] md:h-[900px] lg:h-[750px]">
//         <img
//           src="https://cdn.sanity.io/images/gan92b2a/burrow-production/7fa20e71737b0d1ca5b1d892c3b78973b0a6e621-2880x1600.jpg?auto=format&fit=max&q=75&w=1440"
//           alt="Furniture Hero"
//           className="w-full h-full object-cover brightness-75"
//         />
//         <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center px-4 sm:px-8 text-center">
//           <p className="text-xs sm:text-sm font-semibold tracking-widest uppercase text-gray-300 mb-4">
//             Smarter by Design
//           </p>
//           <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight max-w-3xl">
//             Furniture That Just Makes Sense
//           </h1>
//           <p className="text-sm sm:text-base md:text-lg text-gray-200 mt-4 max-w-2xl">
//             Frustrated by compromises between quality, affordability, and convenience,
//             NestCraft was founded as a new approach to furniture. Because normal was never good enough.
//           </p>
//         </div>
//       </div>

//       {/* About Section */}
//       <div className="flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-16 py-20 gap-10">

//         {/* Text Content */}
//         <div className="w-full md:w-[50%] space-y-5">
//          <div className='text-2xl text-center pt-8 border-t'>
//         <Title text1={'ABOUT'} text2={'US'} />
//       </div>
//           <p className="text-gray-600 text-md md:text-base leading-relaxed">
//             At NestCraft, we believe your home should tell your story.
//             Our mission is to craft more than just furniture — we create
//             timeless, functional pieces that elevate everyday living.
//             From modern minimalism to classic comfort, our collections
//             are designed to blend style, quality, and versatility.
//           </p>
//           <p className="text-gray-600 text-md md:text-base leading-relaxed">
//             With a customer-first mindset, flexible payment options, and
//             seamless doorstep delivery, we make the journey from inspiration
//             to installation effortless. Whether you’re styling a new space
//             or redefining an old one, NestCraft is your trusted partner in
//             bringing your dream interiors to life.
//           </p>
//         </div>

//         {/* Video */}
//         <div className="w-full md:w-1/2 overflow-hidden rounded shadow-md">
//           <video
//             src={assets.about_video}
//             className="w-full h-[280px] object-cover"
//             autoPlay
//             loop
//             muted
//             playsInline
//           />
//         </div>
//       </div>

//       {/* Why Choose Us */}
//       <div className="text-center py-6 px-4">
//         <div className='text-center text-base sm:text-2xl mb-4'>
//              <Title text1={"WHY"} text2={"CHOOSE US"} />
//           </div>
//       </div>

//       {/* Features Grid */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-6 md:px-24 pb-20">
//         {features.map((item, idx) => (
//           <div
//             key={idx}
//             className="p-8 border border-gray-200 bg-white rounded-lg shadow-sm text-center space-y-3 hover:shadow-md transition"
//           >
//             <div className="flex justify-center">{item.icon}</div>
//             <h4 className="font-semibold text-lg text-gray-800">
//               {item.title}
//             </h4>
//             <p className="text-gray-600 text-sm">
//               {item.desc}
//             </p>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default AboutUs;

// import React from "react";
// import VerifiedIcon from "@mui/icons-material/Verified";
// import FlashOnIcon from "@mui/icons-material/FlashOn";
// import SupportAgentIcon from "@mui/icons-material/SupportAgent";
// import LockIcon from "@mui/icons-material/Lock";
// import LocalShippingIcon from "@mui/icons-material/LocalShipping";
// import AutorenewIcon from "@mui/icons-material/Autorenew";
// import { assets } from "../assets/assets";
// import Title from "../components/Title";

// const features = [
//   {
//     icon: <VerifiedIcon fontSize="large" className="text-[#3bc9db]" />,
//     title: "Quality Assurance",
//     desc: "Each piece is handpicked to ensure superior craftsmanship and long-lasting durability.",
//   },
//   {
//     icon: <FlashOnIcon fontSize="large" className="text-[#3bc9db]" />,
//     title: "Seamless Experience",
//     desc: "Effortless browsing and checkout experience across all your devices.",
//   },
//   {
//     icon: <SupportAgentIcon fontSize="large" className="text-[#3bc9db]" />,
//     title: "Customer First",
//     desc: "Dedicated support to assist you before, during, and after your purchase.",
//   },
//   {
//     icon: <LockIcon fontSize="large" className="text-[#3bc9db]" />,
//     title: "Secure Payments",
//     desc: "Industry-standard encryption ensures your payment details stay protected.",
//   },
//   {
//     icon: <LocalShippingIcon fontSize="large" className="text-[#3bc9db]" />,
//     title: "Fast & Reliable Delivery",
//     desc: "Track your orders in real-time and enjoy speedy doorstep delivery.",
//   },
//   {
//     icon: <AutorenewIcon fontSize="large" className="text-[#3bc9db]" />,
//     title: "Easy Returns",
//     desc: "Simple, no-questions-asked return policy for peace of mind.",
//   },
// ];

// const AboutUs = () => {
//   return (
//     <section className="bg-white text-gray-800 font-sans overflow-hidden">

//       {/* Hero Section */}
//       <div className="relative w-full h-[700px] sm:h-[700px] md:h-[1100px] lg:h-[750px]">
//         <img
//           src="https://cdn.sanity.io/images/gan92b2a/burrow-production/7fa20e71737b0d1ca5b1d892c3b78973b0a6e621-2880x1600.jpg?auto=format&fit=max&q=75&w=1440"
//           alt="Furniture Hero"
//           className="absolute inset-0 w-full h-full object-cover brightness-[0.6]"
//         />
//         <div className="absolute inset-0 bg-black/30 flex flex-col items-center justify-center px-4 sm:px-8 text-center">
//           <p className="text-sm uppercase tracking-widest text-gray-300 mb-3">
//             Smarter by Design
//           </p>
//           <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white max-w-3xl leading-tight">
//             Furniture That Just Makes Sense
//           </h1>
//           <p className="text-base md:text-lg text-gray-200 mt-4 max-w-2xl">
//             Tired of choosing between quality and affordability? NestCraft redefines home living — where smart design meets unmatched value.
//           </p>
//         </div>
//       </div>

//       {/* About Content */}
//       <div className="flex flex-col-reverse md:flex-row items-center justify-center gap-10 px-6 md:px-20 py-20">

//         {/* Text */}
//         <div className="w-full md:w-1/2 space-y-5">
//           <div className="text-2xl text-center md:text-center">
//             <Title text1="ABOUT" text2="US" />
//           </div>
//           <p className="text-gray-600 text-base leading-relaxed text-center">
//             At <strong>NestCraft</strong>, we believe that your furniture should be a reflection of your lifestyle and personality. Our pieces are thoughtfully curated to combine elegance, comfort, and purpose.
//           </p>
//           <p className="text-gray-600 text-base leading-relaxed text-center">
//             Whether you’re styling a new space or updating an old one, we offer flexible payments, seamless delivery, and unwavering support to turn your house into a home. Discover your next statement piece — with confidence.
//           </p>
//         </div>

//       </div>

//       {/* Why Choose Us */}
//       <div className="text-center px-4 sm:px-8 pb-10">
//         <div className="text-2xl">
//         <Title text1="WHY" text2="CHOOSE US" />
//         </div>
//         <p className="text-gray-500 text-base sm:text-lg mt-2 max-w-2xl mx-auto">
//           We don't just sell furniture — we craft experiences, foster comfort, and deliver satisfaction from cart to couch.
//         </p>
//       </div>

//       {/* Feature Cards */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-6 md:px-20 pb-20">
//         {features.map((feature, idx) => (
//           <div
//             key={idx}
//             className="bg-white rounded-xl p-6 text-center shadow hover:shadow-md transition duration-300 border border-gray-100"
//           >
//             <div className="flex justify-center mb-3">{feature.icon}</div>
//             <h3 className="font-semibold text-lg text-gray-800">{feature.title}</h3>
//             <p className="text-sm text-gray-600 mt-2">{feature.desc}</p>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default AboutUs;

import React from "react";
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
  return (
    <section className="bg-white text-gray-800 font-sans overflow-hidden">
      {/* Hero Section */}
      <div className="relative w-full h-[700px] sm:h-[700px] md:h-[1000px] lg:h-[750px]">
        <img
          src="https://cdn.sanity.io/images/gan92b2a/burrow-production/7fa20e71737b0d1ca5b1d892c3b78973b0a6e621-2880x1600.jpg?auto=format&fit=max&q=75&w=1440"
          alt="Furniture Hero"
          className="absolute inset-0 w-full h-full object-cover brightness-[0.5]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent flex flex-col items-center justify-center px-6 sm:px-10 text-center">
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
      <div className="flex flex-col md:flex-row items-center justify-center gap-12 px-6 md:px-20 py-24">
        <div className="w-full md:w-1/2 space-y-6 text-center md:text-left">
          <div className="text-2xl">
            <Title text1="ABOUT" text2="US" />
          </div>
          <p className="text-gray-600 text-base leading-relaxed">
            At <strong>NestCraft</strong>, we believe your furniture should
            reflect your personality and lifestyle. Our pieces are thoughtfully
            curated to combine elegance, comfort, and functionality.
          </p>
          <p className="text-gray-600 text-base leading-relaxed">
            Whether you’re styling a new space or updating an old one, we offer
            flexible payments, seamless delivery, and unwavering support to turn
            your house into a home.
          </p>
        </div>
        <div className="w-full md:w-1/2">
          <img
            src="https://media.istockphoto.com/id/1197547529/photo/young-couple-using-smartphones-share-social-media-news-at-home.jpg?s=612x612&w=0&k=20&c=9nky62HiagWNQl5shfqiQiAZGK2-CbvEYvkHT5kiDXA="
            alt="NestCraft Interior"
              className="rounded shadow w-full object-cover h-[250px] sm:h-[350px] md:h-[450px] lg:h-auto"/>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="text-center px-6 sm:px-10 py-10">
        <div className="text-2xl">
          <Title text1="WHY" text2="CHOOSE US" />
        </div>
        <p className="text-gray-600 text-base sm:text-lg mt-2 max-w-2xl mx-auto">
          We don’t just sell furniture — we craft experiences, foster comfort,
          and deliver satisfaction from cart to couch.
        </p>
      </div>

      {/* Features Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-6 md:px-20 pb-20">
        {features.map((feature, idx) => (
          <div
            key={idx}
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
