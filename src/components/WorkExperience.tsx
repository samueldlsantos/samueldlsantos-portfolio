import { usePortfolio } from "../hooks/usePortfolio"
import WorkItem from "./WorkItem"

const WorkExperience = () => {
  const { state } = usePortfolio();

  return (
    <div className="max-w-6xl mx-3 md:mx-4 lg:mx-5 xl:mx-auto mt-20">
        <h2 className="text-textBase text-center text-4xl font-bold mb-10">Experiencia laboral</h2>
        {state.experiences.length > 0 ? state.experiences.map((experience) => 
        <WorkItem key={experience.id} experience={experience}/>
        ):
        <p className="text-textBase font-bold text-center">No hay datos para mostrar</p>
      }
    </div>
  )
}

export default WorkExperience