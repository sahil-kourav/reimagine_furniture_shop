import React, { useEffect, useState } from "react";
import axios from "axios";
import { backendUrl, currency } from "../App";
import { toast } from "react-toastify";
import { assets } from "../assets/assets";

const Orders = ({ token }) => {
  const [orders, setOrders] = useState([]);
  const [filteredOrders, setFilteredOrders] = useState([]);

  const [statusFilter, setStatusFilter] = useState("All");
  const [paymentStatusFilter, setPaymentStatusFilter] = useState("All");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const fetchAllOrders = async () => {
    if (!token) return;
    try {
      const res = await axios.post(
        `${backendUrl}/api/order/list`,
        {},
        {
          headers: { token },
        }
      );
      if (res.data.success) {
        const reversed = res.data.orders.reverse(); // Latest first
        setOrders(reversed);
        setFilteredOrders(reversed);
      } else {
        toast.error(res.data.message);
      }
    } catch (err) {
      toast.error(err.message);
    }
  };

  const applyFilters = () => {
    let filtered = [...orders];

    if (statusFilter !== "All") {
      filtered = filtered.filter((order) => order.status === statusFilter);
    }

    if (paymentStatusFilter !== "All") {
      if (paymentStatusFilter === "Unpaid COD") {
        filtered = filtered.filter(
          (order) => order.paymentMethod === "COD" && order.payment !== "Paid"
        );
      } else {
        filtered = filtered.filter(
          (order) => order.payment === paymentStatusFilter
        );
      }
    }

    if (startDate && endDate) {
      const start = new Date(startDate);
      const end = new Date(endDate);
      end.setHours(23, 59, 59, 999);
      filtered = filtered.filter((order) => {
        const orderDate = new Date(order.date);
        return orderDate >= start && orderDate <= end;
      });
    }

    setFilteredOrders(filtered);
  };

  useEffect(() => {
    fetchAllOrders();
  }, [token]);

  useEffect(() => {
    applyFilters();
  }, [statusFilter, paymentStatusFilter, startDate, endDate, orders]);

  const updatePaymentStatus = async (orderId) => {
    try {
      const res = await axios.put(
        `${backendUrl}/api/order/update-payment-status`,
        {
          orderId,
          payment: "Paid",
        },
        { headers: { token } }
      );

      if (res.data.success) {
        toast.success("COD payment received and status updated.");
        fetchAllOrders();
      } else {
        toast.error(res.data.message);
      }
    } catch (err) {
      toast.error(err.message);
    }
  };

  const statusHandler = async (e, orderId) => {
    try {
      const res = await axios.post(
        `${backendUrl}/api/order/status`,
        {
          orderId,
          status: e.target.value,
        },
        { headers: { token } }
      );

      if (res.data.success) fetchAllOrders();
    } catch (err) {
      toast.error(err.message);
    }
  };

  return (
    <div className="px-4 md:px-10 py-6 bg-gray-50 min-h-screen">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">Order History</h2>

      {/* Filters */}
      <div className="mb-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Order Status
          </label>
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="w-full p-2 border rounded-md text-sm"
          >
            <option value="All">All Orders</option>
            <option value="Order Placed">Order Placed</option>
            <option value="Packing">Packing</option>
            <option value="Shipped">Shipped</option>
            <option value="Out for delivery">Out for Delivery</option>
            <option value="Delivered">Delivered</option>
            <option value="Rejected">Rejected</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Payment Status
          </label>
          <select
            value={paymentStatusFilter}
            onChange={(e) => setPaymentStatusFilter(e.target.value)}
            className="w-full p-2 border rounded-md text-sm"
          >
            <option value="All">All Payments</option>
            <option value="Paid">Paid</option>
            <option value="Pending">Pending</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Start Date (From)
          </label>
          <input
            type="date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            className="w-full p-2 border rounded-md text-sm"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            End Date (To)
          </label>
          <input
            type="date"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
            className="w-full p-2 border rounded-md text-sm"
          />
        </div>
      </div>

      {/* Order List */}
      {filteredOrders.length === 0 ? (
        <p className="text-center text-gray-500 text-base">
          No matching orders found.
        </p>
      ) : (
        <div className="space-y-6">
          {filteredOrders.map((order, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl shadow-sm border border-gray-200 transition hover:shadow-md"
            >
              <div className="p-5 sm:p-6 grid grid-cols-1 md:grid-cols-[60px_1fr] gap-4">
                <div className="flex justify-center items-start">
                  <img
                    src={assets.parcel_icon}
                    alt="Parcel"
                    className="w-12 h-12 object-contain"
                  />
                </div>

                <div className="space-y-5">
                  <div>
                    <h4 className="text-lg font-semibold text-gray-700 mb-2">
                      Items Ordered
                    </h4>
                    <ul className="list-disc list-inside text-gray-600 text-md space-y-1">
                      {order.items.map((item, i) => (
                        <li key={i}>
                          <strong>{item.name}</strong> — Quantity:{" "}
                          {item.quantity}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="border-t pt-4">
                    <h4 className="text-lg font-semibold text-gray-700 mb-1">
                      Shipping Address
                    </h4>
                    <div className="text-gray-600 text-md space-y-0.5">
                      <p>
                        <strong>
                          {order.address.firstName} {order.address.lastName}
                        </strong>
                      </p>
                      <p>{order.address.street}</p>
                      <p>
                        {order.address.city}, {order.address.state}{" "}
                        {order.address.zipcode}
                      </p>
                      <p>{order.address.country}</p>
                      <p>{order.address.phone}</p>
                      <p>{order.address.email}</p>
                      <p className="mt-2 text-gray-800 font-medium">
                        Order Date
                      </p>
                      <p>{new Date(order.date).toLocaleDateString("en-IN")}</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 border-t pt-4">
                    <div>
                      <p className="text-gray-700 font-medium mb-1">
                        Order Amount
                      </p>
                      <p className="text-md font-semibold text-gray-700">
                        {/* {currency} */}
                        {/* {order.amount} */}
                          {order.amount.toLocaleString("en-IN", {
                          style: "currency",
                          currency: "INR", 
                          maximumFractionDigits: 0
                        })}

                      </p>
                    </div>

                    <div>
                      <p className="text-gray-700 font-medium mb-1">
                        Payment Method
                      </p>
                      <p className="text-md font-medium">
                        {order.paymentMethod} —{" "}
                        <span
                          className={
                            order.payment === "Paid"
                              ? "text-green-600"
                              : "text-red-600"
                          }
                        >
                          {order.payment}
                        </span>
                      </p>
                      {order.paymentMethod === "COD" &&
                        order.payment !== "Paid" && (
                          <button
                            onClick={() => updatePaymentStatus(order.id)}
                            className="mt-2 inline-flex items-center justify-center bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-4 rounded-lg shadow-md hover:shadow-lg transition duration-200 ease-in-out text-sm focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-1"
                          >
                            <svg
                              className="w-4 h-4 mr-1.5"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth={2}
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M5 13l4 4L19 7"
                              />
                            </svg>
                            Payment Received
                          </button>
                        )}
                    </div>

                    <div>
                      <label className="text-gray-700 font-medium block mb-1">
                        Order Status
                      </label>
                      <select
                        value={order.status}
                        onChange={(e) => statusHandler(e, order.id)}
                        className="w-full p-2 rounded-md border-gray-300 text-md font-medium shadow-sm focus:ring-blue-500 focus:border-blue-500"
                      >
                        <option value="Order Placed">Order Placed</option>
                        <option value="Packing">Packing</option>
                        <option value="Shipped">Shipped</option>
                        <option value="Out for delivery">
                          Out For Delivery
                        </option>
                        <option value="Delivered">Delivered</option>
                        <option value="Rejected">Rejected</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Orders;
