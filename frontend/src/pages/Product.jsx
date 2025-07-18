import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets/assets";
import RelatedProducts from "../components/RelatedProducts";
import OurPolicy from "../components/OurPolicy";

const Product = () => {
  const { productId } = useParams();
  const { products, currency, addToCart } = useContext(ShopContext);
  const [productData, setProductData] = useState(false);
  const [image, setImage] = useState("");

  const fetchProductData = async () => {
    products.map((item) => {
      if (item.id === productId) {
        setProductData(item);
        setImage(item.image[0]);
        return null;
      }
    });
  };

  useEffect(() => {
    fetchProductData();
  }, [productId]);

  return productData ? (
    <div className="border-t-2 px-4 sm:px-6 md:px-8 lg:px-8 py-6">
      <div className="flex gap-12 sm:gap-12 flex-col sm:flex-row">
        <div className="flex-1 flex flex-col-reverse gap-3 sm:flex-row">
          <div className="flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full">
            {productData.image.map((item, index) => (
              <img
                key={index}
                onClick={() => setImage(item)}
                className="w-[24%]  sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer"
                src={item}
                alt=""
              />
            ))}
          </div>

           <div className="w-full sm:w-[80%]">
            <img className="w-full h-[80%]" src={image} alt="" />
          </div>

        </div>
        {/* -------- Product Info ---------- */}
        <div className="flex-1">
          <h1 className="font-medium text-2xl mt-2">{productData.name}</h1>
          <div className="flex items-center gap-1 mt-2">
            <img className="w-3.5" src={assets.star_icon} alt="" />
            <img className="w-3.5" src={assets.star_icon} alt="" />
            <img className="w-3.5" src={assets.star_icon} alt="" />
            <img className="w-3.5" src={assets.star_icon} alt="" />
            <img className="w-3.5" src={assets.star_dull_icon} alt="" />
            <p className="pl-2">(122)</p>
          </div>
          {/* <p className='mt-5 text-3xl font-medium'>{currency}{productData.price}</p> */}
          <p className="mt-5 text-lg font-medium">
            {productData.price.toLocaleString("en-IN", {
              style: "currency",
              currency: "INR",
              maximumFractionDigits: 0,
            })}
          </p>

          <p className="mt-3 text-gray-500 md:w-4/5">
            {productData.description}
          </p>

          <button
            onClick={() => addToCart(productData.id)}
            className="bg-black text-white px-8 mt-5 py-3 text-sm active:bg-gray-700"
          >
            ADD TO CART
          </button>

          <hr className="mt-5 sm:w-4/5" />

          <div className="text-md text-gray-500 mt-5 flex flex-col gap-1">
             <p>✅ 100% authentic and original product</p>
             <p>💵 Cash on Delivery available for your convenience</p>
             <p>🔁 Enjoy hassle-free returns and exchanges within 7 days</p>
          </div>
        </div>
      </div>

      <div className="mt-8">
        <div className="flex">
          <b className="border px-5 py-3 text-sm">Description</b>
          <p className="border px-5 py-3 text-sm">Reviews (122)</p>
        </div>
        <div className="flex flex-col gap-4 border px-6 py-6 text-sm text-gray-500">
          <p>
            An e-commerce website is an online platform that facilitates the
            buying and selling of products or services over the internet. It
            serves as a virtual marketplace where businesses and individuals can
            showcase their products, interact with customers, and conduct
            transactions without the need for a physical presence. E-commerce
            websites have gained immense popularity due to their convenience,
            accessibility, and the global reach they offer.
          </p>
          <p>
            E-commerce websites typically display products or services along
            with detailed descriptions, images, prices. Each product usually has its own
            dedicated page with relevant information.
          </p>
        </div>
      </div>
 <OurPolicy />
      <RelatedProducts category={productData.category} />
    </div>
  ) : (
    <div className=" opacity-0"></div>
  );
};

export default Product;
