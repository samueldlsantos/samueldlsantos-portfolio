import developer from "../img/developer.png";
import { ImGithub, ImRocket } from "react-icons/im";

const PortfolioItem = () => {
  return (
    <div className="rounded-lg backdrop-blur-lg bg-transparent py-5 px-4 border-2 border-blue-500/60 shadow-lg shadow-blue-500/20 hover:shadow-2xl hover:shadow-blue-500/75 ">
      <div className="mx-auto max-w-72">
        <img src={developer} />
      </div>
      <h3 className="text-white font-bold text-lg text-center">
        Titulo del proyecto
      </h3>
      <p className="text-white mt-5">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem eveniet
        quae deserunt non ratione rerum magni accusamus atque sapiente earum.
        Alias tempora consequatur libero illo quaerat sunt saepe debitis et.
      </p>
      <div className="mt-5 flex justify-center gap-2">

        <div className="flex items-center gap-2 bg-slate-700 hover:bg-blue-500 shadow-lg shadow-blue-500/20 justify-between p-2 rounded-md">
          <div className="text-2xl">
            <ImGithub className=" text-white" />
          </div>
          <p className="text-white">Código</p>
        </div>

        <div className="flex items-center gap-2 bg-slate-700 hover:bg-blue-500 shadow-lg shadow-blue-500/20 justify-between p-2 rounded-md">
          <div className="text-2xl">
            <ImRocket className=" text-white" />
          </div>
          <p className="text-white">Preview</p>
        </div>

      </div>
    </div>
  );
};

export default PortfolioItem;
