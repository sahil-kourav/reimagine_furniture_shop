// import React from 'react';
// import {
//   AutorenewOutlined,
//   AssignmentReturnOutlined,
//   SupportAgentOutlined,
//    LocalShippingOutlined,
//   VerifiedUserOutlined,
//   WorkspacePremiumOutlined 
// } from "@mui/icons-material";

// const OurPolicy = () => {
// const policies = [
//   {
//     icon: (
//       <AutorenewOutlined style={{ fontSize: "2.3rem", color: "#1f2937" }} />
//     ),
//     title: "Easy Exchange Policy",
//     desc: "Experience hassle-free exchanges on all eligible products.",
//   },
//   {
//     icon: (
//       <AssignmentReturnOutlined style={{ fontSize: "2.3rem", color: "#1f2937" }} />
//     ),
//     title: "7-Day Return Guarantee",
//     desc: "Not satisfied? Return within 7 days — no questions asked.",
//   },
//   {
//     icon: (
//       <SupportAgentOutlined style={{ fontSize: "2.4rem", color: "#1f2937" }} />
//     ),
//     title: "24/7 Support Team",
//     desc: "Our expert team is always here to assist you instantly.",
//   },
//   {
//     icon: (
//       <LocalShippingOutlined style={{ fontSize: "2.3rem", color: "#1f2937" }} />
//     ),
//     title: "Free & Fast Delivery",
//     desc: "Enjoy doorstep delivery with zero shipping charges.",
//   },
//   {
//     icon: (
//       <VerifiedUserOutlined style={{ fontSize: "2.3rem", color: "#1f2937" }} />
//     ),
//     title: "Secure Shopping",
//     desc: "Your payments and personal data are 100% safe with us.",
//   },
//   {
//   icon: (
//     <WorkspacePremiumOutlined style={{ fontSize: "2.3rem", color: "#1f2937" }} />
//   ),
//   title: "Quality Assured Products",
//   desc: "Every item is hand-checked to meet our high-quality standards.",
// }

// ];


//   return (
//     <section className="px-4 sm:px-8 md:px-10 lg:px-14 py-4">
//       <div className="text-center mb-14">
//         <h2 className="text-2xl sm:text-3xl md:text-3xl font-bold text-gray-800 mb-4">
//           Why Shop With NestCraft?
//         </h2>
//         <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto">
//           Because we don't just deliver furniture — we deliver confidence, comfort & care.
//         </p>
//       </div>

//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 max-w-6xl gap-4 mx-auto">
//         {policies.map((item, index) => (
//           <div
//             key={index}
//             className="bg-white/80 backdrop-blur-md border border-gray-200 rounded p-6"
//           >
//             <div className="flex justify-center mb-6">
//               <div className="w-14 h-14 flex items-center justify-center rounded-full bg-gray-100 shadow-inner">
//                 {item.icon}
//               </div>
//             </div>
//             <h3 className="text-lg sm:text-xl text-center font-semibold text-gray-800 mb-2">
//               {item.title}
//             </h3>
//             <p className="text-gray-500 text-center text-sm sm:text-base leading-relaxed">
//               {item.desc}
//             </p>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default OurPolicy;













import React, { useEffect } from 'react';
import {
  AutorenewOutlined,
  AssignmentReturnOutlined,
  SupportAgentOutlined,
  LocalShippingOutlined,
  VerifiedUserOutlined,
  WorkspacePremiumOutlined
} from "@mui/icons-material";
import AOS from "aos";
import "aos/dist/aos.css";

const OurPolicy = () => {
  useEffect(() => {
    AOS.init({ duration: 200, once: true });
  }, []);

  const policies = [
    {
      icon: <AutorenewOutlined style={{ fontSize: "2.3rem", color: "#1f2937" }} />,
      title: "Easy Exchange Policy",
      desc: "Experience hassle-free exchanges on all eligible products.",
    },
    {
      icon: <AssignmentReturnOutlined style={{ fontSize: "2.3rem", color: "#1f2937" }} />,
      title: "7-Day Return Guarantee",
      desc: "Not satisfied? Return within 7 days — no questions asked.",
    },
    {
      icon: <SupportAgentOutlined style={{ fontSize: "2.4rem", color: "#1f2937" }} />,
      title: "24/7 Support Team",
      desc: "Our expert team is always here to assist you instantly.",
    },
    {
      icon: <LocalShippingOutlined style={{ fontSize: "2.3rem", color: "#1f2937" }} />,
      title: "Free & Fast Delivery",
      desc: "Enjoy doorstep delivery with zero shipping charges.",
    },
    {
      icon: <VerifiedUserOutlined style={{ fontSize: "2.3rem", color: "#1f2937" }} />,
      title: "Secure Shopping",
      desc: "Your payments and personal data are 100% safe with us.",
    },
    {
      icon: <WorkspacePremiumOutlined style={{ fontSize: "2.3rem", color: "#1f2937" }} />,
      title: "Quality Assured Products",
      desc: "Every item is hand-checked to meet our high-quality standards.",
    }
  ];

  return (
    <section className="px-4 sm:px-8 md:px-10 lg:px-14 py-4">
      <div className="text-center mb-14" data-aos="fade-up"
        data-aos-duration="300"
        >
        <h2 className="text-2xl sm:text-3xl md:text-3xl font-bold text-gray-800 mb-4">
          Why Shop With NestCraft?
        </h2>
        <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto">
          Because we don't just deliver furniture — we deliver confidence, comfort & care.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 max-w-6xl gap-4 mx-auto" data-aos="zoom-in">
        {policies.map((item, index) => (
          <div
            key={index}
            className="bg-white/80 backdrop-blur-md border border-gray-200 rounded p-6"
            data-aos="zoom-in"
            data-aos-delay={index * 30}
          >
            <div className="flex justify-center mb-6">
              <div className="w-14 h-14 flex items-center justify-center rounded-full bg-gray-100 shadow-inner">
                {item.icon}
              </div>
            </div>
            <h3 className="text-lg sm:text-xl text-center font-semibold text-gray-800 mb-2">
              {item.title}
            </h3>
            <p className="text-gray-500 text-center text-sm sm:text-base leading-relaxed">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurPolicy;
