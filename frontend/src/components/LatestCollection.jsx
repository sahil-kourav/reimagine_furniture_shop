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
import Title from "./Title";
import ProductItem from "./ProductItem";

const LatestCollection = () => {
  const { products } = useContext(ShopContext);
  const [latestProducts, setLatestProducts] = useState([]);

  useEffect(() => {
    setLatestProducts(products.slice(0, 15));
  }, [products]);

  return (
    <div className="my-10">
      <div className="text-center py-8 text-3xl">
        <Title text1={"LATEST"} text2={"COLLECTIONS"} />
        <p className="max-w-3xl mx-auto mt-5 text-sm sm:text-base md:text-lg text-gray-500 leading-relaxed">
          Explore our newest arrivals, designed to elevate your space with modern style and unmatched comfort.
        </p>
      </div>

      {/* Horizontal Scrollable Container */}
      <div className="overflow-x-auto pb-4">
        <div className="flex gap-6">
          {latestProducts.map((item) => (
            <div key={item.id} className="flex-shrink-0 w-[23%]">
              <ProductItem
                id={item.id}
                image={item.image}
                name={item.name}
                price={item.price}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LatestCollection;
