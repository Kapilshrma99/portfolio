import { FaEye, FaCode } from 'react-icons/fa';

const ProjectCard = ({ title, image, description, techStack, Live, code }) => {
  return (
    <div className="max-w-xs bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      {/* Image */}
      <img
        src={image}
        alt={title}
        className="w-full h-44 object-cover"
      />

      {/* Content */}
      <div className="p-4">
        <h2 className="text-lg font-semibold mb-2">{title}</h2>
        <p className="text-sm text-gray-600">{description}</p>

        {/* Tech Stack */}
        <p className="text-sm mt-4">
          <span className="font-medium text-gray-800">Tech stack:</span>{' '}
          {techStack.map((tech, index) => (
            <span className="text-blue-600 mr-2" key={index}>{tech}</span>
          ))}
        </p>

        {/* Buttons */}
        <div className="flex items-center justify-between mt-4 text-sm font-medium cursor-pointer" >
          <a
            href={Live}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-800 hover:text-blue-600"
          >
            <FaEye /> Live Preview
          </a>
          <a
            href={code}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-800 hover:text-blue-600"
          >
            <FaCode /> View Code
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
