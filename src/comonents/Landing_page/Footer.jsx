import { FaGithub, FaTwitter, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="w-full bg-white border-t border-gray-200 text-sm text-gray-800">
      {/* Top Section */}
      <div className="flex flex-col md:flex-row justify-around items-center px-6 py-4 gap-4">
        {/* Left: Logo */}
        <div className="text-xl font-semibold text-indigo-900">
          {/* <span className="font-mono">{'{ 007 }'}</span> */}
          <div className="text-sm font-bold text-gray-700">Kapil Sharma</div>
        </div>

        {/* Center: Contact Info */}
        <div className="text-center">
          <p>+91 7678421896</p>
          <p>kapilsharma09311@gmail.com</p>
        </div>

        {/* Right: Social Icons */}
        <div className="flex gap-4 text-indigo-900 text-xl">
          <a href="https://github.com/Kapilshrma99"><FaGithub /></a>
          <a href="https://x.com/Kapilsharma0112"><FaTwitter /></a>
          <a href="https://www.linkedin.com/in/kapil-sharma-developer"><FaLinkedin /></a>
        </div>
      </div>

      {/* Divider */}
      <hr className="border-gray-300 my-2" />

      {/* Bottom Navigation */}
      <div className="flex flex-col md:flex-row justify-around items-center px-6 py-3 gap-4">
        {/* Navigation Links */}
        <nav className="flex gap-4 text-gray-600 text-sm">
          <a href="/">Home</a>
          <a href="#">About</a>
          <a href="#">Technologies</a>
          <a href="#">Projects</a>
          <a href="#">Contact</a>
        </nav>

        {/* Attribution */}
        <p className="text-xs text-gray-500 text-center">
          Designed and built by <span className="text-indigo-700 font-medium">Kapil Sharma</span> with{' '}
          <span className="text-pink-500">Chai & Coffee</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
