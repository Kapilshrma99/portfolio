import React from 'react'
import ProjectCard from './Projectcard'
import i1 from "../../assets/Rectangle 12.png"
import i2 from "../../assets/Rectangle 13.png"
import i3 from "../../assets/Rectangle 14.png"
import i4 from "../../assets/Rectangle 4.png"
import i5 from "../../assets/Rectangle 6.png"
import i6 from "../../assets/Rectangle 8.png"
const Projects = () => {

    const project=[
        {
            title:"Landing Page For Educational Institute",
            image:i1,
            description:"A static landing page for an educational institute showcasing offerings and an Apply Now CTA.",
            TechStack:["HTML" ,"Tailwind CSS","JavaScript",'Hosting', "github","mongodb", "express","nodejs"],
            Live:"https://education-website-smoky.vercel.app",
            code:"https://github.com/Kapilshrma99/education-website"
        },
        {
            title:"HireWise AI Resume Builder",
            image:i2,
            description:"A clean and responsive portfolio website built to showcase my skills, projects, resume, and contact details. Designed with a modern UI and optimized for recruiters, clients, and collaborators. It includes smooth navigation, mobile responsiveness, and live project links with GitHub integration.The goal of this portfolio is to highlight my full-stack and AI-based development work (like HireWise AI), freelancing services, and technical achievements in a clear, professional format.",
            TechStack:[ "React.js", "Tailwind CSS", "Vite", "React Router DOM","Verce"],
            Live:"https://hirewiseai-olive.vercel.app/",
            code:"https://github.com/Kapilshrma99/hirewiseai"
        },
        {
            title:"Gemini Clone",
            image:i3,
            description:"A Gemini AI-inspired clone that delivers a sleek, interactive chatbot UI using modern web technologies like React and Vite. Ideal as a portfolio project to demonstrate component architecture, user input handling, and frontend responsiveness",
            TechStack:["React.js","Styling",'API Integration',' Authentication & State Management'],
            Live:"https://gemini-clone-one-iota.vercel.app/",
            code:"https://github.com/Kapilshrma99/gemini-clone"
        },
        {
            title:"Proviz School of AI (Landing Page)",
            image:i4,
            description:"The Proviz School of AI landing page is a clean, responsive, and modern web interface designed to showcase an educational institute focused on Artificial Intelligence. Built with a minimal yet engaging design, the page aims to introduce the institute, highlight its offerings, and drive user applications through a clear “Apply Now” call-to-action.",
            TechStack:["HTML" ,"Tailwind CSS","JavaScript",'Hosting', "github", "mongodb", "express","nodejs"],
            Live:"https://provizai.netlify.app/",
            code:"https://github.com/Kapilshrma99/provizai"
        },
        {
            title:"Todo App",
            image:i5,
            description:"The Todo App is a simple and clean task management tool that lets users add, view, search, and delete their to-do items. It uses a simulated REST API (jsonplaceholder) to demonstrate real-world async operations like fetching data.A responsive and API-powered Todo List App built with HTML, Bootstrap, and JavaScript (ES6). Designed to demonstrate real-world UI behavior using async calls, pagination, and clean user interaction. Deployed seamlessly via Netlify.",
            TechStack:["HTML5","Bootstrap 5",'JavaScript (ES6)',"Netlify"],
            Live:"https://creative-kitsune-37c52e.netlify.app/",
            code:"https://github.com/Kapilshrma99/Todo_app"
        },
        {
            title:"Analog Clock",
            image:i6,
            description:"The Analog Clock project is a responsive, browser-based analog clock that accurately displays the current time using rotating hour, minute, and second hands. Built entirely with vanilla JavaScript, CSS, and HTML, this project demonstrates dynamic DOM manipulation and real-time rendering based on the system clock.",
            TechStack:["HTML5","CSS",'JavaScript'],
            Live:"https://analog-clock-o1735r8vs-kapilshrma99s-projects.vercel.app/",
            code:"https://github.com/Kapilshrma99/analog-clock"
        },
        {
            title:"Employee Attrition",
            image:i2,
            description:"Employee Attrition Prediction is a data-driven machine learning project that aims to predict whether an employee is likely to leave the organization based on various features such as job role, satisfaction level, income, and work environment.This project utilizes exploratory data analysis (EDA), feature engineering, and classification models to identify patterns and build a predictive system. The end goal is to help HR departments proactively manage talent retention.",
            TechStack:["Python ","Pandas",'NumPy','Matplotlib','Seaborn','Scikit-learn','Flask','	Jupyter Notebook'],
            Live:"https://employey-attritition.onrender.com/",
            code:"https://github.com/Kapilshrma99/employey_attritition"
        }
    ]
  return (
    <div className='my-12'>
      <div className="flex flex-col items-center py-4 px-4 text-center">
        <h1 className="font-bold text-2xl md:text-3xl">Projects</h1>
        <p className="font-medium text-sm md:text-base">
          Things I’ve built so far
        </p>
      </div>
    <div className='min-h-screen flex items-center justify-center bg-gray-100 p-6'>
      <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-6 '>
       {project.map((value, id) => (
        // console.log(value.TechStack)
  <ProjectCard
    key={id}
    title={value.title}
    image={value.image}
    description={value.description}
    techStack={value.TechStack}
    Live={value.Live}
    code={value.code}
  />
))}


      </div>
      </div>
    </div>
  )
}

export default Projects
