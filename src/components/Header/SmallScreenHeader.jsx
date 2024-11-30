import { motion } from "framer-motion";
import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import icon from "../../assets/icons/icon";

/**
 * SmallScreenHeader Component
 * Displays a mobile-friendly header with a sliding navigation menu.
 * Includes animated transitions for better user experience.
 */
function SmallScreenHeader() {
  const [isNavShow, setNavShow] = useState(false); // State to control visibility of the navigation menu

  // Navigation Items
  const navItems = [
    { name: "Home", path: "/" },
    { name: "Collections", path: "/collections" },
    { name: "Shop", path: "/shop" },
    { name: "About", path: "/about" },
  ];

  return (
    <div className="border-b h-[50px] bg-gray-200 px-4 flex items-center sm:hidden justify-between">
      {/* Logo Section */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0, y: -20 },
          visible: {
            opacity: 1,
            y: 0,
            transition: {
              staggerChildren: 0.2,
            },
          },
        }}
      >
        <Link to="/" className="flex gap-1 font-bold text-2xl jaro">
          {/* Animations for each part of the logo */}
          <motion.p
            className="text-gray-500"
            variants={{
              hidden: { opacity: 0, x: -20 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            My
          </motion.p>
          <motion.p
            className="text-gray-700"
            variants={{
              hidden: { opacity: 0, x: -20 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            Shop
          </motion.p>
          <motion.p
            className="text-[#1fd4a7]"
            variants={{
              hidden: { opacity: 0, scale: 0.8 },
              visible: { opacity: 1, scale: 1 },
            }}
          >
            .
          </motion.p>
        </Link>
      </motion.div>

      {/* Menu Icon */}
      <motion.div
        whileTap={{ scale: 0.9, rotate: 15 }}
        whileHover={{ scale: 1.1 }}
        className="cursor-pointer"
        onClick={() => setNavShow(true)}
      >
        <img src={icon.menu} alt="Menu Icon" aria-label="Open Menu" />
      </motion.div>

      {/* Sliding Navigation Panel */}
      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: isNavShow ? 0 : "100%" }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        className="fixed bg-[#f4f4f4] h-screen top-0 left-0 w-full z-50 shadow-lg"
      >
        {/* Close Button */}
        <motion.div
          whileTap={{ scale: 0.9 }}
          whileHover={{ scale: 1.05 }}
          className="flex justify-end p-4"
          onClick={() => setNavShow(false)}
        >
          <div
            className="flex items-center justify-center cursor-pointer hover:text-gray-900"
            role="button"
            aria-label="Close Navigation"
          >
            <p className="font-bold text-gray-700 text-xl">Back</p>
            <motion.img
              src={icon.back}
              alt="Close Icon"
              className="rotate-180 ml-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            />
          </div>
        </motion.div>
        <hr className="border-gray-600 border-t-2" />

        {/* Navigation Links */}
        <motion.ul
          className="flex flex-col items-center gap-4 mt-8 text-lg font-semibold"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { staggerChildren: 0.3 },
            },
          }}
        >
          {navItems.map((item, index) => (
            <motion.li
              key={index}
              variants={{
                hidden: { opacity: 0, x: -20 },
                visible: { opacity: 1, x: 0 },
              }}
              whileHover={{ scale: 1.1, color: "#1fd4a7" }}
              className="w-full text-center py-2 hover:bg-gray-300 rounded-lg transition-all duration-200"
            >
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  isActive
                    ? "text-[#3567ff] font-bold uppercase"
                    : "text-gray-600 hover:text-gray-900 uppercase"
                }
                onClick={() => setNavShow(false)} // Close menu when a link is clicked
              >
                {item.name}
              </NavLink>
            </motion.li>
          ))}
        </motion.ul>
      </motion.div>
    </div>
  );
}

export default SmallScreenHeader;
