// Navbar.js
import React from 'react';
import { Link } from "react-router-dom";
import logo from '../assets/logo.png';

const Navbar = () => {
  return (
    <nav className="bg-gray-900 py-4 shadow-lg">
      <div className="container mx-16 flex justify-between items-center">
        {/* Left Section: Logo and Links */}
        <div className="flex items-center space-x-16">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img
              src={logo}
              alt="Študentski Dogodki Logo"
              className="w-64 h-14 mr-1" // Adjusted size for better fit
            />
          </Link>
          {/* Links */}
          <div className="hidden md:flex space-x-16 mr-6">
            <a href="#onas" className="text-gray-200 hover:text-custom-orange font-semibold text-lg">O nas</a>
            <a href="#narocnine" className="text-gray-200 hover:text-custom-orange font-semibold text-lg">Naročnine</a>
            <a href="#kontakt" className="text-gray-200 hover:text-custom-orange font-semibold text-lg">Kontakt</a>
          </div>
        </div>

        {/* Right Section: Login and Signup */}
        <div className="flex items-center space-x-4 rounded-full bg-gray-800 pl-6">
          <button className="text-gray-200 hover:text-custom-orange hidden md:block font-semibold">Login</button>
          <button className="bg-transparent border-2 border-custom-orange text-white font-semibold px-4 py-2 rounded-full hover:bg-custom-orange transition duration-300">
            Signup
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
