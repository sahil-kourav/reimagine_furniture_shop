import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/assets';
import CartTotal from '../components/CartTotal';

const Cart = () => {
  const { products, currency, cartItems, updateQuantity, navigate } = useContext(ShopContext);
  const [cartData, setCartData] = useState([]);

  useEffect(() => {
    if (products.length > 0) {
      const tempData = [];
      for (const itemId in cartItems) {
        for (const size in cartItems[itemId]) {
          if (cartItems[itemId][size] > 0) {
            tempData.push({
              id: itemId,
              size: size,
              quantity: cartItems[itemId][size]
            });
          }
        }
      }
      setCartData(tempData);
    }
  }, [cartItems, products]);

  return (
    <div className='border-t pt-14 px-4 sm:px-6 md:px-8 lg:px-12'>

      <div className='text-xl mb-3'>
          <h1 className="text-3xl sm:text-3xl md:text-3xl font-serif font-semibold text-gray-800 tracking-tight leading-tight">
            Your Cart
          </h1>
      </div>

      <div>
        {
          cartData.map((item, index) => {
            const productData = products.find((product) => product.id === item.id);

            if (!productData) return null; 

            return (
              <div key={index} className='py-4 border-t border-b text-gray-700 grid grid-cols-[4fr_0.5fr_0.5fr] sm:grid-cols-[4fr_2fr_0.5fr] items-center gap-4'>
                <div className='flex items-start gap-6'>
                  <img className='w-16 sm:w-20' src={productData.image[0]} alt={productData.name} />
                  <div>
                    <p className='text-md sm:text-lg font-medium'>{productData.name}</p>
                    <div className='flex items-center gap-5 mt-2'>
                      <p className='text-md sm:text-lg font-medium'>
                        {productData.price.toLocaleString("en-IN", {
                        style: "currency",
                        currency: "INR",
                        maximumFractionDigits: 0
                      })}
                      </p>
                    </div>
                  </div>
                </div>
                <input
                  type="number"
                  min={1}
                  defaultValue={item.quantity}
                  onChange={(e) => {
                    const val = Number(e.target.value);
                    if (val > 0) {
                      updateQuantity(item.id, item.size, val);
                    }
                  }}
                  className='border max-w-10 sm:max-w-20 px-1 sm:px-2 py-1'
                />
                <img
                  onClick={() => updateQuantity(item.id, item.size, 0)}
                  className='w-4 mr-4 sm:w-5 cursor-pointer'
                  src={assets.bin_icon}
                  alt="delete"
                />
              </div>
            );
          })
        }
      </div>

      <div className='flex justify-end my-20'>
        <div className='w-full sm:w-[450px]'>
          <CartTotal />
          <div className='w-full text-end'>
            <button
              onClick={() => navigate('/place-order')}
              className='bg-black w-full text-white text-sm my-8 px-8 py-3'
            >
              PROCEED TO CHECKOUT
            </button>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Cart;
