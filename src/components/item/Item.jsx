import React from "react";
import { motion } from "framer-motion";

/**
 * Item Component
 * Represents a single product with image, name, rating, and price.
 * Includes animation effects for hover, tap, and page load.
 *
 * @param {string} img - URL of the product image
 * @param {string} name - Name of the product
 * @param {number} rating - Product rating
 * @param {number} price - Price of the product
 * @param {string} currency - Currency symbol for the price
 */
function Item({ img, name, price, currency }) {
  return (
    <motion.div
      className=" border-gray-300 rounded overflow-hidden "
      // Animation: Initial fade-in on page load
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      // Hover and Tap animations for interactivity

      whileTap={{ scale: 0.98 }}
      exit={{ opacity: 0 }} // Exit animation for unmounting
    >
      {/* Image Section */}
      <motion.div
        className=" flex justify-center rounded h-[200px]  sm:h-[250px] mb-2 overflow-hidden "
        whileHover={{
          opacity: 0.8,
          transition: { duration: 0.3 },
        }}
      >
        <img
          src={img}
          alt={`Product: ${name}`} // Alt text for accessibility
          className="w-full h-auto object-center object-cover hover:scale-110 duration-200"
        />
      </motion.div>

      {/* Content Section */}
      <div className="px-4">
        {/* Product Name */}
        <motion.h2
          className="text- text-nowrap "
          whileHover={{ color: "#5A67D8", scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          {name}
        </motion.h2>

        {/* Product Price */}
        <motion.p
          className="text-md font-semibold  "
          whileHover={{ color: "#5A67D8", scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          {currency}
          {price}
        </motion.p>
      </div>
    </motion.div>
  );
}

export default Item;
