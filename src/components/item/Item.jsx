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
function Item({ img, name, rating, price, currency }) {
  return (
    <motion.div
      className="border border-gray-300 rounded shadow-lg overflow-hidden"
      // Animation: Initial fade-in on page load
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      // Hover and Tap animations for interactivity
      whileHover={{
        scale: 1.05,
        boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)",
        y: -5,
        transition: { duration: 0.3 },
      }}
      whileTap={{ scale: 0.98 }}
      exit={{ opacity: 0 }} // Exit animation for unmounting
    >
      {/* Image Section */}
      <motion.div
        className="w-full flex justify-center rounded h-[250px] sm:h-[200px] mb-2 overflow-hidden"
        whileHover={{
          opacity: 0.8,
          transition: { duration: 0.3 },
        }}
      >
        <img
          src={img}
          alt={`Product: ${name}`} // Alt text for accessibility
          className="w-full h-auto object-center object-cover"
        />
      </motion.div>

      {/* Content Section */}
      <div className="p-4">
        {/* Product Name */}
        <motion.h2
          className="text-lg text-nowrap font-semibold"
          whileHover={{ color: "#5A67D8", scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          {name}
        </motion.h2>

        {/* Product Rating */}
        <motion.p
          className="text-sm text-gray-600"
          whileHover={{ color: "#5A67D8", scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          Rating: ⭐ {rating}
        </motion.p>

        {/* Product Price */}
        <motion.p
          className="text-md font-medium"
          whileHover={{ color: "#5A67D8", scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          Price: {currency} {price}
        </motion.p>
      </div>
    </motion.div>
  );
}

export default Item;
