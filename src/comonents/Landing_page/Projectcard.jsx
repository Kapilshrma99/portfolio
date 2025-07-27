import React, { useState } from 'react';
import { FaEye, FaCode, FaGithub, FaExternalLinkAlt, FaStar, FaHeart } from 'react-icons/fa';

const ProjectCard = ({ title, image, description, techStack, Live, code }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isLiked, setIsLiked] = useState(false);

  return (
    <div 
      className="group relative max-w-sm bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-105 border border-gray-100"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Container */}
      <div className="relative overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover transition-transform duration-700 group-hover:scale-110"
        />
        
        {/* Image Overlay */}
        <div className={`absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent transition-opacity duration-500 ${
          isHovered ? 'opacity-100' : 'opacity-0'
        }`}></div>
        
        {/* Floating Action Buttons */}
        <div className={`absolute top-4 right-4 flex flex-col gap-2 transition-all duration-500 ${
          isHovered ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'
        }`}>
          <button
            onClick={() => setIsLiked(!isLiked)}
            className={`w-10 h-10 rounded-full flex items-center justify-center backdrop-blur-md border border-white/20 transition-all duration-300 ${
              isLiked 
                ? 'bg-red-500 text-white' 
                : 'bg-white/20 text-white hover:bg-white/30'
            }`}
          >
            <FaHeart className="w-4 h-4" />
          </button>
          
          <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md border border-white/20 flex items-center justify-center text-white">
            <FaStar className="w-4 h-4" />
          </div>
        </div>

        {/* Quick Preview Overlay */}
        <div className={`absolute inset-0 flex items-center justify-center transition-all duration-500 ${
          isHovered ? 'opacity-100' : 'opacity-0'
        }`}>
          <div className="flex gap-3">
            <a
              href={Live}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-white/20 backdrop-blur-md border border-white/30 rounded-full text-white font-medium hover:bg-white/30 transition-all duration-300 flex items-center gap-2 transform hover:scale-105"
            >
              <FaExternalLinkAlt className="w-3 h-3" />
              Live
            </a>
            <a
              href={code}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-white/20 backdrop-blur-md border border-white/30 rounded-full text-white font-medium hover:bg-white/30 transition-all duration-300 flex items-center gap-2 transform hover:scale-105"
            >
              <FaGithub className="w-3 h-3" />
              Code
            </a>
          </div>
        </div>

        {/* Gradient Border */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      </div>

      {/* Content */}
      <div className="p-6 relative">
        {/* Title */}
        <div className="mb-3">
          <h2 className="text-xl font-bold text-gray-900 mb-1 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300">
            {title}
          </h2>
          <div className="w-12 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
        </div>

        {/* Description */}
        <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
          {description}
        </p>

        {/* Tech Stack */}
        <div className="mb-5">
          <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">
            Tech Stack
          </p>
          <div className="flex flex-wrap gap-2">
            {techStack.map((tech, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-gradient-to-r from-blue-50 to-purple-50 text-blue-700 text-xs font-medium rounded-full border border-blue-200/50 hover:from-blue-100 hover:to-purple-100 transition-all duration-300 cursor-default"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center justify-between gap-3">
          <a
            href={Live}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white text-sm font-semibold rounded-xl hover:from-blue-600 hover:to-blue-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-blue-500/25"
          >
            <FaEye className="w-4 h-4" />
            Live Preview
          </a>
          
          <a
            href={code}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-gray-800 text-white text-sm font-semibold rounded-xl hover:bg-gray-900 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-gray-800/25"
          >
            <FaCode className="w-4 h-4" />
            View Code
          </a>
        </div>

        {/* Status Indicator */}
        <div className="absolute top-6 right-6">
          <div className="flex items-center gap-1">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-xs text-gray-500 font-medium">Live</span>
          </div>
        </div>
      </div>

      {/* Hover Glow Effect */}
      <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
      
      {/* Corner Decoration */}
      <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-blue-500/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      
      {/* Bottom Shine Effect */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

      {/* CSS for line-clamp */}
      <style jsx>{`
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
};

export default ProjectCard;