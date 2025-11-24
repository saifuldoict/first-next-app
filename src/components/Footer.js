// components/Footer.js
import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Section: Links */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-6 md:space-y-0">
          
         

          {/* Social Icons (optional) */}
         
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 mt-6 pt-4 text-sm text-gray-400 text-center">
          © {new Date().getFullYear()} Your Company. All rights reserved.
        </div>
         <div className="flex space-x-4 justify-center">
            <a href="#" className="hover:text-green-500 transition">
              <FaFacebookF />
            </a>
            <a href="#" className="hover:text-green-500 transition">
              <FaTwitter />
            </a>
            <a href="#" className="hover:text-green-500 transition">
              <FaInstagram />
            </a>
          </div>
      </div>
    </footer>
  );
};

export default Footer;
