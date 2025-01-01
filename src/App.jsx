import { BrowserRouter } from "react-router-dom";

import { About, Contact, Experience, Navbar } from "./components";
import Certifications from "./components/Certifications";
import Education from "./components/Education";
import Skills from "./components/Skills";

const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        <Navbar />
        <About />
        <Skills />
        <Experience />
        <Education />
        <Certifications />
        <Contact />
        <div className="flex absolute items-center justify-center bottom-2 right-2">
          <span className="text-secondary text-right text-xs mr-1">Made with</span>
          <span className="text-right text-xs">❤️</span>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
