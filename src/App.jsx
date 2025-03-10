import styles from "./App.module.css";

import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";

// import { About } from "./components/About/About";
// import { Contact } from "./components/Contact/Contact";
// import { Experience } from "./components/Experience/Experience";
// import { Hero } from "./components/Hero/Hero";
// import { Projects } from "./components/Projects/Projects";

function App() {
  return (
    <div className="bg-gray-900 text-white">
      <Navbar />
      <Home />
      {/* <Hero />
      <About />
      <Experience />
      <Projects />
      <Contact /> */}
    </div>
  );
}

export default App;
