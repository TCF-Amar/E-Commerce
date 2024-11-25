import React, { createContext } from "react";

const ShopContext = createContext();

const ShopProvider = ({ children }) => {
  const [cartItems, setCartItems] = React.useState([]);

  const values = { cartItems, setCartItems };

  return <ShopContext.Provider value={values}>{children}</ShopContext.Provider>;
};

export { ShopContext, ShopProvider };
export default ShopProvider;
