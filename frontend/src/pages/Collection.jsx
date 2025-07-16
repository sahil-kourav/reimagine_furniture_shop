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
    <div className="py-8 border-t bg-white">
      <div className="flex flex-col sm:flex-row gap-8">
        <aside className="w-full sm:w-64">
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <select
              onChange={(e) => setSortType(e.target.value)}
              className="border rounded px-4 py-3 text-md w-full sm:w-fit outline-none"
            >
              <option value="relavent">Sort by: Relevant</option>
              <option value="low-high">Sort by: Low to High</option>
              <option value="high-low">Sort by: High to Low</option>
            </select>
          </div>

          {/* Sidebar Filters */}
          <div className="flex justify-between items-center sm:hidden border p-2 rounded-md">
            <h2 className="ml-2">
              Shop by Category
            </h2>

            <img
              className={`w-2 transform ${showFilter ? "rotate-90" : ""}`}
              src={assets.dropdown_icon}
              onClick={() => setShowFilter(!showFilter)}
              alt="toggle"
            />
          </div>

          <div className={`mt-4 sm:block ${showFilter ? "block" : "hidden"}`}>
            <div className="border rounded p-4 shadow-sm">
              <h2 className="text-lg font-semibold mb-4 text-gray-700">
                Select Category
              </h2>

              <div className="flex flex-col gap-3 text-md text-gray-900">
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

        {/* Main Product Section */}
        <main className="flex-1">
          <div className="flex justify-between text-base sm:text-2xl mb-4">
            <Title text1={"ALL"} text2={"COLLECTIONS"} />
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filterProducts.length > 0 ? (
              filterProducts.map((item, index) => (
                <ProductItem
                  key={index}
                  name={item.name}
                  id={item.id}
                  price={item.price}
                  image={item.image}
                />
              ))
            ) : (
              <p className="text-gray-500 text-center col-span-full">
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
