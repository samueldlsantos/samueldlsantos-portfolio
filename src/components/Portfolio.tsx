import { usePortfolio } from "../hooks/usePortfolio";
import PortfolioItem from "./PortfolioItem"


const Portfolio = () => {
  const { state } = usePortfolio();

  return (
    <div className="max-w-6xl mx-3 md:mx-4 lg:mx-5 xl:mx-auto mt-20">
        <h2 className="text-textBase text-center text-4xl font-bold mb-10">Proyectos</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {
            state.projects.length > 0 ?
            state.projects.map((project) => 
                <PortfolioItem key={project.id} project={project}/>
            ):
            <p></p>
        }

        </div>
      
    </div>
  )
}

export default Portfolio
