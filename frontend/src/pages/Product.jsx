import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets/assets";
import RelatedProducts from "../components/RelatedProducts";
import OurPolicy from "../components/OurPolicy";
import AOS from "aos";
import "aos/dist/aos.css";

const Product = () => {
  const { productId } = useParams();
  const { products, currency, addToCart } = useContext(ShopContext);
  const [productData, setProductData] = useState(null);
  const [image, setImage] = useState("");

  useEffect(() => {
    const fetchProductData = () => {
      const found = products.find((item) => item.id === productId);
      if (found) {
        setProductData(found);
        setImage(found.image[0]);
      }
    };

    fetchProductData();
  }, [productId, products]);

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  useEffect(() => {
    AOS.refresh();
  }, [productData]);

  if (!productData || !productData.image) {
    return <div className="min-h-screen px-4 py-10">Loading product...</div>;
  }

  return productData ? (
    <div className="border-t-2 px-4 sm:px-6 md:px-10 lg:px-14 py-8 pt-10 transition-opacity ease-in duration-500 opacity-100">
      {/* Image + Product Info */}
      <div className="flex gap-12 flex-col sm:flex-row">
        {/* Image Gallery */}
        <div
          className="flex-1 flex flex-col-reverse gap-3 sm:flex-row"
          data-aos="fade-right"
        >
          <div className="flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full">
            {productData.image.map((item, index) => (
              <img
                loading="lazy"
                key={index}
                onClick={() => setImage(item)}
                className="w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer"
                src={item}
                alt={`preview-${index}`}
              />
            ))}
          </div>
          <div className="w-full sm:w-[80%]">
            <img
              className="w-full h-auto"
              loading="lazy"
              src={image}
              alt="selected"
            />
          </div>
        </div>

        {/* Product Info */}
        <div className="flex-1" data-aos="fade-left">
          <h1 className="font-medium text-2xl mt-2">{productData.name}</h1>
          <div className="flex items-center gap-1 mt-2">
            {[...Array(4)].map((_, i) => (
              <img
                loading="lazy"
                key={i}
                className="w-3.5"
                src={assets.star_icon}
                alt="star"
              />
            ))}
            <img
              loading="lazy"
              className="w-3.5"
              src={assets.star_dull_icon}
              alt="half-star"
            />
            <p className="pl-2 text-sm text-gray-500">(122)</p>
          </div>

          <p className="mt-5 text-3xl font-medium">
            {productData.price.toLocaleString("en-IN", {
              style: "currency",
              currency: "INR",
              maximumFractionDigits: 0,
            })}
          </p>
          <p className="mt-5 pr-4 text-gray-600 text-md md:w-5/5">
            {productData.description}
          </p>

          <button
            onClick={() => addToCart(productData.id)}
            className="bg-black text-white px-8 py-3 mt-5 text-sm active:bg-gray-700"
          >
            {" "}
            ADD TO CART{" "}
          </button>

          <hr className="mt-8 sm:w-5/5" />

          <div className="text-sm text-gray-600 mt-5 flex flex-col gap-1">
            <p>100% Original product.</p>
            <p>Cash on delivery is available on this product.</p>
            <p>Easy return and exchange policy within 7 days.</p>
          </div>
        </div>
      </div>

      {/* Tabs Section */}
      {/* <div className="mt-20" data-aos="fade-up">
        <div className="flex">
          <b className="border px-5 py-3 text-sm">Description</b>
          <p className="border px-5 py-3 text-sm text-gray-500">
            Reviews (122)
          </p>
        </div>
        <div className="border px-6 py-6 text-[0.95rem] text-sm text-gray-600 space-y-3">
          <p>
            At our furniture store, we bring you beautifully crafted pieces that
            blend functionality with aesthetic appeal. Whether you're furnishing
            a cozy apartment or an expansive home, our collection caters to
            every style and need.
          </p>

          <p>
            Our services include seamless online ordering, expert customer
            support, and fast, safe delivery right to your doorstep. From living
            room essentials to modular kitchen cabinets, each item is handpicked
            for durability and design excellence.
          </p>

          <p>
            We believe quality is more than just material — it's in the comfort,
            longevity, and craftsmanship of every piece. All our furniture is
            made using premium woods, eco-friendly finishes, and modern
            manufacturing standards to ensure you get nothing but the best.
          </p>

          <p>
            Experience the ease of shopping with detailed product descriptions,
            realistic photos, and clear pricing — all tailored to help you make
            confident decisions from the comfort of your home.
          </p>
        </div>
      </div> */}

      {/* Shipping Info */}
      <div
        className="flex flex-col md:flex-row items-center gap-6 mt-12 p-6 rounded-lg"
       
      >
        {/* Image Section */}
        <div className="w-full md:w-1/2" data-aos="fade-right">
          <img
            loading="lazy"
            src={assets.shipping}
            alt="Furniture Delivery"
            className="w-full h-auto rounded-md object-cover"
          />
        </div>

        {/* Text Section */}
        <div
          className="w-full md:w-1/2 text-center md:text-left space-y-3"
          data-aos="fade-left"
        >
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 leading-snug">
            Fast, Safe & Affordable Shipping
          </h2>
          <p className="text-gray-600 text-sm sm:text-base">
            We ensure your furniture reaches you safely and on time — with zero
            hassle. Our delivery network is trusted, efficient, and designed to
            protect your product at every step. Your dream setup, now just a
            doorstep away.
          </p>
        </div>
      </div>

      {/* Policy & Related Products */}
      <div className="mt-8">
        <OurPolicy />
        <RelatedProducts category={productData.category} />
      </div>
    </div>
  ) : (
    <div className=" opacity-0"></div>
  );
};

export default Product;
