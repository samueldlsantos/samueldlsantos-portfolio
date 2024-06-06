import developer from "../img/sam1cropped.jpeg";
import { TypeAnimation } from "react-type-animation";

type HeroProps = {
  name: string;
};

const Hero = ({ name }: HeroProps) => {
  return (
    <div className="max-w-6xl mx-3 md:mx-4 lg:mx-5 xl:mx-auto md:place-content-center h-5/6 mt-10">
      <div className="flex justify-between items-center flex-col gap-5 lg:flex-row">
        <div>
          <h1 className=" text-bluechill-50 text-5xl">
            Hola, soy{" "}
            <span className="font-bold text-bluechill-500 text-6xl block">
              {name}
            </span>
          </h1>
          <div className="relative md:mt-10 bg-bluechill-600 p-2 rounded-lg font-bold">
            <div className="overflow-hidden h-16 flex items-center">
              <TypeAnimation
                sequence={[
                  "Ingeniero en desarrollo de software",
                  1000,
                  "Desarrollador Front-end",
                  1000,
                  "Desarrollador Back-end",
                  1000,
                  "Desarrollador Full-Stack",
                  1000,
                  "Desarrollador WEB",
                  1000,
                  "Diseñador UX/UI",
                  1000,
                ]}
                wrapper="span"
                speed={50}
                className="text-3xl md:text-4xl text-bluechill-50"
                repeat={Infinity}
                style={{ display: 'inline-block' }}
              />
            </div>
          </div>
        </div>
        <div className="sm:max-w-md">
          <img
            className="rounded-lg"
            src={developer}
            alt="Imagen del desarrollador"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
