import { ImGithub, ImRocket } from "react-icons/im";
import { Project } from "../types";

type PortfolioItemProps = {
  project: Project;
};

const PortfolioItem = ({ project }: PortfolioItemProps) => {
  return (
    <div
      className="flex flex-col justify-between w-full bg-contain shadow-lg shadow-bluechill-500/20 hover:shadow-bluechill-500/75 rounded-lg transition ease-in-out hover:-translate-y-1 hover:scale-105"
      style={{
        backgroundImage: `url(${project.image})`,
      }}
    >
      <div className="w-full">
        <img className="rounded-t-lg" src={project.image} />
      </div>
      <div className="flex flex-col backdrop-blur-xl backdrop-brightness-75 bg-white/20 backdrop justify-between h-full  p-2 px-3 rounded-b-lg">
        <div>
          <h3 className=" font-bold text-lg text-center text-white">
            {project.title}
          </h3>
          <p className="text-white">{project.description}</p>
        </div>

        <div className="flex justify-center gap-2 mb-2 mt-3">
          {project.urlGithub ? (
            <a href={project.urlGithub} target="_blank">
              <div className="flex items-center gap-2 bg-bluechill-500 hover:bg-bluechill-700 shadow-lg shadow-bluechill-500/50 justify-between p-2 rounded-md">
                <div className="text-2xl">
                  <ImGithub className=" text-bluechill-50" />
                </div>
                <p className="text-bluechill-50">Código</p>
              </div>
            </a>
          ) : (
            ""
          )}

          {project.urlPreview ? (
            <a href={project.urlPreview} target="_blank">
              <div className="flex items-center gap-2 bg-bluechill-500 hover:bg-bluechill-700 shadow-lg shadow-bluechill-500/50 justify-between p-2 rounded-md">
                <div className="text-2xl">
                  <ImRocket className=" text-bluechill-50" />
                </div>
                <p className="text-bluechill-50">Preview</p>
              </div>
            </a>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};

export default PortfolioItem;
