import React from "react";
import { motion } from "framer-motion";

/**
 * Title Component
 * Displays two animated text lines with a customizable alignment and an optional divider.
 *
 * @param {string} text1 - The first part of the title (lighter text)
 * @param {string} text2 - The second part of the title (bold text)
 * @param {string} className - Additional custom classes for styling
 * @param {string} alignment - Alignment of the text: "center", "left", or "right"
 */
function Title({ text1, text2, className = "", alignment = "center" }) {
  // Animation Variants
  const textVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (delay) => ({
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, delay },
    }),
  };

  return (
    <div
      className={`w-full flex flex-col sm:flex-row gap-2 justify-${alignment} items-${alignment} text-${alignment} ${className} uppercase`}
    >
      {/* Animated Text Lines */}
      <motion.p
        className="text-xl text-gray-500"
        initial="hidden"
        animate="visible"
        custom={0.1} // Delay for animation
        variants={textVariants}
      >
        {text1}
      </motion.p>
      <motion.p
        className="text-xl font-semibold text-gray-700"
        initial="hidden"
        animate="visible"
        custom={0.3} // Delay for animation
        variants={textVariants}
      >
        {text2}
      </motion.p>
      <motion.div
        className="w-[30px] border-b-2 border-gray-800 mt-1"
        initial="hidden"
        animate="visible"
        custom={0.5} // Delay for animation
        variants={textVariants}
      ></motion.div>
    </div>
  );
}

export default Title;
