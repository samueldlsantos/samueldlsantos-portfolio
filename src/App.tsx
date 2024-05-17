import About from "./components/About";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Portfolio from "./components/Portfolio";
import WorkExperience from "./components/WorkExperience";
import { personalInformation, experiences, projects } from "./data";

function App() {
  return (
    <>
    <div className=" fixed top-0 -z-10 h-full w-full">
        <div className="absolute top-0 z-[-2] h-full w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
      </div>

      <Header />
      <Hero name={personalInformation.name} />
      <About introduction={personalInformation.introduction} />
      <WorkExperience experiences={experiences}/>
      <Portfolio projects={projects}/>
      <Footer />
    </>
      
  );
}

export default App;
