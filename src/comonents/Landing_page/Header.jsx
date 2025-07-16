import React from 'react';
import illustration from '../../assets/profile.jpg';
import Logo from './Logo';

const Header = () => {
  return (
    <>
    <div className="w-full flex flex-col-reverse md:flex-row items-center justify-around px-6 md:px-16 py-6 md:py-12 sm:py-2 gap-5 min-h-screen">

      {/* Left Side */}
      <div className="w-full md:w-1/2 text-center md:text-left">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-2">
          Hi 👋,<br />
          My name is <span className="text-blue-500">Kapil</span><br />
          I build things for the web.
        </h1>
        <p className="text-base md:text-lg text-gray-600 ">
          I'm a frontend developer passionate about building responsive and engaging web experiences.
        </p>
      </div>

      {/* Right Side */}
      <div className="w-[200px] sm:w-[250px] md:w-[290px] aspect-square rounded-full overflow-hidden border-4 border-blue-500 shadow-lg">
        <img
          src={illustration}
          alt="Kapil profile"
          className="w-full h-full object-cover"
        />
      </div>
      
    </div>
   
    </>
  );
};

export default Header;
