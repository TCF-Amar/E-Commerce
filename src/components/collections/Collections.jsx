import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../../context/ShopContext";
import { Link } from "react-router-dom";
import Item from "../item/Item";
import icons from "../../assets/icons/icon";
import ItemNotFound from "../ItemNotFound";

/**
 * Collections Component
 * Displays a layout with a filter section and a collection items section.
 */
function Collections() {
  const { product, currency } = useContext(ShopContext);
  const [showFilters, setShowFilters] = useState(true);
  const [filteredProducts, setFilterProducts] = useState([]);
  const [category, setCategory] = useState([]);
  const [subcategory, setSubCategory] = useState([]);
  const [sortOrder, setSortOrder] = useState("");

  const toggleCategory = (e) => {
    const value = e.target.value.toLowerCase();
    if (category.includes(value)) {
      setCategory((prev) => prev.filter((item) => item !== value));
    } else {
      setCategory((prev) => [...prev, value]);
    }
  };

  const toggleSubCategory = (e) => {
    const value = e.target.value;
    if (subcategory.includes(value)) {
      setSubCategory((prev) => prev.filter((item) => item !== value));
    } else {
      setSubCategory((prev) => [...prev, value]);
    }
  };

  const applyFilter = () => {
    let productCopy = product.slice(); // Clone the product list

    // Category filtering
    if (category.length > 0) {
      productCopy = productCopy.filter(
        (item) =>
          item.category && category.includes(item.category.toLowerCase())
      );
    }

    // Subcategory filtering
    if (subcategory.length > 0) {
      productCopy = productCopy.filter((item) => {
        // Parse the subcategory if it's a JSON string
        let parsedSubcategories = [];
        try {
          parsedSubcategories = JSON.parse(item.subcategory);
        } catch (error) {
          console.error("Error parsing subcategory:", error);
        }

        // Check if any selected subcategories match
        return (
          Array.isArray(parsedSubcategories) &&
          subcategory.some((sub) =>
            parsedSubcategories
              .map((s) => s.toLowerCase())
              .includes(sub.toLowerCase())
          )
        );
      });
    }

    // Sorting based on price
    if (sortOrder === "lowtohigh") {
      productCopy.sort((a, b) => a.price - b.price);
    } else if (sortOrder === "hightolow") {
      productCopy.sort((a, b) => b.price - a.price);
    }

    setFilterProducts(productCopy); // Update the filtered products state
  };

  useEffect(() => {
    setFilterProducts(product);
  }, [product]);

  useEffect(() => {
    applyFilter();
    console.log(subcategory);
  }, [category, subcategory, product, sortOrder]);

  return (
    <div className="flex flex-col lg:flex-row gap-4 my-8">
      {/* Filter Section */}
      <div className="w-full lg:w-[30%] p-4">
        <div className="flex">
          <h2 className="text-lg font-semibold uppercase">Filters</h2>
          <img
            src={icons.back}
            className="w-[20px] rotate-180 lg:hidden cursor-pointer"
            alt=""
            onClick={() => setShowFilters(!showFilters)}
          />
        </div>
        <div
          className={`lg:block transition-all overflow-hidden ${
            showFilters ? "hidden" : "block"
          }`}
        >
          {/* Categories */}
          <div className="border p-3">
            <p className="font-semibold uppercase">Categories</p>
            <div className="flex items-center gap-2 p-2">
              <input
                type="checkbox"
                id="men"
                value="men"
                onChange={toggleCategory}
              />
              <label htmlFor="men">Men</label>
            </div>
            <div className="flex items-center gap-2 p-2">
              <input
                type="checkbox"
                id="women"
                value="women"
                onChange={toggleCategory}
              />
              <label htmlFor="women">Women</label>
            </div>
            <div className="flex items-center gap-2 p-2">
              <input
                type="checkbox"
                id="kids"
                value="kids"
                onChange={toggleCategory}
              />
              <label htmlFor="kids">Kids</label>
            </div>
          </div>

          {/* SubCategories */}
          <div className="border mt-4 p-3">
            <p className="font-semibold uppercase">Type</p>
            <div className="flex items-center gap-2 p-2">
              <input
                type="checkbox"
                id="topware"
                value="topware" // Adjusted case for display alignment
                onChange={toggleSubCategory}
              />
              <label htmlFor="topware">Top Wear</label>
            </div>
            <div className="flex items-center gap-2 p-2">
              <input
                type="checkbox"
                id="bottomware"
                value="Bottomware" // Adjusted case for display alignment
                onChange={toggleSubCategory}
              />
              <label htmlFor="bottomware">Bottom Wear</label>
            </div>
            <div className="flex items-center gap-2 p-2">
              <input
                type="checkbox"
                id="winterware"
                value="Winterware" // Adjusted case for display alignment
                onChange={toggleSubCategory}
              />
              <label htmlFor="winterware">Winter Wear</label>
            </div>
          </div>
        </div>
      </div>

      {/* Collection Items Section */}
      <div className="w-full lg:w-[70%] p-4">
        <div className="flex justify-between flex-col sm:flex-row">
          <div className="text-2xl uppercase flex gap-2 items-center">
            <p className="text-gray-500">All</p>
            <span className="">Collections</span>
            <p className="border border-gray-600 w-[80px] h-0"></p>
          </div>
          <select
            className="border outline-none w-fit p-2 px-3 float-end"
            onChange={(e) => setSortOrder(e.target.value)}
          >
            <option value="relative">Relative</option>
            <option value="lowtohigh">Low-to-high</option>
            <option value="hightolow">High-to-low</option>
          </select>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-2 gap-3 gap-y-5 sm:grid-cols-3 md:grid-cols-4 mt-6 h-full overflow-y-auto min-h-[80vh] pb-10">
          {filteredProducts.length
            ? filteredProducts.map((product) => (
                <Link key={product._id} to={`/product/${product._id}`}>
                  <Item
                    img={product.images[0]}
                    name={product.name}
                    price={product.price}
                    currency={currency}
                    sizes={product.sizes}
                  />
                </Link>
              ))
            : Array.from({ length: 8 }).map((_, index) => (
                <ItemNotFound key={index} />
              ))}
        </div>
      </div>
    </div>
  );
}

export default Collections;
