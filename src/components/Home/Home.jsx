import React from "react";

const Home = () => {
  return (
    <section
      id="home"
      className="h-screen flex flex-col items-center justify-center text-center text-gray-800 relative bg-cover bg-center px-6"
      style={{
        backgroundImage:
          "url('https://raw.githubusercontent.com/IsratJahanR/portfolio/main/static/images/background.avif')",
      }}
    >
      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-white bg-opacity-80"></div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto">
        <p className="text-lg mb-2 opacity-0 animate-fadeInUp delay-100">
          Hi, This is
        </p>

        <h1 className="text-5xl sm:text-6xl font-extrabold tracking-wide text-green-700 opacity-0 animate-fadeInUp delay-200">
          Israt Jahan Reshma
        </h1>

        <h2 className="text-2xl sm:text-3xl mt-4 font-semibold italic tracking-wide text-green-600 opacity-0 animate-fadeInUp delay-300">
          A Passionate Competitive Programmer
        </h2>
      </div>

      <p className="mt-6 text-base sm:text-lg max-w-3xl leading-relaxed opacity-0 animate-fadeInUp delay-400 mb-8">
        🚀 I am a dedicated and enthusiastic CSE student at{" "}
        <span className="font-bold text-green-500">GSTU</span>, with a strong
        foundation in{" "}
        <span className="text-green-600 font-semibold">
          Data Structures & Algorithms
        </span>
        . I have a keen interest in{" "}
        <span className="font-semibold text-green-700">
          Python, Backend Development, Django, and ML/AI
        </span>
        , continuously refining my skills in solving complex problems and
        building scalable applications.
      </p>

      <div>
        <a
          href="#contact"
          className="absolute bottom-5 left-1/2 transform -translate-x-1/2 md:bottom-2 md:right-10 md:left-auto px-6 md:px-8 py-3 md:py-4 bg-green-500 text-white font-bold text-lg rounded-full shadow-lg hover:bg-green-600 hover:-translate-y-1 hover:scale-105 transition-all duration-300 ease-in-out animate-bounce"
        >
          🚀 Let's Connect!
        </a>
      </div>
    </section>
  );
};

export default Home;
