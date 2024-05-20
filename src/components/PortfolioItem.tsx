import { ImGithub, ImRocket } from "react-icons/im";
import { Project } from "../types";

type PortfolioItemProps = {
  project: Project
}

const PortfolioItem = ({ project }: PortfolioItemProps) => {
  return (
    <div className="flex flex-col gap-4 rounded-lg backdrop-blur-lg bg-transparent py-5 px-4 border-4 border-bluechill-500/50 shadow-lg shadow-bluechill-500/20 hover:shadow-2xl hover:shadow-bluechill-500/75">
      <div className="flex-grow">
        <div className="mx-auto max-w-72">
          <img className="rounded-lg shadow-lg shadow-bluechill-500/50" src={project.image} />
        </div>
        <h3 className="text-bluechill-50 font-bold text-lg text-center">
          {project.title}
        </h3>
        <p className="text-bluechill-50 mt-5">{project.description}</p>
      </div>
      <div className="mt-5 flex justify-center gap-2">

        {project.urlGithub ?
          <a href={project.urlGithub} target="_blank">
            <div className="flex items-center gap-2 bg-bluechill-500 hover:bg-bluechill-700 shadow-lg shadow-bluechill-500/50 justify-between p-2 rounded-md">
              <div className="text-2xl">
                <ImGithub className=" text-bluechill-50" />
              </div>
              <p className="text-bluechill-50">Código</p>
            </div>
          </a>
          : ""
        }

        {project.urlPreview ?
          <a href={project.urlPreview} target="_blank">
            <div className="flex items-center gap-2 bg-bluechill-500 hover:bg-bluechill-700 shadow-lg shadow-bluechill-500/50 justify-between p-2 rounded-md">
              <div className="text-2xl">
                <ImRocket className=" text-bluechill-50" />
              </div>
              <p className="text-bluechill-50">Preview</p>
            </div>
          </a>
          : ""

        }

      </div>
    </div>
  );
};

export default PortfolioItem;
