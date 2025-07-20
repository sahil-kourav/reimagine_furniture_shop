import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import ProductItem from "./ProductItem";
import Title from "../components/Title";

const BestSeller = () => {
  const { products } = useContext(ShopContext);
  const [bestSeller, setBestSeller] = useState([]);

  useEffect(() => {
    const bestProduct = products.filter((item) => item.bestseller);
    setBestSeller(bestProduct.slice(0, 5));
  }, [products]);

  return (
    <div className="w-full min-h-screen py-20">
      <div className="text-center text-3xl">
        <div className="text-center px-4 sm:px-6 md:px-8 lg:px-16 py-6">
          {/* <h1 className="text-3xl sm:text-4xl md:text-4xl font-serif font-semibold text-gray-800 tracking-tight leading-tight">
            Best Sellers
          </h1> */}

          <Title text1={"BEST"} text2={"SELLERS"} />

          <p className="max-w-3xl mx-auto mt-5 px-2 md:px-4 lg:px-2 text-lg sm:text-base md:text-lg lg:text-md text-gray-600 leading-relaxed text-center">
            Discover our most loved and top-selling products, handpicked by our
            happy customers. Quality meets style.
          </p>
        </div>
      </div>

      <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-5 gap-4 gap-y-6 px-4 md:px-8 lg:px-12">
        {bestSeller.map((item, index) => (
          <ProductItem
            key={index}
            id={item.id}
            name={item.name}
            image={item.image}
            price={item.price}
          />
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
