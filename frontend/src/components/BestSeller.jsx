import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import ProductItem from "./ProductItem";
import Title from "../components/Title";
import AOS from "aos";
import "aos/dist/aos.css";

const BestSeller = () => {
  const { products } = useContext(ShopContext);
  const [bestSeller, setBestSeller] = useState([]);

  useEffect(() => {
    const bestProduct = products.filter((item) => item.bestseller);
    setBestSeller(bestProduct.slice(0, 8));
  }, [products]);

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <div className="w-full min-h-screen py-20">
      <div className="text-center text-3xl">
        <div
          className="text-center px-4 sm:px-6 md:px-8 lg:px-24 py-6"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <Title text1={"BEST"} text2={"SELLERS"} />
          <p className="max-w-3xl mx-auto mt-5 px-2 md:px-4 lg:px-2 text-lg sm:text-base md:text-lg lg:text-md text-gray-600 leading-relaxed text-center">
            Discover our most loved and top-selling products, handpicked by our
            happy customers. Quality meets style.
          </p>
        </div>
      </div>

      <div
        className="mt-12 px-4 md:px-10 lg:px-20 grid gap-x-6 gap-y-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4"
        data-aos="fade-up"
      >
        {bestSeller.map((item, index) => (
          <div
            key={index}
            data-aos="fade-up"
            data-aos-delay={index * 40}
            className="transition-transform duration-300 hover:-translate-y-2"
          >
            <ProductItem
              key={index}
              id={item.id}
              name={item.name}
              image={item.image}
              price={item.price}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default BestSeller;

// import React, { useContext, useEffect, useState } from "react";
// import { ShopContext } from "../context/ShopContext";
// import Title from "./Title";
// import ProductItem from "./ProductItem";

// const BestSeller = () => {
//   const { products } = useContext(ShopContext);
//   const [bestSeller, setBestSeller] = useState([]);

//   useEffect(() => {
//     const bestProduct = products.filter((item) => item.bestseller);
//     setBestSeller(bestProduct.slice(0, 15));
//   }, [products]);

//   return (
//     <section className="my-8">
//        <div className="text-center text-3xl">
//          <div className="text-center px-4 sm:px-6 md:px-8 lg:px-16">
//            <Title text1="BEST" text2="SELLERS" />
//            <p className="max-w-3xl mx-auto mt-5 text-sm sm:text-base md:text-lg text-gray-500 leading-relaxed">
//              Discover our most loved and top-selling products, handpicked by our
//              happy customers. Quality meets style.
//            </p>
//          </div>
//        </div>

//       {/* Horizontal Scrollable Container */}
//       <div className="overflow-x-auto mt-8 pb-2">
//         <div className="flex gap-6">
//           {bestSeller.map((item) => (
//             <div key={item.id} className="flex-shrink-0 w-[23%]">
//               <ProductItem
//                 id={item.id}
//                 name={item.name}
//                 image={item.image}
//                 price={item.price}
//               />
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default BestSeller;
