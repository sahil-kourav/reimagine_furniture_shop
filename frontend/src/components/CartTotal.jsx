// import React, { useContext } from "react";
// import { ShopContext } from "../context/ShopContext";
// import Title from "../components/Title";

// const CartTotal = () => {
//   const { currency, delivery_fee, getCartAmount } = useContext(ShopContext);

//   return (
//     <div className="w-full">
//       <div className="text-2xl my-4">
//         <Title text1={"CART"} text2={"TOTALS"} />
//       </div>

//       <div className="flex flex-col gap-2 mt-2 text-sm">
//         <div className="flex justify-between">
//           <p>Subtotal</p>
//           <p>
//             {getCartAmount().toLocaleString("en-IN", {
//               style: "currency",
//               currency: "INR",
//             })}
//           </p>
//         </div>
//         <hr />
//         <div className="flex justify-between">
//           <p>Shipping Fee</p>
//           <p>
//             {delivery_fee.toLocaleString("en-IN", {
//               style: "currency",
//               currency: "INR",
//             })}
//           </p>
//         </div>
//         <hr />
//         <div className="flex justify-between">
//           <p>Total</p>
//           <b>
//             {getCartAmount() === 0
//               ? 0
//               : (getCartAmount() + delivery_fee).toLocaleString("en-IN", {
//                   style: "currency",
//                   currency: "INR",
//                 })}
//           </b>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CartTotal;














import React, { useContext, useEffect } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "../components/Title";
import AOS from "aos";
import "aos/dist/aos.css";

const CartTotal = () => {
  const { currency, delivery_fee, getCartAmount } = useContext(ShopContext);

  useEffect(() => {
    AOS.init({ duration: 700, once: true });
  }, []);

  return (
    <div className="w-full" data-aos="fade-up">
      <div className="text-2xl my-4" data-aos="fade-right">
        <Title text1={"CART"} text2={"TOTALS"} />
      </div>

      <div className="flex flex-col gap-2 mt-2 text-sm">
        <div className="flex justify-between" data-aos="fade-right">
          <p>Subtotal</p>
          <p>
            {getCartAmount().toLocaleString("en-IN", {
              style: "currency",
              currency: "INR",
            })}
          </p>
        </div>
        <hr />
        <div className="flex justify-between" data-aos="fade-right">
          <p>Shipping Fee</p>
          <p>
            {delivery_fee.toLocaleString("en-IN", {
              style: "currency",
              currency: "INR",
            })}
          </p>
        </div>
        <hr />
        <div className="flex justify-between" data-aos="fade-right">
          <p>Total</p>
          <b>
            {getCartAmount() === 0
              ? 0
              : (getCartAmount() + delivery_fee).toLocaleString("en-IN", {
                  style: "currency",
                  currency: "INR",
                })}
          </b>
        </div>
      </div>
    </div>
  );
};

export default CartTotal;
