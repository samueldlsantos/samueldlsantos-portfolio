import { usePortfolio } from "../hooks/usePortfolio";
import developer from "../img/sam1cropped.jpeg";
import { TypeAnimation } from "react-type-animation";

const Hero = () => {
  
  const { state } = usePortfolio();

  return (
    <div className="max-w-6xl mx-3 md:mx-4 lg:mx-5 xl:mx-auto md:place-content-center h-5/6 mt-5 md:mt-10">
      <div className="flex flex-col-reverse items-center md:gap-5 lg:flex-row">
        <div className="w-full">
          <h1 className=" text-textBase text-3xl md:text-5xl">
            Hola, soy{" "}
            <span className="font-bold text-primary text-4xl md:text-6xl block">
              {state.personalInformation.name}
            </span>
          </h1>
          <div className="relative rounded-lg font-bold w-full">
            <div className="overflow-hidden h-28 md:h-32 flex">
              <TypeAnimation
                sequence={[
                  "Ingeniero en desarrollo de software",
                  1000,
                  "Desarrollador Front-end",
                  1000,
                  "Desarrollador Back-end",
                  1000,
                ]}
                wrapper="span"
                speed={50}
                className="text-3xl md:text-4xl text-textBase"
                repeat={Infinity}
                style={{ display: 'block' }}
              />
            </div>
          </div>
        </div>
        <div className="w-full">
          <img
            className="blob hero rounded-lg sm:max-w-md mx-auto"
            src={developer}
            alt="Imagen del desarrollador"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
