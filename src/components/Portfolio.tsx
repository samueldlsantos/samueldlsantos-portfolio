import PortfolioItem from "./PortfolioItem"

const Portfolio = () => {
  return (
    <div className="max-w-6xl mx-3 md:mx-4 lg:mx-5 xl:mx-auto mt-10">
        <h2 className="text-white text-center text-4xl font-bold mb-10">Portafolio</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        <PortfolioItem />
        <PortfolioItem />
        <PortfolioItem />
        <PortfolioItem />

        </div>
      
    </div>
  )
}

export default Portfolio
