import { useState } from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, Twitter, Download, Code, Palette, Zap, Users, Award, Coffee } from 'lucide-react';
import image from '../assets/profile.jpg'; // Replace with your image path
export default function About() {
  const [activeTab, setActiveTab] = useState('story');

  const skills = [
    { name: 'React', level: 90, color: 'bg-blue-500' },
    { name: 'JavaScript', level: 95, color: 'bg-yellow-500' },
    { name: 'Node.js', level: 85, color: 'bg-green-500' },
    { name: 'Python', level: 80, color: 'bg-blue-600' },
    { name: 'UI/UX Design', level: 88, color: 'bg-purple-500' },
    { name: 'MongoDB', level: 75, color: 'bg-green-600' }
  ];

  const achievements = [
    { icon: <Award className="w-6 h-6" />, title: "10+ Projects", desc: "Successfully completed" },
    { icon: <Users className="w-6 h-6" />, title: "5+ Clients", desc: "Satisfied" },
    { icon: <Coffee className="w-6 h-6" />, title: "1+ Years", desc: "experience" },
    { icon: <Zap className="w-6 h-6" />, title: "99%", desc: "Client satisfaction rate" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Profile Image */}
            <div className="relative group">
              <div className="w-64 h-64 rounded-full overflow-hidden bg-gradient-to-br from-blue-500 to-purple-600 p-1">
                <img src={image} className='scale-110'/>
                {/* <div className="w-full h-full rounded-full bg-white flex items-center justify-center text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-blue-500 to-purple-600">
                  K
                </div> */}
              </div>
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full blur opacity-30 group-hover:opacity-50 transition-opacity"></div>
            </div>

            {/* Hero Content */}
            <div className="flex-1 text-center lg:text-left">
              <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6">
                Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Kapil</span>
              </h1>
              <p className="text-xl text-gray-300 mb-4">Full-Stack Developer & UI/UX Designer</p>
              <p className="text-gray-400 text-lg mb-8 max-w-2xl">
                I craft digital experiences that blend beautiful design with powerful functionality. 
                Passionate about creating solutions that make a difference.
              </p>
              
              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button onClick={()=>{
                     const link = document.createElement("a");
  link.href = "/Kapil_MERN.pdf"; // must be inside the public folder
  link.download = "Kapil_Sharma_Resume.pdf";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
                }} className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-3 rounded-full hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 flex items-center gap-2 font-semibold">
                  <Download className="w-5 h-5" />
                  Download Resume
                </button>
                <button onClick={() => {
  window.location.href = "mailto:kapilsharma09311@gmail.com?subject=Inquiry%20About%20Your%20Services&body=Hi,%0A%0AI am interested in your services. Please get back to me.%0A%0AThanks!";
}} className="border border-gray-600 text-gray-300 px-8 py-3 rounded-full hover:bg-gray-800 transition-all duration-300 flex items-center gap-2">
                  <Mail className="w-5 h-5" />
                  Let's Talk
                </button>
              </div>

              {/* Social Links */}
              {/* <div className="flex gap-4 mt-8 justify-center lg:justify-start">
                {[Github, Linkedin, Twitter].map((Icon, index) => (
                  <div key={index} className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-600 transition-all duration-300 cursor-pointer group">
                    <Icon className="w-5 h-5 text-gray-400 group-hover:text-white" />
                  </div>
                ))}
              </div> */}
            </div>
          </div>
        </div>
      </section>

      {/* About Content */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 lg:p-12">
            {/* Tab Navigation */}
            <div className="flex flex-wrap gap-4 mb-8 justify-center">
              {[
                { id: 'story', label: 'My Story', icon: <Users className="w-4 h-4" /> },
                { id: 'skills', label: 'Skills', icon: <Code className="w-4 h-4" /> },
                { id: 'journey', label: 'Journey', icon: <Zap className="w-4 h-4" /> }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 flex items-center gap-2 ${
                    activeTab === tab.id 
                      ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg' 
                      : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                  }`}
                >
                  {tab.icon}
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Tab Content */}
            <div className="text-gray-300">
              {activeTab === 'story' && (
                <div className="space-y-6 animate-fadeIn">
                  <h2 className="text-3xl font-bold text-white mb-6">About Me</h2>
                  <p className="text-lg leading-relaxed">
                    I'm a passionate full-stack developer with over 1 years of experience creating digital solutions 
                    that matter. My journey began with curiosity about how websites work, and it evolved into a 
                    deep love for crafting experiences that users genuinely enjoy.
                  </p>
                  <p className="text-lg leading-relaxed">
                    I specialize in modern web technologies, with expertise in React,Next js, Node.js, and cloud platforms. 
                    What sets me apart is my ability to bridge the gap between technical implementation and user 
                    experience design.
                  </p>
                  <p className="text-lg leading-relaxed">
                    When I'm not coding, you'll find me exploring new technologies, contributing to open-source 
                    projects, or sharing knowledge with the developer community. I believe in continuous learning 
                    and staying ahead of industry trends.
                  </p>
                  
                  {/* Contact Info */}
                  <div className="grid md:grid-cols-3 gap-4 mt-8">
                    <div className="flex items-center gap-3 p-4 bg-gray-800/50 rounded-lg">
                      <Mail className="w-5 h-5 text-blue-400" />
                      <span>kapilsharma09311@email.com</span>
                    </div>
                    <div className="flex items-center gap-3 p-4 bg-gray-800/50 rounded-lg">
                      <Phone className="w-5 h-5 text-green-400" />
                      <span>+91 7678421896</span>
                    </div>
                    <div className="flex items-center gap-3 p-4 bg-gray-800/50 rounded-lg">
                      <MapPin className="w-5 h-5 text-purple-400" />
                      <span>Delhi, India</span>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'skills' && (
                <div className="animate-fadeIn">
                  <h2 className="text-3xl font-bold text-white mb-8">Technical Skills</h2>
                  <div className="grid lg:grid-cols-2 gap-8">
                    <div>
                      {skills.map((skill, index) => (
                        <div key={index} className="mb-6">
                          <div className="flex justify-between mb-2">
                            <span className="font-semibold">{skill.name}</span>
                            <span className="text-gray-400">{skill.level}%</span>
                          </div>
                          <div className="w-full bg-gray-700 rounded-full h-3">
                            <div 
                              className={`h-3 rounded-full ${skill.color} transition-all duration-1000`}
                              style={{ width: `${skill.level}%` }}
                            ></div>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                          <Code className="w-5 h-5 text-blue-400" />
                          Frontend
                        </h3>
                        <p className="text-gray-400">React, Next.js, TypeScript, Tailwind CSS, SASS</p>
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                          <Zap className="w-5 h-5 text-green-400" />
                          Backend
                        </h3>
                        <p className="text-gray-400">Node.js, Express, Python, Django, REST APIs</p>
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                          <Palette className="w-5 h-5 text-purple-400" />
                          Design
                        </h3>
                        <p className="text-gray-400">Figma, Adobe XD, UI/UX Design, Prototyping</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'journey' && (
                <div className="animate-fadeIn">
                  <h2 className="text-3xl font-bold text-white mb-8">My Journey</h2>
                  {/* <div className="space-y-8">
                    <div className="border-l-4 border-blue-500 pl-6">
                      <h3 className="text-xl font-semibold text-white">Senior Full-Stack Developer</h3>
                      <p className="text-purple-400 mb-2">2022 - Present</p>
                      <p className="text-gray-400">Leading development of complex web applications, mentoring junior developers, and implementing best practices for scalable solutions.</p>
                    </div>
                    <div className="border-l-4 border-purple-500 pl-6">
                      <h3 className="text-xl font-semibold text-white">Full-Stack Developer</h3>
                      <p className="text-blue-400 mb-2">2021 - 2022</p>
                      <p className="text-gray-400">Developed responsive web applications using React and Node.js, collaborated with design teams to create intuitive user interfaces.</p>
                    </div> */}
                    <div className="border-l-4 border-green-500 pl-6">
                      <h3 className="text-xl font-semibold text-white">Junior Developer(self employed)</h3>
                      <p className="text-green-400 mb-2">2024 - 2025</p>
                      <p className="text-gray-400">Started my professional journey, learned modern web technologies, and contributed to various client projects.</p>
                    </div>
                  </div>
           
              )}
            </div>
          </div>

          {/* Achievements */}
          <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 text-center hover:bg-white/20 transition-all duration-300">
                <div className="text-blue-400 mb-4 flex justify-center">
                  {achievement.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">{achievement.title}</h3>
                <p className="text-gray-400">{achievement.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.6s ease-out;
        }
      `}</style>
    </div>
  );
}