import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets/assets";
import Title from "../components/Title";
import ProductItem from "../components/ProductItem";

const Collection = () => {
  const { products, search, showSearch } = useContext(ShopContext);
  const [showFilter, setShowFilter] = useState(false);
  const [filterProducts, setFilterProducts] = useState([]);
  const [category, setCategory] = useState([]);
  const [sortType, setSortType] = useState("relavent");

  const toggleCategory = (e) => {
    const value = e.target.value;
    setCategory((prev) =>
      prev.includes(value)
        ? prev.filter((item) => item !== value)
        : [...prev, value]
    );
  };

  const applyFilter = () => {
    let filtered = [...products];

    if (showSearch && search) {
      filtered = filtered.filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase())
      );
    }

    if (category.length > 0) {
      filtered = filtered.filter((item) => category.includes(item.category));
    }

    setFilterProducts(filtered);
  };

  const sortProduct = () => {
    let sorted = [...filterProducts];

    switch (sortType) {
      case "low-high":
        sorted.sort((a, b) => a.price - b.price);
        break;
      case "high-low":
        sorted.sort((a, b) => b.price - a.price);
        break;
      default:
        applyFilter();
        return;
    }

    setFilterProducts(sorted);
  };

  useEffect(() => {
    applyFilter();
  }, [category, search, showSearch, products]);

  useEffect(() => {
    sortProduct();
  }, [sortType]);

  return (
    <div className="py-10 min-h-screen transition-all duration-300">
      <div className="flex flex-col sm:flex-row gap-6 px-4 sm:px-6 md:px-8 lg:px-12">
        {/* Sidebar */}
        <aside className="w-full sm:w-52">
          <div className="flex flex-col sm:flex-row gap-4 mb-4">
            <select
              onChange={(e) => setSortType(e.target.value)}
              className="border text-sm rounded px-4 py-2 w-full sm:w-fit outline-none shadow-sm"
            >
              <option value="relavent">Sort by: Relevant</option>
              <option value="low-high">Sort by: Low to High</option>
              <option value="high-low">Sort by: High to Low</option>
            </select>
          </div>

          {/* Filter Toggle (mobile) */}
          <div className="flex justify-between items-center sm:hidden border p-2 rounded-md bg-gray-50">
            <h2 className="ml-2 font-medium text-gray-700">Shop by Category</h2>
            <img
              className={`w-2 transition-transform duration-300 ${showFilter ? "rotate-90" : ""}`}
              src={assets.dropdown_icon}
              onClick={() => setShowFilter(!showFilter)}
              alt="toggle"
            />
          </div>

          {/* Category Filters */}
          <div className={`mt-4 sm:block ${showFilter ? "block" : "hidden"} transition-all`}>
            <div className="border rounded-md p-4 shadow-sm">
              <h2 className="text-md font-semibold mb-4 text-gray-700">
                Select Category
              </h2>
              <div className="flex flex-col gap-3 text-sm text-gray-800">
                {["Sofa", "Bed", "DinningSet", "Wardrobe"].map((cat) => (
                  <label key={cat} className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      value={cat}
                      onChange={toggleCategory}
                      className="accent-black w-4 h-4"
                    />
                    {cat.replace(/([A-Z])/g, " $1")}
                  </label>
                ))}
              </div>
            </div>
          </div>
        </aside>

        {/* Main Product Area */}
        <main className="flex-1">
          <div className="flex flex-col sm:flex-row justify-between items-start pb-5">
          <h1 className="text-3xl sm:text-3xl md:text-3xl font-serif font-semibold text-gray-800 tracking-tight leading-tight">
              Our Collections
            </h1>
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 animate-fade-in">
            {filterProducts.length > 0 ? (
              filterProducts.map((item, index) => (
                <div
                  key={index}
                  className="motion-safe:animate-fade-up transition-transform duration-500"
                >
                  <ProductItem
                    name={item.name}
                    id={item.id}
                    price={item.price}
                    image={item.image}
                  />
                </div>
              ))
            ) : (
              <p className="text-gray-500 text-center col-span-full text-lg mt-10">
                No products found.
              </p>
            )}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Collection;
