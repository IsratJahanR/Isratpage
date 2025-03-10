import React from 'react';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-cust text-green-900 shadow-md py-4 z-50">
        <div className="container mx-auto flex justify-between items-center px-6">
            <a href="#home" className="flex items-center space-x-2">
                <img src="/assets/images/icon.jpg" alt="Logo" className="h-12 w-12 rounded-full" />
            </a>
            <ul className="flex space-x-6">
                <li><a href="#home" className="hover:text-green-500">Home</a></li>
                <li><a href="#about" className="hover:text-green-500">About</a></li>
                <li><a href="#education" className="hover:text-green-500">Education</a></li>
                <li><a href="#skills" className="hover:text-green-500">Skills</a></li>
                <li><a href="#projects" className="hover:text-green-500">Projects</a></li>
                <li><a href="#research" className="hover:text-green-500">Research</a></li>
                <li><a href="#problem-solving" className="hover:text-green-500">Problem Solving</a></li>
                <li><a href="#blogs" className="hover:text-green-500">Blogs</a></li>
                <li><a href="#contact" className="hover:text-green-500">Contact</a></li>
            </ul>
        </div>
    </nav>
  );
};

export default Navbar;
