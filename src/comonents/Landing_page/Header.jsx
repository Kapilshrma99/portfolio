import React, { useEffect, useState } from 'react';
import illustration from '../../assets/profile.jpg';
import Logo from './Logo';

const Header = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Animation trigger on component mount
  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Mouse tracking for interactive effects
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const textLines = [
    "Hi 👋,",
    "My name is Kapil",
    "I build things for the web."
  ];

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating Orbs */}
        <div 
          className="absolute w-72 h-72 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-3xl animate-float"
          style={{
            top: '10%',
            left: '10%',
            transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`,
          }}
        ></div>
        <div 
          className="absolute w-96 h-96 bg-gradient-to-r from-purple-400/15 to-pink-400/15 rounded-full blur-3xl animate-float-delayed"
          style={{
            bottom: '10%',
            right: '10%',
            transform: `translate(-${mousePosition.x * 0.015}px, -${mousePosition.y * 0.015}px)`,
          }}
        ></div>
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 w-full flex flex-col-reverse md:flex-row items-center justify-around px-6 md:px-16 py-6 md:py-12 sm:py-2 gap-8 min-h-screen">
        
        {/* Left Side - Text Content */}
        <div className={`w-full md:w-1/2 text-center md:text-left transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          
          {/* Animated Text Lines */}
          <div className="space-y-2 mb-6">
            {textLines.map((line, index) => (
              <div
                key={index}
                className={`transition-all duration-1000 delay-${index * 200} ${
                  isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
                }`}
              >
                {index === 1 ? (
                  <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                    My name is{' '}
                    <span className="relative inline-block">
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 animate-gradient-x">
                        Kapil
                      </span>
                      {/* Animated underline */}
                      <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-blue-600 to-purple-600 transform scale-x-0 animate-scale-x origin-left"></span>
                    </span>
                  </h1>
                ) : (
                  <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-gray-800">
                    {line}
                  </h1>
                )}
              </div>
            ))}
          </div>

          {/* Description */}
          <div className={`transition-all duration-1000 delay-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
          }`}>
            <p className="text-base md:text-lg lg:text-xl text-gray-600 leading-relaxed mb-8 max-w-2xl mx-auto md:mx-0">
              I'm a frontend developer passionate about building{' '}
              <span className="text-blue-600 font-semibold">responsive</span> and{' '}
              <span className="text-purple-600 font-semibold">engaging</span> web experiences.
            </p>
          </div>

          {/* Action Buttons */}
          <div className={`flex flex-col sm:flex-row gap-4 justify-center md:justify-start transition-all duration-1000 delay-900 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
          }`}>
            <button className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-full hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-blue-500/25">
              <span className="flex items-center justify-center gap-2">
                View My Work
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </button>
            
            <button className="px-8 py-4 border-2 border-gray-300 text-gray-700 font-semibold rounded-full hover:border-blue-500 hover:bg-blue-50 hover:text-blue-600 transform hover:scale-105 transition-all duration-300">
              Download CV
            </button>
          </div>

          {/* Social Stats */}
          <div className={`flex gap-8 justify-center md:justify-start mt-12 transition-all duration-1000 delay-1100 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
          }`}>
            {[
              { number: '50+', label: 'Projects' },
              { number: '20+', label: 'Clients' },
              { number: '3+', label: 'Years Exp' }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-gray-800">{stat.number}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side - Profile Image */}
        <div className={`relative group transition-all duration-1000 delay-500 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          
          {/* Main Image Container */}
          <div className="relative w-[250px] sm:w-[300px] md:w-[350px] lg:w-[400px] aspect-square">
            
            {/* Animated Border Rings */}
            <div className="absolute inset-0 rounded-full border-4 border-gradient-to-r from-blue-500 to-purple-500 animate-spin-slow opacity-20"></div>
            <div className="absolute inset-2 rounded-full border-2 border-gradient-to-r from-purple-500 to-blue-500 animate-spin-reverse opacity-30"></div>
            
            {/* Main Image */}
            <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white shadow-2xl group-hover:shadow-blue-500/25 transition-all duration-500 transform group-hover:scale-105">
              <img
                src={illustration}
                alt="Kapil profile"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              
              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-blue-600/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full animate-bounce shadow-lg"></div>
            <div className="absolute -bottom-6 -left-6 w-6 h-6 bg-gradient-to-r from-green-400 to-blue-500 rounded-full animate-pulse shadow-lg"></div>
            <div className="absolute top-1/4 -left-8 w-4 h-4 bg-gradient-to-r from-pink-400 to-purple-500 rounded-full animate-ping"></div>
          </div>

          {/* Skill Badges */}
          <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 flex gap-2">
            {['React', 'JS', 'CSS'].map((skill, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-white/90 backdrop-blur-sm text-xs font-semibold text-gray-700 rounded-full shadow-lg border border-gray-200/50"
                style={{ animationDelay: `${index * 0.2 + 1.2}s` }}
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Custom Styles */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-30px) rotate(-180deg); }
        }
        
        @keyframes gradient-x {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        @keyframes scale-x {
          0% { transform: scaleX(0); }
          100% { transform: scaleX(1); }
        }
        
        @keyframes spin-slow {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        
        @keyframes spin-reverse {
          0% { transform: rotate(360deg); }
          100% { transform: rotate(0deg); }
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .animate-float-delayed {
          animation: float-delayed 8s ease-in-out infinite;
        }
        
        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradient-x 3s ease infinite;
        }
        
        .animate-scale-x {
          animation: scale-x 0.8s ease-out 0.5s forwards;
        }
        
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
        
        .animate-spin-reverse {
          animation: spin-reverse 15s linear infinite;
        }
        
        .bg-grid-pattern {
          background-image: 
            linear-gradient(rgba(0,0,0,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,0,0,0.1) 1px, transparent 1px);
          background-size: 50px 50px;
        }
        
        .delay-200 { animation-delay: 0.2s; }
        .delay-400 { animation-delay: 0.4s; }
        .delay-500 { animation-delay: 0.5s; }
        .delay-700 { animation-delay: 0.7s; }
        .delay-900 { animation-delay: 0.9s; }
        .delay-1100 { animation-delay: 1.1s; }
      `}</style>
    </div>
  );
};

export default Header;