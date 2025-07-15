import React from 'react';
import i1 from '../../assets/i1.png';
import i2 from '../../assets/i2.png';
import i3 from '../../assets/i3.png';
import i4 from '../../assets/i4.png';
import i5 from '../../assets/i5.png';
import i6 from '../../assets/i6.png';
import Link from '../../assets/Link.png';

const servicesData = [
  {
    title1: 'Search Engine',
    title2: 'Optimisation',
    bgColor: 'bg-shadewhite',
    textBg: 'bg-green',
    image: i1,
  },
  {
    title1: 'Pay-per-click',
    title2: 'Advertisment',
    bgColor: 'bg-green',
    textBg: 'bg-shadewhite',
    image: i2,
  },
  {
    title1: 'Social Media',
    title2: 'Marketing',
    bgColor: 'bg-black',
    textBg: 'bg-shadewhite',
    image: i3,
  },
  {
    title1: 'Email',
    title2: 'Marketing',
    bgColor: 'bg-shadewhite',
    textBg: 'bg-green',
    image: i4,
  },
  {
    title1: 'Content',
    title2: 'Creation',
    bgColor: 'bg-green',
    textBg: 'bg-shadewhite',
    image: i5,
  },
  {
    title1: 'Analytics and',
    title2: 'Tracking',
    bgColor: 'bg-black',
    textBg: 'bg-green',
    image: i6,
  },
];

const Services = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 justify-items-center my-12 px-6 max-w-7xl mx-auto">
      {servicesData.map((service, index) => (
        <div
          key={index}
          className={`w-[600px] h-[300px] ${service.bgColor} flex border rounded-4xl shadow-[0_4px_20px_-1px_rgba(0,0,0,0.2)] overflow-hidden`}
        >
          {/* Left text content */}
          <div className="relative flex flex-col justify-between p-5 w-1/2">
            <div>
              <h1 className={`text-2xl font-bold ${service.textBg} rounded inline-block px-2 mb-2`}>
                {service.title1}
              </h1>
              <h1 className={`text-2xl font-bold ${service.textBg} inline-block px-2`}>
                {service.title2}
              </h1>
            </div>
            <div className="cursor-pointer">
              <img src={Link} alt="link icon" />
            </div>
          </div>

          {/* Right image */}
          <div className="flex items-center justify-center w-1/2">
            <img src={service.image} alt={service.title1} className="max-h-[80%] object-contain" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Services;
