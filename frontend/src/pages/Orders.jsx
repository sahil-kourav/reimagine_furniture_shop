import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "../components/Title";
import axios from "axios";

const Orders = () => {
  const { backendUrl, token, currency } = useContext(ShopContext);
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchOrders = async () => {
    try {
      if (!token) return;

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

  return (
    <div className="border-t px-4 sm:px-6 md:px-6 lg:px-16 py-12">
      <div className="text-2xl text-center mb-8">
        <h1 className="text-3xl sm:text-3xl md:text-3xl font-serif font-semibold text-gray-800 tracking-tight leading-tight">
          My Orders
        </h1>
      </div>

      {loading && (
        <p className="text-center my-6 text-gray-500">Loading orders...</p>
      )}

      {!loading && orders.length === 0 && (
        <p className="text-center my-6 text-gray-500">No orders found.</p>
      )}

      <div className="space-y-8">
        {orders.map((item, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row items-around gap-6 border-t pt-6 pb-4 ml-2 mr-2 text-gray-700"
          >
            {/* Product Image and Info */}
            <div className="flex items-center gap-6 flex-1">
              <img
                className="w-28 h-44 object-cover rounded-md"
                src={item.image?.[0] || "/placeholder.png"}
                alt={item.name}
              />
              <div className="flex flex-col gap-1 w-full">
                <p className="text-xl font-semibold">{item.name}</p>

                <p className="text-sm font-medium">
                  Quantity:{" "}
                  <span className="font-semibold">{item.quantity}</span>
                </p>

                <p className="text-sm font-medium">
                  Date:{" "}
                  <span className="font-semibold">
                    {new Date(item.date).toDateString()}
                  </span>
                </p>
                <p className="text-sm font-medium">
                  Payment:{" "}
                  <span className="font-semibold">{item.paymentMethod}</span>
                </p>
                <p className="text-sm font-medium">
                  Product Price:{" "}
                  <span className="font-semibold">
                    {item.price.toLocaleString("en-IN", {
                      style: "currency",
                      currency: "INR",
                      maximumFractionDigits: 0,
                    })}
                  </span>
                </p>
                
                <p className="text-sm font-medium">
                  Total Amount:{" "}
                  <span className="font-semibold">
                    {item.amount.toLocaleString("en-IN", {
                      style: "currency",
                      currency: "INR",
                      maximumFractionDigits: 0,
                    })}
                  </span>
                </p>
              </div>
            </div>

            {/* Order Status and Update Button */}
            <div className="md:w-1/2 flex justify-between mt-4 items-center ">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-green-500"></span>
                <p className="text-sm font-medium">{item.status}</p>
              </div>

              <button
                onClick={fetchOrders}
                className="border px-4 py-2 text-sm font-medium rounded-sm hover:bg-gray-100"
              >
                Refresh Order Status
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Orders;
