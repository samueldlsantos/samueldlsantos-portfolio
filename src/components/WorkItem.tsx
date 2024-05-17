import { GoDotFill } from "react-icons/go";
import { Experience } from "../types";

type WorkItemProps = {
  experience: Experience;
};

const WorkItem = ({ experience }: WorkItemProps) => {
  return (
    <div className="border-l-4 border-blue-500/50 p-5 flex md:gap-5 lg:gap-36 flex-col md:flex-row md:items-center md:pb-12 relative">
      <div className="md:w-1/2 lg:w-1/3">
        <p className="text-blue-600  font-bold text-2xl rounded-md">
          {experience.role}
        </p>
        <div className="relative">
          <div className="animate-pulse absolute -left-8 text-white text-xl">
            <GoDotFill />
          </div>
          <p className="text-white font-bold">{experience.company}</p>
        </div>
        <div className="absolute top-0 -left-1 bg-blue-600  px-2 text-white rounded-md">
          <p>{experience.year}</p>
        </div>
      </div>
      <div className="text-white mt-3 md:w-1/2 md:mt-0 lg:w-2/3">
        {experience.description}
      </div>
    </div>
  );
};

export default WorkItem;
