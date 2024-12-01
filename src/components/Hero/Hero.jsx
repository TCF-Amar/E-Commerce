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
        <div className="flex flex-col items-start">
          {/* Bestseller Label */}
          {/* <div className="border flex flex-col items-start justify-normal"> */}
          <div className="flex items-center justify-start gap-2 uppercase font-semibold">
            <p className="w-[50px] h-0 border border-gray-700  flex-1"></p>
            <p className="text-gray-700 tracking-widest">our bestseller</p>
          </div>

          {/* Title Section */}
          <div className="font-[prata_] text-4xl xl:text-5xl py-1 flex gap-2 ">
            {/* Each word animated independently */}
            <motion.p className="text-gray-500" variants={textVariants}>
              Latest
            </motion.p>
            <motion.p
              className="text-gray-700"
              variants={textVariants}
              transition={{ delay: 0.2 }} // Slight delay for staggered effect
            >
              Arrivals
            </motion.p>
          </div>

          {/* Shop Now Call-to-Action */}

          <div className="flex items-center justify-start gap-2 uppercase font-semibold">
            <p className="text-gray-700 tracking-widest">Shop Now</p>
            <p className="w-[50px] h-0 border border-gray-700  flex-1"></p>
          </div>
        </div>
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
