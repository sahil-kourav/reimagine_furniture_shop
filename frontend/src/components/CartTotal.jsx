import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "./Title";

const CartTotal = () => {
  const { currency, delivery_fee, getCartAmount } = useContext(ShopContext);

  return (
    <div className="w-full">
      <div className="text-xl sm:text-2xl my-4">
          <h1 className="text-3xl sm:text-3xl md:text-3xl font-serif font-semibold text-gray-800 tracking-tight leading-tight">
            Cart Totals
          </h1>
      </div>

      <div className="space-y-2 text-lg sm:text-base text-gray-700">
        <div className="flex justify-between">
          <p>Subtotal</p>
          <p>
             {getCartAmount().toLocaleString("en-IN", {
             style: "currency",
             currency: "INR",
            })}
          </p>
        </div>
        <hr />
        <div className="flex justify-between">
          <p>Shipping Fee</p>
          <p>
             {delivery_fee.toLocaleString("en-IN", {
             style: "currency",
             currency: "INR",
            })}
          </p>
        </div>
        <hr />
        <div className="flex justify-between font-semibold text-lg">
          <p>Total</p>
          <p>
            {(getCartAmount() + delivery_fee).toLocaleString("en-IN", {
            style: "currency",
            currency: "INR",
            })}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CartTotal;