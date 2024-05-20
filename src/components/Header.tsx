import { ImLinkedin, ImGithub } from "react-icons/im";

const Header = () => {
  return (
    <div className="flex max-w-6xl mx-3 md:mx-4 lg:mx-5 xl:mx-auto justify-between items-center mt-5 text-2xl">
        <p className="flex justify-center items-center text-bluechill-50">
          samuel<span className="font-bold">dlsantos</span>
          <span className=" bg-bluechill-500 px-2 py-2 text-sm rounded-lg ml-0.5 font-bold">
            .dev
          </span>
        </p>
      {/* <div className="text-white">
         Navegacion
      </div> */}
      <div className="flex text-bluechill-50 justify-between gap-3 ">
        <a className="hover:text-bluechill-600" href="https://github.com/samueldlsantos" target="_blank"><ImGithub /></a>
        <a className="hover:text-bluechill-600" href="https://www.linkedin.com/in/samuel-de-los-santos" target="_blank"><ImLinkedin /></a>
      </div>
    </div>
  );
};

export default Header;
