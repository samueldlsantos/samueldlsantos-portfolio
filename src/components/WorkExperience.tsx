import { Experience } from "../types"
import WorkItem from "./WorkItem"

type WorkExperienceProps = {
  experiences: Experience[]
}

const WorkExperience = ({experiences} : WorkExperienceProps) => {
  return (
    <div className="max-w-6xl mx-3 md:mx-4 lg:mx-5 xl:mx-auto mt-20">
        <h2 className="text-bluechill-50 text-center text-4xl font-bold mb-10">Experiencia laboral</h2>
        {experiences.length > 0 ? experiences.map((experience) => 
        <WorkItem key={experience.id} experience={experience}/>
        ):
        <p className="text-bluechill-50 font-bold text-center">No hay datos para mostrar</p>
      }
    </div>
  )
}

export default WorkExperience