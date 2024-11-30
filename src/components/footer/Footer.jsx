import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="bg-gray-800 text-white py-6 w-full">
      <div className="container mx-auto text-center">
        {/* Main Footer Content */}
        <div className="mb-4">
          <p className="text-lg">© 2024 My E-Commerce Website</p>
          <p className="text-sm">All Rights Reserved</p>
        </div>

        {/* Social Media Links */}
        <div className="flex justify-center space-x-6 mb-4">
          <Link
            to="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500"
          >
            <i className="fab fa-facebook-f"></i> Facebook
          </Link>
          <Link
            to="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400"
          >
            <i className="fab fa-twitter"></i> Twitter
          </Link>
          <Link
            to="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-500"
          >
            <i className="fab fa-instagram"></i> Instagram
          </Link>
          <Link
            to="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-700"
          >
            <i className="fab fa-linkedin"></i> LinkedIn
          </Link>
        </div>

        {/* Links */}
        <div className="flex justify-center space-x-6 mb-4">
          <Link to="/about" className="text-sm hover:text-gray-400">
            About Us
          </Link>
          <Link to="/contact" className="text-sm hover:text-gray-400">
            Contact
          </Link>
          <Link to="/privacy-policy" className="text-sm hover:text-gray-400">
            Privacy Policy
          </Link>
          <Link to="/terms" className="text-sm hover:text-gray-400">
            Terms & Conditions
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Footer;
