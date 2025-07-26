import React, { useContext, useEffect, useState, Suspense, lazy } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "../components/Title";
import AOS from "aos";
import "aos/dist/aos.css";

// Lazy load the ProductItem component
const ProductItem = lazy(() => import("./ProductItem"));

const RelatedProducts = ({ category }) => {
  const { products } = useContext(ShopContext);
  const [related, setRelated] = useState([]);

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  useEffect(() => {
    if (products.length > 0) {
      const filtered = products.filter((item) => item.category === category);
      setRelated(filtered.slice(0, 8));
    }
  }, [products, category]);

  return (
    <div className="my-10 px-0 md:px-10 lg:px-20 mx-auto">
      <div className="text-center text-3xl py-8" data-aos="fade-up">
        <Title text1={"RELATED"} text2={"PRODUCTS"} />
        <p className="max-w-3xl mx-auto text-sm sm:text-base md:text-md lg:text-md text-gray-500 leading-relaxed">
          Discover our handpicked selection of related products that complement your style and needs.
        </p>
      </div>

      <div className="grid mt-12 grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 sm:gap-x-4 md:gap-x-4 lg:gap-x-5 gap-y-10">
        <Suspense fallback={<div className="text-center col-span-full">Loading...</div>}>
          {related.map((item, index) => (
            <div key={item.id} data-aos="fade-up" data-aos-delay={index * 30}>
              <ProductItem
                id={item.id}
                name={item.name}
                price={item.price}
                image={item.image}
              />
            </div>
          ))}
        </Suspense>
      </div>
    </div>
  );
};

export default RelatedProducts;
