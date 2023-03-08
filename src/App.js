import Home from "./components/Home.js";
import Navbar from "./components/Navbar.js";
import About from "./components/About.js";
import Skills from "./components/Skills.js";
import Work from "./components/Work.js";
import AOS from "aos";
import "aos/dist/aos.css";
import Education from "./components/Education.js";
import { useEffect } from "react";
function App() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div>
      <Navbar />
      <Home />
      <Skills />
      <Work />
      <Education />
    </div>
  );
}

export default App;
