import React, { createContext } from "react";
// import { product } from "../assets/products/products";
import product from "../assets/products/products";

const ShopContext = createContext();

const ShopProvider = ({ children }) => {
  const currency = "₹";
  const [cartItems, setCartItems] = React.useState([]);
  console.log(product[1]);
  // console.log(product);
  const values = { cartItems, setCartItems, currency, product };

  return <ShopContext.Provider value={values}>{children}</ShopContext.Provider>;
};

export { ShopContext, ShopProvider };
export default ShopProvider;
