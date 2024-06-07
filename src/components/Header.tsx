import { ImLinkedin, ImGithub } from "react-icons/im";
import {Dispatch, SetStateAction} from "react";
import Switch from "./Switch";

type HeaderProps =  {
  theme: boolean,
  setTheme: Dispatch<SetStateAction<boolean>>;
}

const Header = ({theme, setTheme} : HeaderProps) => {
  return (
    <div className="flex max-w-6xl mx-3 md:mx-4 lg:mx-5 xl:mx-auto justify-between items-center mt-5 text-2xl">
      <p className="flex justify-center items-center text-textBase">
        samuel<span className="font-bold">dlsantos</span>
        <span className=" bg-primary px-2 py-2 text-sm rounded-lg ml-0.5 font-bold">
          .dev
        </span>
      </p>
      {/* <div className="text-white">
         Navegacion
      </div> */}
      <div className="flex text-textBase justify-between gap-3 ">
        <a
          className="hover:text-btnPrimaryPressed"
          href="https://github.com/samueldlsantos"
          target="_blank"
        >
          <ImGithub />
        </a>
        <a
          className="hover:text-btnPrimaryPressed"
          href="https://www.linkedin.com/in/samuel-de-los-santos"
          target="_blank"
        >
          <ImLinkedin />
        </a>
        <Switch checked={theme} onChange={ e => setTheme(e.target.checked)} />
      </div>
    </div>
  );
};

export default Header;
