import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-black py-4">
      <div className="container mx-16 flex justify-between items-center">
        {/* Left Section: Logo and Links */}
        <div className="flex items-center space-x-16">
          {/* Logo */}
          <div className="text-white text-2xl font-semibold">MyApp</div>
          {/* Links */}
          <div className="hidden md:flex space-x-12">
            <a href="#onas" className="text-white hover:text-gray-300 font-semibold">O nas</a>
            <a href="#narocnine" className="text-white hover:text-gray-300 font-semibold">Naročnine</a>
            <a href="#kontakt" className="text-white hover:text-gray-300 font-semibold">Kontakt</a>
          </div>
        </div>

        {/* Right Section: Login and Signup */}
        <div className="flex items-center space-x-4">
          <button className="text-white hover:text-gray-300 hidden md:block font-semibold">Login</button>
          <button className="bg-white text-black font-semibold px-4 py-2 rounded-full hover:bg-gray-200 font-semibold">
            Signup
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
