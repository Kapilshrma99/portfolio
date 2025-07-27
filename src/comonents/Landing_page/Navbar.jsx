import React, { useState, useEffect } from 'react';
import { Link } from 'react-router';
import vector1 from '../../assets/Vector (1).png'
import vector2 from '../../assets/Vector.png'
import vector3 from '../../assets/Vector.svg'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = () => {
      if (isOpen) setIsOpen(false);
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isOpen]);

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About' },
    { to: '/Techstack', label: 'Tech Stack' },
    { to: '/projects', label: 'Projects' },
    { to: '/Form', label: 'Contact' }
  ];

  const socialLinks = [
    {
      href: 'https://www.linkedin.com/in/kapil-sharma-developer',
      target: '_blank',
      icon: vector1,
      alt: 'LinkedIn',
      hoverColor: 'hover:text-blue-600'
    },
    {
      href: 'https://x.com/Kapilsharma0112',
      target: '_blank',
      icon: vector2,
      alt: 'Twitter',
      hoverColor: 'hover:text-sky-500'
    },
    {
      href: 'https://x.com/Kapilshrma99',
      target: '_blank',
      icon: vector3,
      alt: 'GitHub',
      hoverColor: 'hover:text-gray-700'
    }
  ];

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200/20' 
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 lg:h-20">
            
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link to="/" className="group">
                <h1 className="text-2xl lg:text-3xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent hover:from-purple-600 hover:to-blue-600 transition-all duration-300 transform group-hover:scale-105">
                  Kapil Sharma
                </h1>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-1">
              <ul className="flex items-center space-x-1">
                {navLinks.map((link, index) => (
                  <li key={index}>
                    <Link
                      to={link.to}
                      className="relative px-4 py-2 text-gray-700 hover:text-blue-600 font-medium transition-all duration-300 group"
                    >
                      {link.label}
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 group-hover:w-full transition-all duration-300"></span>
                    </Link>
                  </li>
                ))}
              </ul>

              {/* Social Links */}
              <div className="flex items-center space-x-2 ml-6">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target={social.target}
                    className={`w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 transition-all duration-300 transform hover:scale-110 ${social.hoverColor}`}
                    aria-label={social.alt}
                  >
                    <span className="text-lg">
                      <img src={social.icon} alt={social.alt} className="w-5 h-5" />
                    </span>
                  </a>
                ))}
              </div>

              {/* Hire Me Button */}
              <a
                href="mailto:kapilsharma09311@gmail.com"
                className="ml-4 px-6 py-2.5 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-semibold rounded-full hover:from-green-600 hover:to-emerald-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-green-500/25"
              >
                Hire Me
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setIsOpen(!isOpen);
                }}
                className="relative w-10 h-10 flex items-center justify-center rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors duration-200"
                aria-label="Toggle menu"
              >
                <div className="w-6 h-6 flex flex-col justify-center items-center">
                  <span
                    className={`w-6 h-0.5 bg-gray-700 transition-all duration-300 ${
                      isOpen ? 'rotate-45 translate-y-0.5' : ''
                    }`}
                  ></span>
                  <span
                    className={`w-6 h-0.5 bg-gray-700 transition-all duration-300 my-1 ${
                      isOpen ? 'opacity-0' : ''
                    }`}
                  ></span>
                  <span
                    className={`w-6 h-0.5 bg-gray-700 transition-all duration-300 ${
                      isOpen ? '-rotate-45 -translate-y-0.5' : ''
                    }`}
                  ></span>
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-md border-b border-gray-200/20 shadow-lg transition-all duration-300 ${
            isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
          }`}
        >
          <div className="px-4 py-6 space-y-4">
            <ul className="space-y-3">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.to}
                    onClick={() => setIsOpen(false)}
                    className="block px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg font-medium transition-all duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Mobile Social Links */}
            <div className="flex justify-center space-x-4 pt-4 border-t border-gray-200">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target={social.target}
                  className={`w-12 h-12 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 transition-all duration-300 ${social.hoverColor}`}
                  aria-label={social.alt}
                >
                  <span className="text-xl">
                    <img src={social.icon} alt={social.alt} className="w-6 h-6" />
                  </span>
                </a>
              ))}
            </div>

            {/* Mobile Hire Me Button */}
            <div className="pt-4">
              <a
                href="mailto:kapilsharma09311@gmail.com"
                className="block w-full px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-semibold rounded-full text-center hover:from-green-600 hover:to-emerald-700 transition-all duration-300 shadow-lg"
              >
                Hire Me
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Spacer to prevent content from hiding behind fixed navbar */}
      <div className="h-16 lg:h-20"></div>
    </>
  );
};

export default Navbar;