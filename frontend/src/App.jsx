// import React from "react";
// import { Routes, Route } from "react-router-dom";
// import Home from "./pages/Home";
// import Collection from "./pages/Collection";
// import About from "./pages/About";
// import Product from "./pages/Product";
// import Cart from "./pages/Cart";
// import Login from "./pages/Login";
// import PlaceOrder from "./pages/PlaceOrder";
// import Orders from "./pages/Orders";
// import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";
// import SearchBar from "./components/SearchBar";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import Verify from "./pages/Verify";
// import NotFound from "./NotFound/NotFound";

// const App = () => {
//   return (
//       // < className='px-4 sm:px-[5vw] md:px-[5vw] lg:px-[7vw]'>
//     <div>
//         <ToastContainer />
//         <Navbar />
//         <SearchBar />
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/collection" element={<Collection />} />
//           <Route path="/about" element={<About />} />
//           <Route path="/product/:productId" element={<Product />} />
//           <Route path="/cart" element={<Cart />} />
//           <Route path="/login" element={<Login />} />
//           <Route path="/place-order" element={<PlaceOrder />} />
//           <Route path="/orders" element={<Orders />} />
//           <Route path="/verify" element={<Verify />} />
//           <Route path="*" element={<NotFound />} />
//         </Routes>
//         <Footer />
//     </div>
//   );
// };

// export default App;










// import React, { useEffect, lazy, Suspense } from "react";
// import { Routes, Route } from "react-router-dom";
// import AOS from "aos";
// import "aos/dist/aos.css";
// import { ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// // Non-lazy components (used always)
// import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";
// import SearchBar from "./components/SearchBar";

// // Lazy-loaded pages
// const Home = lazy(() => import("./pages/Home"));
// const Collection = lazy(() => import("./pages/Collection"));
// const About = lazy(() => import("./pages/About"));
// const Product = lazy(() => import("./pages/Product"));
// const Cart = lazy(() => import("./pages/Cart"));
// const Login = lazy(() => import("./pages/Login"));
// const PlaceOrder = lazy(() => import("./pages/PlaceOrder"));
// const Orders = lazy(() => import("./pages/Orders"));
// const Verify = lazy(() => import("./pages/Verify"));
// const NotFound = lazy(() => import("./NotFound/NotFound"));

// const App = () => {
//   useEffect(() => {
//     AOS.init({
//       duration: 600,
//       once: true,
//     });
//   }, []);
//   return (
//     <div>
//       <ToastContainer />
//       <Navbar />
//       <SearchBar />

//       <Suspense
//         fallback={<p className="text-center py-10 text-gray-500">Ohhhooo ohhhoooo!!!!!!!...</p>}
//       >
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/collection" element={<Collection />} />
//           <Route path="/about" element={<About />} />
//           <Route path="/product/:productId" element={<Product />} />
//           <Route path="/cart" element={<Cart />} />
//           <Route path="/login" element={<Login />} />
//           <Route path="/place-order" element={<PlaceOrder />} />
//           <Route path="/orders" element={<Orders />} />
//           <Route path="/verify" element={<Verify />} />
//           <Route path="*" element={<NotFound />} />
//         </Routes>
//       </Suspense>

//       <Footer />
//     </div>
//   );
// };

// export default App;





















import React, { useEffect, lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import SearchBar from "./components/SearchBar";
import LoaderFallback from "./components/LoaderFallback";
import { delayImport } from "./Helpers/delayImport";

// Lazy-loaded pages
const Home = lazy(() => delayImport(import("./pages/Home")));
const Collection = lazy(() => delayImport(import("./pages/Collection")));
const About = lazy(() => delayImport(import("./pages/About")));
const Product = lazy(() => delayImport(import("./pages/Product")));
const Cart = lazy(() => delayImport(import("./pages/Cart")));
const Login = lazy(() => delayImport(import("./pages/Login")));
const PlaceOrder = lazy(() => delayImport(import("./pages/PlaceOrder")));
const Orders = lazy(() => delayImport(import("./pages/Orders")));
const Verify = lazy(() => delayImport(import("./pages/Verify")));
const NotFound = lazy(() => delayImport(import("./NotFound/NotFound")));

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 500,
      once: true,
    });
  }, []);

  return (
    <div>
      <ToastContainer />
      <Navbar />
      <SearchBar />

      <Suspense fallback={<LoaderFallback />}>
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
      </Suspense>

      <Footer />
    </div>
  );
};

export default App;
