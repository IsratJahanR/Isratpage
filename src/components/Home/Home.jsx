import React from 'react';
import backgroundImage from '/assets/background.avif'; 


const Home = () => {
  return (
    <div
      id="home"
      className="h-screen flex flex-col items-center justify-center text-center text-gray-800 relative bg-cover bg-center bg-black"
      
    >
      {/* Overlay for better readability */}
      <div className="absolute inset-0 bg-white bg-opacity-80"></div>

      {/* Content */}
      <div className="relative z-10">
        {/* Small Intro Text */}
        <p className="text-lg mb-2 opacity-0 animate-fadeInUp delay-100">Hi, This is</p>

        {/* Name with Fancy Animation */}
        <h1 className="text-6xl font-extrabold tracking-wide text-green-700 opacity-0 animate-fadeInUp delay-200">
          Israt Jahan Reshma
        </h1>

        {/* Subtitle */}
        <h2 className="text-3xl mt-4 font-semibold italic tracking-wide text-green-600 opacity-0 animate-fadeInUp delay-300">
          A Passionate Competitive Programmer
        </h2>

        {/* Description */}
        <p className="mt-6 text-lg max-w-3xl leading-relaxed opacity-0 animate-fadeInUp delay-400">
          🚀 I am a dedicated and enthusiastic CSE student at 
          <span className="font-bold text-green-500"> GSTU</span>,
          with a strong foundation in
          <span className="text-green-600 font-semibold"> Data Structures & Algorithms</span>.
          I have a keen interest in
          <span className="font-semibold text-green-700">Python, Backend Development, Django, and ML/AI</span>,
          continuously refining my skills in solving complex problems and building scalable applications.
        </p>
      </div>

      {/* Call-to-Action Button with Continuous Animation */}
      <a
        href="#contact"
        className="absolute right-10 bottom-10 px-8 py-4 bg-green-500 text-white font-bold text-lg rounded-full shadow-lg  
        hover:bg-green-600 hover:-translate-y-1 hover:scale-105 transition-all duration-300 ease-in-out 
        animate-bounce"
      >
        🚀 Let's Connect!
      </a>
    </div>
  );
};

export default Home;
