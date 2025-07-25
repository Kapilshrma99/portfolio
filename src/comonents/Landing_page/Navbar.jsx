import React, { useState } from 'react';
import vector1 from '../../assets/Vector (1).png'
import vector2 from '../../assets/Vector.png'
import vector3 from '../../assets/Vector.svg'
import {Link}  from 'react-router'
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="text-black py-4 w-full z-50">
      <div className="max-w-7xl mx-auto flex justify-around items-center px-4">
        
        {/* Logo */}
        <h1 className="text-2xl font-extrabold text-blue-700 hover:text-blue-900">Kapil Sharma</h1>

        {/* Hamburger Icon (Mobile Only) */}
        <div className="lg:hidden">
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
        <div className="hidden lg:flex items-center space-x-8">
          <ul className="flex space-x-6 cursor-pointer">
            {/* <li>Home</li> */}
            <Link to='/'>Home</Link>
            <li>About</li>
            {/* <li>Tech Stack</li> */}
            <Link to='/Techstack'>Tech Stack</Link>
            {/* <li>Projects</li> */}
            <Link to='/projects'>Projects</Link>
             <Link to='/Form'>Contact</Link>
           <li> <a className='text-center' href='https://www.linkedin.com/in/kapil-sharma-developer' target='_blank'> <img src={vector1} alt="linkdin" /></a></li>
            <li><a className='text-center' href='https://x.com/Kapilsharma0112' target='twitter'> <img src={vector2} alt="linkdin" /></a></li>
           <li><a className='text-center' href='https://github.com/Kapilshrma99' target='_blank'> <img src={vector3} alt="github" /></a></li>
          <a  href="mailto:kapilsharma09311@gmail.com" className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition">
  Hire Me
</a>

          </ul>
        </div>
      </div>

      {/* Mobile Menu (Toggles) */}
      {isOpen && (
        <div className="lg:hidden mt-4 px-4 space-y-4">
          <ul className="space-y-2 text-center">
               <Link to='/'>Home</Link>
            <li>About</li>
            {/* <li>Tech Stack</li> */}
             <Link to='/Techstack'>Tech Stack</Link>
            {/* <li>Projects</li> */}
            <Link to='/projects'>Projects</Link>
            <Link to='/Form'>Contact</Link>
            {/* <li>Contact</li> */}
            <a className='text-center' href='https://www.linkedin.com/in/kapil-sharma-developer' target='_blank'> <img src={vector1} alt="linkdin" /></a>
            <a className='text-center' href='https://x.com/Kapilsharma0112' target='twitter'> <img src={vector2} alt="linkdin" /></a>
           <a className='text-center' href='https://github.com/Kapilshrma99' target='_blank'> <img src={vector3} alt="github" /></a>
          <a  href="mailto:kapilsharma09311@gmail.com" className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition">
  Hire Me
</a>
          </ul>

        </div>
      )}
    </nav>
  );
};

export default Navbar;
