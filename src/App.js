import React from "react";
import About from "./Components/About";
import Navbar from "./Components/Navbar";
import Skills from "./Components/Skills";
import Education from "./Components/Education";
import Projects from "./Components/Projects";
import Certificate from "./Components/Certificate";
import Contact from "./Components/Contact";

function App() {
  return (
    <div className="container">
      <Navbar />
      <About />
      <Skills />
      <Education />
      <Certificate />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
