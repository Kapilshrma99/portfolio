import React, { useState, useEffect } from 'react';
import ProjectCard from './Projectcard';
import i1 from "../../assets/Rectangle 12.png";
import i2 from "../../assets/Rectangle 13.png";
import i3 from "../../assets/Rectangle 14.png";
import i4 from "../../assets/Rectangle 4.png";
import i5 from "../../assets/Rectangle 6.png";
import i6 from "../../assets/Rectangle 8.png";

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [filter, setFilter] = useState('All');
  const [visibleProjects, setVisibleProjects] = useState(6);

  const project = [
    {
      title: "Landing page gym trainer",
      image: i6,
      description: "This is a modern, high-performance website developed for a well eduacted gym trainer using Next.js. The project showcases a fully responsive design with fast loading speeds and SEO-friendly architecture.",
      TechStack: ["HTML", "Tailwind CSS", "JavaScript", "Hosting", "Github", "MongoDB", "Express", "Node.js","Next js"],
      Live: "https://gymtrainer-pi.vercel.app/",
      code: "https://github.com/Kapilshrma99/gymtrainer",
      category: "Frontend"
    },
    {
      title: "website For digital marketing agency",
      image: i1,
      description: "This is a modern, high-performance website developed for a fictional digital marketing agency using Next.js. The project showcases a fully responsive design with fast loading speeds and SEO-friendly architecture.",
      TechStack: ["HTML", "Tailwind CSS", "JavaScript", "Hosting", "Github", "MongoDB", "Express", "Node.js","Next js"],
      Live: "https://adkey.vercel.app/",
      code: "https://github.com/Kapilshrma99/adkey",
      category: "Frontend"
    },
    {
      title: "Landing Page For Educational Institute",
      image: i1,
      description: "A static landing page for an educational institute showcasing offerings and an Apply Now CTA.",
      TechStack: ["HTML", "Tailwind CSS", "JavaScript", "Hosting", "Github", "MongoDB", "Express", "Node.js"],
      Live: "https://education-website-smoky.vercel.app",
      code: "https://github.com/Kapilshrma99/education-website",
      category: "Frontend"
    },
    {
      title: "HireWise AI Resume Builder",
      image: i2,
      description: "A clean and responsive portfolio website built to showcase my skills, projects, resume, and contact details. Designed with a modern UI and optimized for recruiters, clients, and collaborators.",
      TechStack: ["React.js", "Tailwind CSS", "Vite", "React Router DOM", "Vercel"],
      Live: "https://hirewiseai-olive.vercel.app/",
      code: "https://github.com/Kapilshrma99/hirewiseai",
      category: "Full Stack"
    },
    {
      title: "Gemini Clone",
      image: i3,
      description: "A Gemini AI-inspired clone that delivers a sleek, interactive chatbot UI using modern web technologies like React and Vite.",
      TechStack: ["React.js", "Styling", "API Integration", "Authentication & State Management"],
      Live: "https://gemini-clone-one-iota.vercel.app/",
      code: "https://github.com/Kapilshrma99/gemini-clone",
      category: "AI/ML"
    },
    {
      title: "Proviz School of AI (Landing Page)",
      image: i4,
      description: "The Proviz School of AI landing page is a clean, responsive, and modern web interface designed to showcase an educational institute focused on Artificial Intelligence.",
      TechStack: ["HTML", "Tailwind CSS", "JavaScript", "Hosting", "Github", "MongoDB", "Express", "Node.js"],
      Live: "https://provizai.netlify.app/",
      code: "https://github.com/Kapilshrma99/provizai",
      category: "Frontend"
    },
    {
      title: "Todo App",
      image: i5,
      description: "A responsive and API-powered Todo List App built with HTML, Bootstrap, and JavaScript (ES6). Designed to demonstrate real-world UI behavior using async calls, pagination, and clean user interaction.",
      TechStack: ["HTML5", "Bootstrap 5", "JavaScript (ES6)", "Netlify"],
      Live: "https://creative-kitsune-37c52e.netlify.app/",
      code: "https://github.com/Kapilshrma99/Todo_app",
      category: "Frontend"
    },
    {
      title: "Analog Clock",
      image: i6,
      description: "The Analog Clock project is a responsive, browser-based analog clock that accurately displays the current time using rotating hour, minute, and second hands.",
      TechStack: ["HTML5", "CSS", "JavaScript"],
      Live: "https://analog-clock-o1735r8vs-kapilshrma99s-projects.vercel.app/",
      code: "https://github.com/Kapilshrma99/analog-clock",
      category: "Frontend"
    },
    {
      title: "Employee Attrition",
      image: i2,
      description: "Employee Attrition Prediction is a data-driven machine learning project that aims to predict whether an employee is likely to leave the organization based on various features.",
      TechStack: ["Python", "Pandas", "NumPy", "Matplotlib", "Seaborn", "Scikit-learn", "Flask", "Jupyter Notebook"],
      Live: "https://employey-attritition.onrender.com/",
      code: "https://github.com/Kapilshrma99/employey_attritition",
      category: "AI/ML"
    }
  ];

  const categories = ['All', 'Frontend', 'Full Stack', 'AI/ML'];

  const filteredProjects = filter === 'All' 
    ? project 
    : project.filter(proj => proj.category === filter);

  const displayedProjects = filteredProjects.slice(0, visibleProjects);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const loadMore = () => {
    setVisibleProjects(prev => prev + 3);
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-40 h-40 bg-gradient-to-r from-blue-400/10 to-purple-400/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-56 h-56 bg-gradient-to-r from-purple-400/10 to-pink-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-cyan-400/5 to-blue-400/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 py-16 px-4">
        {/* Header Section */}
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="inline-block">
            <h1 className="font-bold text-4xl md:text-5xl lg:text-6xl bg-gradient-to-r from-gray-800 via-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
              My Projects
            </h1>
            <div className="w-28 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-6 rounded-full"></div>
          </div>
          <p className="font-medium text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Things I've built so far - showcasing my journey in web development
          </p>
        </div>

        {/* Filter Buttons */}
        <div className={`flex flex-wrap justify-center gap-3 mb-12 transition-all duration-1000 delay-300 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          {categories.map((category, index) => (
            <button
              key={index}
              onClick={() => {
                setFilter(category);
                setVisibleProjects(6);
              }}
              className={`px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 transform hover:scale-105 ${
                filter === category
                  ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg'
                  : 'bg-white text-gray-600 hover:bg-gray-50 border border-gray-200 hover:border-blue-300 shadow-md'
              }`}
            >
              {category}
              <span className="ml-2 text-xs opacity-70">
                ({category === 'All' ? project.length : project.filter(p => p.category === category).length})
              </span>
            </button>
          ))}
        </div>

        {/* Projects Stats */}
        <div className={`grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mb-16 transition-all duration-1000 delay-500 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          {[
            { number: project.length, label: 'Total Projects' },
            { number: project.filter(p => p.category === 'Frontend').length, label: 'Frontend' },
            { number: project.filter(p => p.category === 'Full Stack').length, label: 'Full Stack' },
            { number: project.filter(p => p.category === 'AI/ML').length, label: 'AI/ML' }
          ].map((stat, index) => (
            <div key={index} className="text-center p-4 bg-white/50 backdrop-blur-sm rounded-2xl border border-white/20 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-1">
                {stat.number}
              </div>
              <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {displayedProjects.map((value, id) => (
              <div
                key={id}
                className={`transition-all duration-700 delay-${(id % 6) * 100} ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
              >
                <ProjectCard
                  title={value.title}
                  image={value.image}
                  description={value.description}
                  techStack={value.TechStack}
                  Live={value.Live}
                  code={value.code}
                />
              </div>
            ))}
          </div>

          {/* Load More Button */}
          {visibleProjects < filteredProjects.length && (
            <div className={`text-center mt-12 transition-all duration-1000 delay-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
              <button
                onClick={loadMore}
                className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-full hover:from-blue-600 hover:to-purple-600 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-blue-500/25"
              >
                Load More Projects
                <span className="ml-2">({filteredProjects.length - visibleProjects} remaining)</span>
              </button>
            </div>
          )}
        </div>

        {/* Call to Action */}
        <div className={`text-center mt-20 transition-all duration-1000 delay-900 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="bg-white/60 backdrop-blur-lg rounded-3xl p-8 max-w-4xl mx-auto border border-white/20 shadow-xl">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
              Interested in working together?
            </h2>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              I'm always open to discussing new opportunities and exciting projects. 
              Let's create something amazing together!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-full hover:from-blue-600 hover:to-purple-600 transform hover:scale-105 transition-all duration-300 shadow-lg">
                Start a Project
              </button>
              <button className="px-8 py-4 border-2 border-gray-300 text-gray-700 font-semibold rounded-full hover:border-blue-500 hover:bg-blue-50 hover:text-blue-600 transform hover:scale-105 transition-all duration-300">
                View Resume
              </button>
            </div>
          </div>
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
      `}</style>
    </div>
  );
};

export default Projects; 