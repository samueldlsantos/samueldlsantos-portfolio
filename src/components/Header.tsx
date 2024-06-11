import { ImLinkedin, ImGithub } from "react-icons/im";
import { usePortfolio } from "../hooks/usePortfolio";
import { CiLight } from "react-icons/ci";
import { IoMoonOutline } from "react-icons/io5";
import Switch from "react-switch";

const Header = () => {
  const { state, dispatch } = usePortfolio();

  const handleThemeChange = () => {
    const theme = state.theme === "light" ? "dark" : "light";

    dispatch({ type: "set-theme", payload: { theme: theme } });
  };
  return (
    <div className="flex max-w-6xl mx-3 md:mx-4 lg:mx-5 xl:mx-auto justify-between items-center mt-5 text-2xl">
      <p className="flex justify-center items-center text-textBase">
        samuel<span className="font-bold">dlsantos</span>
        <span className=" bg-primary px-2 py-2 text-sm rounded-lg ml-0.5 font-bold text-btnPrimaryText">
          .dev
        </span>
      </p>
      {/* <div className="text-white">
         Navegacion
      </div> */}
      <div className="flex text-textBase justify-between items-center gap-3 ">
        <a
          className="hover:text-btnPrimary"
          href="https://github.com/samueldlsantos"
          target="_blank"
        >
          <ImGithub />
        </a>
        <a
          className="hover:text-btnPrimary"
          href="https://www.linkedin.com/in/samuel-de-los-santos"
          target="_blank"
        >
          <ImLinkedin />
        </a>
        <Switch
          onChange={handleThemeChange}
          checked={state.theme === "light" ? true : false}
          uncheckedHandleIcon={
            <div className="flex justify-center p-1 place-items-center h-full">
              <IoMoonOutline className="text-btnPrimaryText" />
            </div>
          }
          checkedHandleIcon={
            <div className="flex justify-center place-items-center h-full">
              <CiLight className="text-primary" />
            </div>
          }
          onColor="#0e91e9"
          onHandleColor="#fff"
          offHandleColor="#0e91e9"
          handleDiameter={30}
          uncheckedIcon={false}
          checkedIcon={false}
          boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
          activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
          height={20}
          width={48}
          id="material-switch"
        />
      </div>
    </div>
  );
};

export default Header;
