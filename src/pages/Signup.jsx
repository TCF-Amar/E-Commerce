import React, { useState } from "react";
import { motion } from "framer-motion";
import icons from "../assets/icons/icon";
import { Link } from "react-router-dom";

function Signup() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false); // State to toggle password visibility
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError("Passwords do not match!");
      return;
    }
    setError(""); // Clear any previous errors
    setIsSubmitting(true);

    // Simulate an async operation like signup API call
    setTimeout(() => {
      setIsSubmitting(false);
      alert("Signup Successful!");
    }, 2000);
  };

  return (
    <div className="fixed bg-gray-900 w-full h-screen  z-10 top-0 left-0 text-white flex items-center justify-center">
      {/* Signup Container */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="bg-gray-800 relative p-8 rounded-lg shadow-lg max-w-[400px] w-full"
      >
        {/* close */}
        <Link className="absolute text-5xl top-0 right-4 text-gray-700 hover:text-gray-500" to={'/'}>&times;</Link>
        {/* Heading */}
        <h2 className="text-2xl font-bold text-center mb-6">Signup</h2>

        {/* Signup Form */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          {/* Name Input */}
          <div className="flex flex-col">
            <label htmlFor="name" className="mb-1 text-sm font-medium">
              Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="Enter your name"
              required
              className="p-2 rounded bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-[#1fd4a7]"
            />
          </div>

          {/* Contact Number Input */}
          <div className="flex flex-col">
            <label htmlFor="contact" className="mb-1 text-sm font-medium">
              Contact No.
            </label>
            <input
              type="tel"
              id="contact"
              placeholder="Enter your contact number"
              pattern="[0-9]{10}" // Validates 10-digit contact numbers
              required
              className="p-2 rounded bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-[#1fd4a7]"
            />
          </div>

          {/* Email Input */}
          <div className="flex flex-col">
            <label htmlFor="email" className="mb-1 text-sm font-medium">
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              required
              className="p-2 rounded bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-[#1fd4a7]"
            />
          </div>

          {/* Password Input */}
          <div className="flex flex-col relative">
            <label htmlFor="password" className="mb-1 text-sm font-medium">
              Password
            </label>
            <input
              type={showPassword ? "text" : "password"} // Toggle between text and password
              id="password"
              placeholder="Create a password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="p-2 rounded bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-[#1fd4a7]"
            />
            {/* Eye Icon for Show/Hide */}
            <img
              src={showPassword ? icons.eyeOpen : icons.eyeClosed}
              alt="Toggle Password Visibility"
              className="absolute top-9 right-4 cursor-pointer w-5"
              onClick={() => setShowPassword(!showPassword)}
            />
          </div>

          {/* Confirm Password Input */}
          <div className="flex flex-col relative">
            <label
              htmlFor="confirmPassword"
              className="mb-1 text-sm font-medium"
            >
              Confirm Password
            </label>
            <input
              type={showConfirmPassword ? "text" : "password"}
              id="confirmPassword"
              placeholder="Confirm your password"
              required
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="p-2 rounded bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-[#1fd4a7]"
            />
            {/* Eye Icon for Show/Hide */}
            <img
              src={showConfirmPassword ? icons.eyeOpen : icons.eyeClosed}
              alt="Toggle Confirm Password Visibility"
              className="absolute top-9 right-4 cursor-pointer w-5"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            />
          </div>

          {/* Error Message */}
          {error && <p className="text-red-500 text-sm">{error}</p>}

          {/* Submit Button */}
          <motion.button
            type="submit"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-[#1fd4a7] text-black py-2 rounded font-semibold hover:bg-[#17b993] transition-all duration-300"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Signing up..." : "Signup"}
          </motion.button>
        </form>

        {/* Additional Options */}
        <div className="mt-4 text-center">
          <p className="text-sm">
            Already have an account?{" "}
            <a href="/login" className="text-[#1fd4a7] hover:underline">
              Login
            </a>
          </p>
        </div>
      </motion.div>
    </div>
  );
}

export default Signup;
