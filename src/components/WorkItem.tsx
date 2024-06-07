import { GoDotFill } from "react-icons/go";
import { Experience } from "../types";

type WorkItemProps = {
  experience: Experience;
};

const WorkItem = ({ experience }: WorkItemProps) => {
  return (
    <div className="border-l-4 border-primary p-5 flex md:gap-5 lg:gap-36 flex-col md:flex-row md:items-center md:pb-12 relative transition ease-in-out hover:-translate-y-1 hover:scale-105">
      <div className=" mt-10 md:mt-0 md:w-1/2 lg:w-1/3">
        <p className="text-primary  font-bold text-2xl rounded-md">
          {experience.role}
        </p>
        <div className="relative">
          <div className="animate-pulse absolute -left-8 text-textBase text-xl">
            <GoDotFill />
          </div>
          <p className="text-textBase font-bold">{experience.company}</p>
        </div>
        <div className="absolute top-0 -left-1 bg-primary  px-2 text-textBase rounded-md">
          <p>{experience.year}</p>
        </div>
      </div>
      <div className=" text-textBase shadow mt-3 md:w-1/2 md:mt-0 lg:w-2/3 backdrop-blur bg-backdrop p-5 w-full h-full rounded">
        {experience.description}
      </div>
    </div>
  );
};

export default WorkItem;
