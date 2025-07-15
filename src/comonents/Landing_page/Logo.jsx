import React from 'react';
import logo from '../../assets/v1.svg';
import logo1 from '../../assets/v2.svg';
import logo2 from '../../assets/v3.svg';
import logo3 from '../../assets/v4.svg';
import logo4 from '../../assets/v5.svg';
import logo5 from '../../assets/v6.svg';
import logo6 from '../../assets/vscode-icons_file-type-js-official.svg';
import logo7 from '../../assets/vscode-icons_file-type-tailwind.svg';
import logo8 from '../../assets/vscode-icons_file-type-vscode.svg';
import mongo from '../../assets/mongo.png';

const Logo = () => {
  const arr1 = [logo, logo1, logo2, logo3, mongo];
  const arr2 = [logo4, logo5, logo6, logo7, logo8];

  return (
    <>
      {/* Heading */}
      <div className="flex flex-col items-center py-6 px-4 text-center">
        <h1 className="font-bold text-2xl md:text-3xl">My Tech Stack</h1>
        <p className="font-medium text-sm md:text-base">
          Technologies I’ve been working with recently
        </p>
      </div>

      {/* First row of logos */}
      <div className="flex flex-wrap justify-center gap-6 md:gap-10 py-6 px-4">
        {arr1.map((img, id) => (
          <img
            key={id}
            src={img}
            alt={`Tech logo ${id + 1}`}
            className="w-12 h-12 md:w-16 md:h-16 hover:scale-110 transition-transform duration-300"
          />
        ))}
      </div>

      {/* Second row of logos */}
      <div className="flex flex-wrap justify-center gap-6 md:gap-10 py-6 px-4">
        {arr2.map((img, id) => (
          <img
            key={id}
            src={img}
            alt={`Tech logo ${id + 6}`}
            className="w-12 h-12 md:w-16 md:h-16 hover:scale-110 transition-transform duration-300"
          />
        ))}
      </div>
    </>
  );
};

export default Logo;
