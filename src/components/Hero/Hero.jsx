import React from "react";
import { motion } from "framer-motion";
import heroImage from "../../assets/Images/heroimg.png";
import { Link } from "react-router-dom";

/**
 * Hero Component
 * Displays a visually appealing hero section with animation effects.
 * Includes a left text section and a right image section.
 */
const Hero = () => {
  // Animation Variants for Framer Motion
  const textVariants = {
    hidden: { opacity: 0, y: 50 }, // Start position (hidden)
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 70,
        damping: 12,
        duration: 0.8,
      }, // Smooth spring animation
    },
  };

  const imageVariants = {
    hover: { scale: 1.1 }, // Slight zoom effect on hover
  };

  return (
    <motion.div
      className="w-full border flex flex-col-reverse md:flex-row"
      initial="hidden" // Initial state for animations
      animate="visible" // Trigger animation on mount
    >
      {/* Left Section (Text and Call-to-Action) */}
      <motion.div
        className="flex-1 border py-[3.5rem] md:py-0 flex justify-center items-center flex-col"
        variants={textVariants}
      >
        {/* Bestseller Label */}
        <div className="flex items-center justify-start gap-2 uppercase">
          <p className="w-[30px] h-0 border border-gray-600 mt-1 flex-1"></p>
          <p className="text-gray-700 tracking-widest">our bestseller</p>
        </div>

        {/* Title Section */}
        <div className="prata text-4xl xl:text-5xl font-bold flex gap-2 py-4">
          {/* Each word animated independently */}
          <motion.p className="text-gray-500" variants={textVariants}>
            latest
          </motion.p>
          <motion.p
            className="text-gray-700"
            variants={textVariants}
            transition={{ delay: 0.2 }} // Slight delay for staggered effect
          >
            arrivals
          </motion.p>
        </div>

        {/* Shop Now Call-to-Action */}
        <motion.div whileHover={{ scale: 1.05 }}>
          <Link
            to={"/collections"}
            className="flex items-center gap-2 uppercase justify-start group"
          >
            <p className="cursor-pointer text-gray-700 tracking-wide transition-all duration-300 group-hover:text-gray-900">
              shop now
            </p>
            <p className="w-[30px] h-0 border border-gray-600 mt-1 flex-1"></p>
          </Link>
        </motion.div>
      </motion.div>

      {/* Right Section (Hero Image) */}
      <motion.div className="flex-1 border overflow-hidden">
        <motion.img
          src={heroImage}
          className="w-full object-cover -z-10"
          alt="Hero" // Accessibility description
          variants={imageVariants}
          whileHover="hover" // Apply hover animation
        />
      </motion.div>
    </motion.div>
  );
};

export default Hero;
