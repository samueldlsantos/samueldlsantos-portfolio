import { useState } from "react";
import About from "./components/About";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Portfolio from "./components/Portfolio";
import Skills from "./components/Skills";
import WorkExperience from "./components/WorkExperience";
import { personalInformation, experiences, projects } from "./data";

function App() {
  const [theme, setTheme] = useState(true);

  return (
    <div className={`theme-${theme ? "light" : "dark"}`}>
      <div className=" fixed top-0 -z-10 h-full w-full">
        <div className="absolute top-0 z-[-2] h-full w-screen bg-bgPrimary"></div>
        <div className="absolute inset-0 flex items-center justify-center z-[-2]">
        <div className="relative h-[40rem] w-[40rem]">
            <div className="background-1 absolute top-0 -left-32 w-[40rem] h-[40rem] w- bg-blue-700 rounded-full mix-blend-multiply blur-3xl opacity-20"></div>
            <div className="background-2 absolute top-0 left-32 w-[40rem] h-[40rem] bg-sky-300 rounded-full mix-blend-multiply blur-3xl opacity-20"></div>
            <div className="background-3 absolute top-32 left-0 w-[40rem] h-[40rem] bg-cyan-500 rounded-full mix-blend-multiply blur-3xl opacity-20"></div>
        </div>
    </div>
      </div>
      <Header theme={theme} setTheme={setTheme} />
      <Hero name={personalInformation.name} />
      <About introduction={personalInformation.introduction} />
      <Skills />
      <WorkExperience experiences={experiences} />
      <Portfolio projects={projects} />
      <Footer />

      
    </div>
  );
}

export default App;
