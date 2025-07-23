import React, { useEffect, lazy, Suspense } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import SearchBar from "./components/SearchBar";

const Home = lazy(() => import("./pages/Home"));
const Collection = lazy(() => import("./pages/Collection"));
const About = lazy(() => import("./pages/About"));
const Product = lazy(() => import("./pages/Product"));
const Cart = lazy(() => import("./pages/Cart"));
const Login = lazy(() => import("./pages/Login"));
const PlaceOrder = lazy(() => import("./pages/PlaceOrder"));
const Orders = lazy(() => import("./pages/Orders"));
const Verify = lazy(() => import("./pages/Verify"));
const NotFound = lazy(() => import("./NotFound/NotFound"));

const App = () => {
  const { pathname } = useLocation(); 

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <Suspense
      fallback={
        <p className="text-center py-6 text-gray-500">
          Loading something magical... ✨
        </p>
      }
    >
      <div className="w-full max-w-screen">
        <ToastContainer />
        <Navbar />
        <SearchBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/collection" element={<Collection />} />
          <Route path="/about" element={<About />} />
          <Route path="/product/:productId" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Login />} />
          <Route path="/place-order" element={<PlaceOrder />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/verify" element={<Verify />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </div>
    </Suspense>
  );
};

export default App;
