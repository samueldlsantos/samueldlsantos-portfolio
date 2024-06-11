import About from "./components/About";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Portfolio from "./components/Portfolio";
import Skills from "./components/Skills";
import WorkExperience from "./components/WorkExperience";
import { usePortfolio } from "./hooks/usePortfolio";

function App() {
  
  const { state } = usePortfolio();

  return (
    <div className={`theme-${state.theme}`}>
      <div className=" fixed top-0 -z-10 h-full w-full">
        <div className="absolute top-0 z-[-2] h-full w-screen bg-bgPrimary"></div>
        <div className="absolute inset-0 flex items-center justify-center z-[-2]">
          <div className="relative h-[40rem] w-[40rem]">
            <div className="absolute top-0 -left-32 w-[40rem] h-[40rem] w- bg-blue-700 rounded-full mix-blend-multiply blur-3xl opacity-20"></div>
            <div className="absolute top-0 left-32 w-[40rem] h-[40rem] bg-sky-300 rounded-full mix-blend-multiply blur-3xl opacity-20"></div>
            <div className="absolute top-32 left-0 w-[40rem] h-[40rem] bg-cyan-500 rounded-full mix-blend-multiply blur-3xl opacity-20"></div>
          </div>
        </div>
      </div>
      <Header />
      <Hero />
      <About />
      <Skills />
      <WorkExperience />
      <Portfolio />
      <Footer />
    </div>
  );
}

export default App;
