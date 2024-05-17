import { ImGithub, ImRocket } from "react-icons/im";
import { Project } from "../types";

type PortfolioItemProps = {
  project: Project
}

const PortfolioItem = ({ project }: PortfolioItemProps) => {
  return (
    <div className="flex flex-col gap-4 rounded-lg backdrop-blur-lg bg-transparent py-5 px-4 border-4 border-blue-500/50 shadow-lg shadow-blue-500/20 hover:shadow-2xl hover:shadow-blue-500/75">
      <div className="flex-grow">
        <div className="mx-auto max-w-72">
          <img className="rounded-lg shadow-lg shadow-blue-500/20" src={project.image} />
        </div>
        <h3 className="text-white font-bold text-lg text-center">
          {project.title}
        </h3>
        <p className="text-white mt-5">{project.description}</p>
      </div>
      <div className="mt-5 flex justify-center gap-2">

        {project.urlGithub ?
          <a href={project.urlGithub} target="_blank">
            <div className="flex items-center gap-2 bg-slate-700 hover:bg-blue-500 shadow-lg shadow-blue-500/20 justify-between p-2 rounded-md">
              <div className="text-2xl">
                <ImGithub className=" text-white" />
              </div>
              <p className="text-white">Código</p>
            </div>
          </a>
          : ""
        }

        {project.urlPreview ?
          <a href={project.urlPreview} target="_blank">
            <div className="flex items-center gap-2 bg-slate-700 hover:bg-blue-500 shadow-lg shadow-blue-500/20 justify-between p-2 rounded-md">
              <div className="text-2xl">
                <ImRocket className=" text-white" />
              </div>
              <p className="text-white">Preview</p>
            </div>
          </a>
          : ""

        }

      </div>
    </div>
  );
};

export default PortfolioItem;
