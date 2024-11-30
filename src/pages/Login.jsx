import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify"; // Importing toast and ToastContainer from React Toastify
import "react-toastify/dist/ReactToastify.css"; // Import the Toastify CSS
import icon from "../assets/icons/icon";

function Login() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulating an API call for login
    setTimeout(() => {
      setIsSubmitting(false);
      // Show success toast on successful login
      toast.warning("Login Successful!");

      // For failure simulation:
      // toast.error("Invalid credentials, please try again.", {
      //   position: toast.POSITION.TOP_CENTER,
      //   autoClose: 3000,
      // });
    }, 2000);
  };

  return (
    <div className="fixed bg-gray-900 w-full h-screen z-10 top-0 left-0 text-white flex items-center justify-center">
      {/* Login Container */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="bg-gray-800 relative p-8 rounded-lg shadow-lg max-w-[400px] w-full"
      >
        {/* Close Button */}
        <Link
          className="absolute text-5xl top-0 right-4 text-gray-700 hover:text-gray-500"
          to={"/"}
        >
          &times;
        </Link>

        {/* Heading */}
        <h2 className="text-2xl font-bold text-center mb-6">Login</h2>

        {/* Login Form */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
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
              type={showPassword ? "text" : "password"}
              id="password"
              placeholder="Enter your password"
              required
              className="p-2 rounded bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-[#1fd4a7]"
            />
            <img
              src={showPassword ? icon.eyeOpen : icon.eyeClosed}
              alt="Toggle Password Visibility"
              className="absolute top-9 right-4 w-5 cursor-pointer"
              onClick={() => setShowPassword((prev) => !prev)}
            />
          </div>

          {/* Submit Button */}
          <motion.button
            type="submit"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-[#1fd4a7] text-black py-2 rounded font-semibold hover:bg-[#17b993] transition-all duration-300"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Logging in..." : "Login"}
          </motion.button>
        </form>

        {/* Additional Options */}
        <div className="mt-4 text-center">
          <p className="text-sm">
            Don't have an account?{" "}
            <Link to="/signup" className="text-[#1fd4a7] hover:underline">
              Sign up
            </Link>
          </p>
        </div>
      </motion.div>

      {/* Toast Container for React Toastify */}
      <ToastContainer />
    </div>
  );
}

export default Login;
