// import React, { useContext, useEffect, useState } from "react";
// import { ShopContext } from "../context/ShopContext";
// import Title from "./Title";
// import ProductItem from "./ProductItem";

// const LatestCollection = () => {
//   const { products } = useContext(ShopContext);
//   const [latestProducts, setLatestProducts] = useState([]);

//   useEffect(() => {
//     setLatestProducts(products.slice(0, 10));
//   }, [products]);

//   return (
//     <div className="my-10">
//       <div className="text-center py-8 text-3xl">
//         <Title text1={"LATEST"} text2={"COLLECTIONS"} />
//         <p className="max-w-3xl mx-auto mt-5 text-sm sm:text-base md:text-lg text-gray-500 leading-relaxed">
//           Explore our newest arrivals, designed to elevate your space with
//           modern style and unmatched comfort.
//         </p>
//       </div>

//       {/* Rendering Products */}
//       <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-6 gap-y-6">
//         {latestProducts.map((item, index) => (
//           <ProductItem
//             key={index}
//             id={item.id}
//             image={item.image}
//             name={item.name}
//             price={item.price}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default LatestCollection;








import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import ProductItem from "./ProductItem";
import Title from "../components/Title";
import AOS from "aos";
import "aos/dist/aos.css";

const LatestCollection = () => {
  const { products } = useContext(ShopContext);
  const [latestProducts, setLatestProducts] = useState([]);

  useEffect(() => {
     AOS.init({ duration: 800, once: true });
    setLatestProducts(products.slice(0, 5));
  }, [products]);

  return (
    <div className="w-full min-h-screen py-20">
      <div className="text-center text-3xl">
        <div className="text-center py-8 text-3xl"
        data-aos="fade-up"
        data-aos-delay="100"
        >
          <Title text1={"LATEST"} text2={"COLLECTIONS"} />
          <p className="max-w-3xl mx-auto mt-5 px-2 md:px-4 lg:px-2 text-lg sm:text-base md:text-lg lg:text-md text-gray-600 leading-relaxed text-center">
            Explore our newest arrivals, designed to elevate your space with
            modern style and unmatched comfort.
          </p>
        </div>
      </div>

      {/* Rendering Products */}
      <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-5 gap-4 gap-y-6 px-4 md:px-8 lg:px-12">
        {latestProducts.map((item, index) => (
          <div data-aos="zoom-in" data-aos-delay={index * 30} key={index}>
          <ProductItem
            key={index}
            id={item.id}
            image={item.image}
            name={item.name}
            price={item.price}
            loading="lazy"
          />
          </div>
        ))}
      </div>
    </div>
  );
};

export default LatestCollection;
