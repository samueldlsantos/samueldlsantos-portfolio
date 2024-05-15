import { FaBookmark } from "react-icons/fa6";

const WorkItem = () => {
  return (
    <div className="border-l-4 border-blue-600 p-5 flex gap-5 md:gap-36 flex-col md:flex-row relative">
        <div className="absolute top-10 -left-2.5 text-white ">
            <FaBookmark  />
        </div>
      <div className=" md:w-1/3">
        <p className="text-white bg-blue-600 font-bold text-2xl rounded-md px-2">
          Desarrollador .NET
        </p>
        <p className="text-white font-bold">Johnson Controls</p>
        <p className="text-white">2023</p>
      </div>
      <div className="text-white md:w-2/3">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum, deserunt? Modi odio et nam iste cum perspiciatis quibusdam eligendi repudiandae id corrupti suscipit, totam rerum accusamus esse sequi. Molestias, officia!
      </div>
    </div>
  );
};

export default WorkItem;
