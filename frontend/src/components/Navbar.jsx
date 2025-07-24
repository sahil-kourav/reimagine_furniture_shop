import React, { useContext, useRef, useEffect, useState } from "react";
import { assets } from "../assets/assets";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";

const Navbar = () => {
  const [visible, setVisible] = useState(false);
  const { setShowSearch, getCartCount, token, setToken, setCartItems } =
    useContext(ShopContext);
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    setToken("");
    setCartItems({});
    navigate("/login");
  };

  const handleProtectedNavigation = (path) => {
    if (token) navigate(path);
    else navigate("/login");
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      {/* Desktop Navbar */}
      <div className="hidden sm:flex items-center justify-between px-12 py-3 bg-white shadow border-b border-gray-400 transition-all duration-200 sticky top-0 z-50 animate-fade-in">
        <NavLink to="/">
          <img
            className="w-32 hover:scale-105 transition-all duration-500"
            src={assets.logo}
            alt="logo"
          />
        </NavLink>

        <ul className="flex gap-10 text-[17px] font-medium tracking-wide">
          {["/", "/collection", "/about"].map((path, index) => (
            <NavLink
              key={index}
              to={path}
              className={({ isActive }) =>
                `hover:text-black  ${
                  isActive ? "text-black font-medium border-b border-gray-700" : "text-gray-500"
                }`
              }
            >
              {path === "/" ? "HOME" : path.slice(1).toUpperCase()}
            </NavLink>
          ))}
        </ul>

        <div className="flex items-center gap-6">
          <img
            onClick={() => {
              setShowSearch(true);
              navigate("/collection");
            }}
            src={assets.search_icon}
            className="w-5 cursor-pointer hover:scale-125 transition-all duration-300"
            alt="search"
          />

          <div className="relative" ref={dropdownRef}>
            <img
              onClick={() => {
                token ? setShowDropdown(!showDropdown) : navigate("/login");
              }}
              className="w-5 cursor-pointer hover:scale-125 transition-transform duration-300"
              src={assets.profile_icon}
              alt="profile"
            />

            {token && showDropdown && (
              <div className="flex flex-col absolute right-0 py-1 top-8 w-52 bg-white border shadow-xl rounded-xl z-10 transition-all duration-300 animate-dropdown overflow-hidden">
                <button className="py-2 px-5 text-sm hover:bg-gray-100 text-gray-900 text-left">
                  My Account
                </button>
                <button
                  onClick={() => {
                    navigate("/orders");
                    setShowDropdown(false);
                  }}
                  className="py-2 px-5 text-sm hover:bg-gray-100 text-gray-900 text-left"
                >
                  Orders
                </button>
                <button
                  onClick={() => {
                    logout();
                    setShowDropdown(false);
                  }}
                  className="py-2 px-5 text-sm hover:bg-gray-100 text-red-500 text-left"
                >
                  Logout
                </button>
              </div>
            )}
          </div>

          <div
            className="relative cursor-pointer"
            onClick={() => handleProtectedNavigation("/cart")}
          >
            <img
              src={assets.cart_icon}
              className="w-5 hover:scale-125 transition-transform duration-300"
              alt="cart"
            />
            <p className="absolute -right-2 -bottom-2 w-5 h-5 text-center bg-black text-white rounded-full text-[11px] flex items-center justify-center animate-bounce">
              {getCartCount()}
            </p>
          </div>
        </div>
      </div>

      {/* Mobile Navbar */}
      <div className="flex sm:hidden items-center justify-between px-4 py-4 bg-white shadow-lg border-b border-gray-300 font-medium sticky top-0 z-50 animate-fade-in">
        <NavLink to="/">
          <img
            className="w-28 hover:scale-105 transition-all duration-500"
            src={assets.logo}
            alt="logo"
          />
        </NavLink>

        <div className="flex items-center gap-5">
          <img
            onClick={() => {
              setShowSearch(true);
              navigate("/collection");
            }}
            src={assets.search_icon}
            className="w-5 cursor-pointer hover:scale-125 transition-transform"
            alt="search"
          />

          <div
            className="relative cursor-pointer"
            onClick={() => handleProtectedNavigation("/cart")}
          >
            <img
              src={assets.cart_icon}
              className="w-5 hover:scale-125 transition-transform duration-300"
              alt="cart"
            />
            <p className="absolute -right-2 -bottom-2 w-5 h-5 text-center bg-black text-white rounded-full text-[10px] flex items-center justify-center animate-bounce">
              {getCartCount()}
            </p>
          </div>

          <img
            onClick={() => setVisible(true)}
            src={assets.menu_icon}
            className="w-5 cursor-pointer hover:scale-110 transition-transform"
            alt="menu"
          />
        </div>
      </div>

      {/* Backdrop */}
      {visible && (
        <div
          className="fixed inset-0 bg-black bg-opacity-30 z-40"
          onClick={() => setVisible(false)}
        />
      )}

      {/* Sidebar */}
      <div
        className={`sm:hidden fixed top-0 right-0 h-full w-64 bg-white shadow-2xl transform transition-transform duration-300 z-50 ${
          visible ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col text-gray-700 h-full">
          <div className="flex items-center gap-3 p-4 border-b">
            <img
              onClick={() => setVisible(false)}
              className="w-3 rotate-180 cursor-pointer"
              src={assets.dropdown_icon}
              alt="close"
            />
            <p className="text-lg font-medium">Menu</p>
          </div>

          <NavLink
            onClick={() => setVisible(false)}
            className="py-3 px-6 border-b"
            to="/"
          >
            Home
          </NavLink>
          <NavLink
            onClick={() => setVisible(false)}
            className="py-3 px-6 border-b"
            to="/collection"
          >
            Collection
          </NavLink>
          <NavLink
            onClick={() => setVisible(false)}
            className="py-3 px-6 border-b"
            to="/about"
          >
            About
          </NavLink>

          {token ? (
            <>
              <button
                onClick={() => {
                  navigate("/orders");
                  setVisible(false);
                }}
                className="py-3 px-6 border-b text-left"
              >
                Orders
              </button>
              <button
                onClick={() => {
                  logout();
                  setVisible(false);
                }}
                className="py-3 px-6 border-b text-left text-red-500"
              >
                Logout
              </button>
            </>
          ) : (
            <button
              onClick={() => {
                navigate("/login");
                setVisible(false);
              }}
              className="py-3 px-6 border-b text-left text-red-500"
            >
              Login / Register
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
