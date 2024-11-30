import React from "react";
import { motion } from "framer-motion"; // Library for animations
import { NavLink, Link } from "react-router-dom"; // Navigation components
import icons from "../../assets/icons/icon"; // Importing icons for the header

/**
 * LargeScreenHeader Component
 * Displays a header optimized for large screens with navigation links, logo, and user options.
 * Includes animations for a modern and interactive experience.
 */
function LargeScreenHeader() {
  // Navigation Items
  const navItems = [
    { name: "Home", path: "/" },
    { name: "Collections", path: "/collections" },
    { name: "Shop", path: "/shop" },
    { name: "About", path: "/about" },
  ];

  // Animation Variants
  const textVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
  };

  const iconVariants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, delay: 0.3 },
    },
    hover: { scale: 1.2 },
  };

  return (
    <motion.div
      className="h-[50px] top-0 left-0 w-full bg-gray-200 px-4 sm:flex items-center hidden justify-between"
      initial="hidden"
      animate="visible"
    >
      {/* Logo Section */}
      <motion.div>
        <NavLink to="/" className="flex gap-1 font-bold text-2xl jaro">
          <motion.p className="text-gray-500" variants={textVariants}>
            My
          </motion.p>
          <motion.p className="text-gray-700" variants={textVariants}>
            Shop
          </motion.p>
          <motion.p
            className="text-[#1fd4a7]"
            variants={{
              hidden: { opacity: 0, scale: 0.8 },
              visible: { opacity: 1, scale: 1, transition: { duration: 0.6 } },
            }}
          >
            .
          </motion.p>
        </NavLink>
      </motion.div>

      {/* Navigation Links */}
      <motion.div
        className="flex-1 flex justify-center gap-4 items-center"
        variants={{
          hidden: { opacity: 0, y: -10 },
          visible: {
            opacity: 1,
            y: 0,
            transition: { staggerChildren: 0.2 },
          },
        }}
      >
        {navItems.map((item, index) => (
          <motion.div key={index} variants={textVariants}>
            <NavLink
              to={item.path}
              className={({ isActive }) =>
                isActive
                  ? "underline uppercase text-[#1fd4a7] transform -translate-y-1 transition-all duration-200"
                  : "text-gray-600 uppercase hover:text-gray-900 transform hover:-translate-y-1 transition-all duration-200"
              }
            >
              {item.name}
            </NavLink>
          </motion.div>
        ))}
      </motion.div>

      {/* User Options and Icons */}
      <motion.div
        className="flex gap-3"
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.2 } },
        }}
      >
        {/* Login/Signup Links */}
        <div className="flex font-semibold gap-1">
          <motion.div variants={iconVariants}>
            <Link
              to="/login"
              className="hover:-translate-y-1 transition-all duration-200"
            >
              Login
            </Link>
          </motion.div>
          <p>/</p>
          <motion.div variants={iconVariants}>
            <Link
              to="/signup"
              className="hover:-translate-y-1 transition-all duration-200"
            >
              Signup
            </Link>
          </motion.div>
        </div>

        {/* Search Icon */}
        <motion.button
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
          variants={iconVariants}
        >
          <i className="fa-solid fa-magnifying-glass text-gray-600 text-xl"></i>
        </motion.button>

        {/* User Profile Icon */}
        <motion.div whileHover={{ scale: 1.1 }} variants={iconVariants}>
          <Link to="/profile">
            <img src={icons.user} alt="User Profile" className="w-[30px]" />
          </Link>
        </motion.div>

        {/* Shopping Cart Icon */}
        <motion.div
          className="relative"
          whileHover={{ scale: 1.1 }}
          variants={iconVariants}
        >
          <Link to="/cart" className="relative">
            <img src={icons.cart} alt="Shopping Cart" className="w-[30px]" />
            <p className="absolute -right-1 bottom-0 rounded-full bg-gray-400 w-3 text-center text-[10px]">
              10
            </p>
          </Link>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export default LargeScreenHeader;
