import axios from "axios";
import React, { createContext, useState, useEffect } from "react";

const ShopContext = createContext();

const ShopProvider = ({ children }) => {
  const [product, setProduct] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const currency = "₹";

  // Fetch products on component mount
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(
          " http://localhost:8000/api/product/list"
        );
        setProduct(response.data.products); // Store fetched products in state
        console.log(response.data.products);
      } catch (error) {
        console.error("Failed to fetch products:", error);
      }
    };

    fetchProducts();
  }, []); // Empty dependency array ensures this runs only once

  const values = { cartItems, setCartItems, currency, product };

  return <ShopContext.Provider value={values}>{children}</ShopContext.Provider>;
};

export { ShopContext, ShopProvider };
export default ShopProvider;
