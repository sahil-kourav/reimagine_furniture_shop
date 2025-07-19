// import React from "react";
// import { Mail } from "lucide-react";

// const Newsletter = () => {
//   return (
//     <section className="w-full h-[500px] px-4 sm:px-8 flex items-center justify-center text-center font-sans">
//       <div className="max-w-2xl mx-auto">
//         <p className="text-sm font-medium tracking-wider text-gray-600 pb-2 uppercase">
//           — Our Newsletter
//         </p>

//         <h2 className="text-2xl pt-4 sm:text-3xl font-serif font-light pb-2 leading-snug text-gray-900">
//           Subscribe to Our Newsletter to Get <br />
//           <span className="text-2xl sm:text-2xl font-serif text-gray-800 leading-snug font-light">
//             Updates to Our Latest Collection
//           </span>
//         </h2>

//         <p className="text-gray-600 text-md font-light pb-10 tracking-wide">
//           Get 20% off on your first order just by subscribing to our newsletter.
//         </p>

//         <form className="flex items-center justify-center gap-2 max-w-xl border border-gray-600 mx-auto bg-white shadow-sm">
//           <div className="flex items-center ml-4 gap-4 w-full">
//             <Mail className="text-gray-500 w-6 h-6 sm:w-15 sm:h-10" />
//             <input
//               className="w-full p-2 sm:flex-1 outline-none"
//               type="text"
//               placeholder="Enter your email id"
//               required
//             />
//             <button
//               className="bg-gray-800 hover:bg-gray-700 text-white text-sm px-8 py-4"
//               type="submit"
//             >
//               SUBSCRIBE
//             </button>
//           </div>
//         </form>
//       </div>
//     </section>
//   );
// };

// export default Newsletter;












import React from "react";
import { Mail } from "lucide-react";

const Newsletter = () => {
  return (
    <section className="w-full bg-gradient-to-br from-white via-gray-50 to-white px-4 py-20 sm:py-24 text-center">
      <div className="max-w-2xl mx-auto">
        <p className="text-sm font-medium tracking-widest text-gray-500 uppercase mb-2">
          — Our Newsletter
        </p>

        <h2 className="text-3xl sm:text-4xl font-serif font-semibold text-gray-900 leading-tight mb-4">
          Get the Latest Updates
        </h2>

        <p className="text-lg text-gray-600 font-light mb-10 max-w-md mx-auto">
          Subscribe now and enjoy <span className="font-semibold text-black">20% off</span> your first order, plus exclusive access to our newest arrivals.
        </p>

        <form className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-3 bg-white border border-gray-300 rounded-lg p-2 sm:p-1 shadow-md max-w-xl mx-auto">
          <div className="flex items-center w-full px-3 gap-3">
            <Mail className="text-gray-400 w-5 h-5" />
            <input
              type="email"
              required
              placeholder="Enter your email address"
              className="w-full text-sm py-3 px-2 outline-none placeholder-gray-400"
            />
          </div>
          <button
            type="submit"
            className="w-full sm:w-auto px-6 py-3 bg-black text-white text-sm font-semibold rounded-md hover:bg-gray-800 transition-colors duration-200"
          >
            SUBSCRIBE
          </button>
        </form>
      </div>
    </section>
  );
};

export default Newsletter;
