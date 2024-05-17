import { FaBookmark } from "react-icons/fa6";
import { Experience } from "../types";

type WorkItemProps = {
  experience: Experience
}

const WorkItem = ({experience}: WorkItemProps) => {
  return (
    <div className="border-l-4 border-blue-600 p-5 flex gap-5 lg:gap-36 flex-col md:flex-row md:items-center relative">
        
      <div className=" md:w-1/2 lg:w-1/3">
        <p className="text-blue-600  font-bold text-2xl rounded-md">{experience.role}</p>
        <div className="relative">
        <div className="absolute top-1 -left-8 text-white ">
            <FaBookmark  />
        </div>
        <p className="text-white font-bold">{experience.company}</p>

        </div>
        <p className="absolute bg-blue-600 top-0 -left-1 px-2 text-white text-center rounded-md">{experience.year}</p>
      </div>
      <div className="text-white mt-5 md:w-1/2 md:mt-0 lg:w-2/3">
        {experience.description}
      </div>
    </div>
  );
};

export default WorkItem;
