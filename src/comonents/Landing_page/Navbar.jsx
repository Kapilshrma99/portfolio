import React, { useState } from 'react';
import vector1 from '../../assets/Vector (1).png'
import vector2 from '../../assets/Vector.png'
import vector3 from '../../assets/Vector.svg'
import {Link}  from 'react-router-dom'
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="text-black py-4 w-full z-50">
      <div className="max-w-7xl mx-auto flex justify-around items-center px-4">
        
        {/* Logo */}
        <h1 className="text-2xl font-extrabold text-blue-700 hover:text-blue-900">Kapil Sharma</h1>

        {/* Hamburger Icon (Mobile Only) */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <ul className="flex space-x-6 cursor-pointer">
            <li>Home</li>
            <li>About</li>
            <li>Tech Stack</li>
            <li>Projects</li>
            <li>Contact</li>
           <li> <a href='https://www.linkedin.com/in/kapil-sharma-developer' target='_blank'> <img src={vector1} alt="linkdin" /></a></li>
            <li><a href='https://x.com/Kapilsharma0112' target='twitter'> <img src={vector2} alt="linkdin" /></a></li>
           <li><a href='https://github.com/Kapilshrma99' target='_blank'> <img src={vector3} alt="github" /></a></li>
          <a href="mailto:kapilsharma09311@gmail.com" className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition">
  Hire Me
</a>

          </ul>
        </div>
      </div>

      {/* Mobile Menu (Toggles) */}
      {isOpen && (
        <div className="md:hidden mt-4 px-4 space-y-4">
          <ul className="space-y-2 text-center">
            <li>About us</li>
            <li>Services</li>
            <li>Use Cases</li>
            <li>Pricing</li>
            <li>Blogs</li>
            <a href='https://www.linkedin.com/in/kapil-sharma-developer' target='_blank'> <img src={vector1} alt="linkdin" /></a>
            <a href='https://x.com/Kapilsharma0112' target='twitter'> <img src={vector2} alt="linkdin" /></a>
           <a href='https://github.com/Kapilshrma99' target='_blank'> <img src={vector3} alt="github" /></a>
          </ul>
          <button className="w-full border rounded px-4 py-2 mt-2">Request a quote</button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
