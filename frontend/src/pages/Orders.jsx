import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "../components/Title";
import axios from "axios";
import AOS from "aos";
import "aos/dist/aos.css";

const Orders = () => {
  const { backendUrl, token, currency } = useContext(ShopContext);
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchOrders = async () => {
    if (!token) return;
    try {
      setLoading(true);
      const { data } = await axios.post(
        `${backendUrl}/api/order/userorders`,
        {},
        { headers: { token } }
      );

      if (data.success) {
        const allItems = data.orders.flatMap((order) =>
          order.items.map((item) => ({
            ...item,
            status: order.status,
            payment: order.payment,
            paymentMethod: order.paymentMethod,
            date: order.date,
            amount: order.amount,
          }))
        );
        setOrders(allItems.reverse());
      }
    } catch (error) {
      console.error("Failed to fetch orders:", error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchOrders();
  }, [token]);

  useEffect(() => {
    fetchOrders();
    AOS.init({ duration: 800, once: true });
  }, [token]);

  return (
    <div className="border-t pt-16 px-4 sm:px-6 md:px-10 lg:px-20 py-12 bg-white min-h-screen">
      <div
        className="text-2xl font-semibold text-center text-gray-800"
        data-aos="fade-down"
      >
        <Title text1="MY" text2="ORDERS" />
        <p className="text-center text-gray-700 text-sm font-light mb-12">
          Your order updates automatically with every status change.
        </p>
      </div>

      {loading ? (
        <p className="text-center py-10 text-gray-500 animate-pulse">
          Loading Orders...
        </p>
      ) : orders.length === 0 ? (
        <p className="text-center py-10 text-gray-500">No orders found.</p>
      ) : (
        <div>
          {orders.map((item, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={`${index * 30}`}
              className="w-full py-5 flex flex-col sm:flex-row sm:items-center justify-between border-t-2"
            >
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-6">
                {/* Product Details */}
                <div className="flex items-start gap-5">
                  <img
                    src={item.image?.[0] || "/placeholder.png"}
                    alt={item.name}
                    loading="lazy"
                    className="w-24 h-28 object-cover"
                  />
                  <div className="text-gray-800 space-y-[0.2rem] ">
                    <p className="text-md font-semibold leading-snug">
                      {item.name}
                    </p>
                    <p className="text-sm">
                      Quantity:{" "}
                      <span className="font-semibold">{item.quantity}</span>
                    </p>
                    <p className="text-sm">
                      Total Amount:{" "}
                      <span className="font-semibold">
                        {item.price.toLocaleString("en-IN", {
                          style: "currency",
                          currency: "INR",
                          maximumFractionDigits: 0,
                        })}
                      </span>
                    </p>
                    <p className="text-sm">
                      Date:{" "}
                      <span className="font-semibold">
                        {new Date(item.date).toLocaleDateString("en-IN", {
                          day: "2-digit",
                          month: "long",
                          year: "numeric",
                        })}
                      </span>
                    </p>
                    <p className="text-sm">
                      Payment Method:{" "}
                      <span className="font-semibold">
                        {item.paymentMethod}
                      </span>
                    </p>
                  </div>
                </div>
              </div>

              <div className="md:w-1/2 flex justify-between mt-4 items-center ">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-green-500"></span>
                  <p className="text-sm font-medium">{item.status}</p>
                </div>

                <button
                  onClick={fetchOrders}
                  className="border px-4 py-2 text-sm font-medium rounded-sm hover:bg-gray-100"
                >
                  Refresh Order
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Orders;
