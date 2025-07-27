import React, { useState, useEffect } from 'react';
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
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  // Tech stack data with names and categories
  const techStack = [
    { img: logo, name: 'React', category: 'Frontend', color: 'from-blue-400 to-cyan-400' },
    { img: logo1, name: 'HTML5', category: 'Frontend', color: 'from-orange-400 to-red-400' },
    { img: logo2, name: 'CSS3', category: 'Frontend', color: 'from-blue-500 to-blue-600' },
    { img: logo3, name: 'Node.js', category: 'Backend', color: 'from-green-400 to-green-600' },
    { img: mongo, name: 'MongoDB', category: 'Database', color: 'from-green-500 to-emerald-500' },
    { img: logo4, name: 'Git', category: 'Tools', color: 'from-orange-500 to-red-500' },
    { img: logo5, name: 'GitHub', category: 'Tools', color: 'from-gray-700 to-gray-900' },
    { img: logo6, name: 'JavaScript', category: 'Language', color: 'from-yellow-400 to-yellow-500' },
    { img: logo7, name: 'Tailwind', category: 'Framework', color: 'from-cyan-400 to-blue-500' },
    { img: logo8, name: 'VS Code', category: 'Editor', color: 'from-blue-600 to-indigo-600' }
  ];

  // Categories for filtering/grouping
  const categories = ['All', 'Frontend', 'Backend', 'Tools', 'Database', 'Language', 'Framework', 'Editor'];
  const [activeCategory, setActiveCategory] = useState('All');

  // Filter tech stack based on active category
  const filteredTechStack = activeCategory === 'All' 
    ? techStack 
    : techStack.filter(tech => tech.category === activeCategory);

  // Animation trigger on component mount
  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="py-16 px-4 bg-gradient-to-br from-slate-50 via-white to-blue-50 relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-r from-blue-400/10 to-purple-400/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-gradient-to-r from-purple-400/10 to-pink-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-cyan-400/5 to-blue-400/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header Section */}
        <div className={`text-center mb-12 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="inline-block">
            <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl bg-gradient-to-r from-gray-800 via-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
              My Tech Stack
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-4 rounded-full"></div>
          </div>
          <p className="font-medium text-base md:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Technologies I've been working with recently to create amazing digital experiences
          </p>
        </div>

        {/* Category Filter */}
        <div className={`flex flex-wrap justify-center gap-2 mb-12 transition-all duration-1000 delay-300 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          {categories.map((category, index) => (
            <button
              key={index}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg transform scale-105'
                  : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200 hover:border-blue-300'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Tech Stack Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 md:gap-8">
          {filteredTechStack.map((tech, index) => (
            <div
              key={index}
              className={`group relative transition-all duration-700 delay-${index * 100} ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Main Card */}
              <div className="relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-110 hover:-translate-y-2 border border-gray-100 group-hover:border-transparent overflow-hidden">
                
                {/* Gradient Background on Hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${tech.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-2xl`}></div>
                
                {/* Tech Logo */}
                <div className="relative z-10 flex flex-col items-center">
                  <div className="w-16 h-16 md:w-20 md:h-20 mb-4 relative group-hover:animate-bounce">
                    <img
                      src={tech.img}
                      alt={tech.name}
                      className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-110"
                    />
                    
                    {/* Glow Effect */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${tech.color} opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500 rounded-full`}></div>
                  </div>

                  {/* Tech Name */}
                  <h3 className="font-bold text-sm md:text-base text-gray-800 mb-1 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300">
                    {tech.name}
                  </h3>

                  {/* Category Badge */}
                  <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full group-hover:bg-white group-hover:text-gray-600 transition-all duration-300">
                    {tech.category}
                  </span>
                </div>

                {/* Floating Particles Effect */}
                {hoveredIndex === index && (
                  <>
                    <div className="absolute top-2 right-2 w-2 h-2 bg-blue-400 rounded-full animate-ping"></div>
                    <div className="absolute bottom-2 left-2 w-1.5 h-1.5 bg-purple-400 rounded-full animate-pulse"></div>
                    <div className="absolute top-1/2 right-1 w-1 h-1 bg-cyan-400 rounded-full animate-bounce"></div>
                  </>
                )}
              </div>

              {/* Tooltip */}
              <div className={`absolute -top-12 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white px-3 py-1 rounded-lg text-sm font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none z-20 ${
                hoveredIndex === index ? 'translate-y-0' : 'translate-y-2'
              }`}>
                {tech.name}
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-800"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className={`mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 transition-all duration-1000 delay-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          {[
            { number: `${techStack.length}+`, label: 'Technologies' },
            { number: '1+', label: 'Years Experience' },
            { number: '10+', label: 'Projects Built' },
            { number: '∞', label: 'Learning More' }
          ].map((stat, index) => (
            <div key={index} className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                {stat.number}
              </div>
              <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Custom Styles */}
      <style jsx>{`
        .delay-0 { animation-delay: 0ms; }
        .delay-100 { animation-delay: 100ms; }
        .delay-200 { animation-delay: 200ms; }
        .delay-300 { animation-delay: 300ms; }
        .delay-400 { animation-delay: 400ms; }
        .delay-500 { animation-delay: 500ms; }
        .delay-600 { animation-delay: 600ms; }
        .delay-700 { animation-delay: 700ms; }
        .delay-800 { animation-delay: 800ms; }
        .delay-900 { animation-delay: 900ms; }
        .delay-1000 { animation-delay: 1000ms; }
      `}</style>
    </div>
  );
};

export default Logo;