import developer from "../img/sam1cropped.jpeg";
import { AiOutlineJavaScript   } from "react-icons/ai";
import { SiDotnet , SiTypescript, SiMicrosoftsqlserver, SiTailwindcss } from "react-icons/si";
import { FaReact } from "react-icons/fa6";
import { TypeAnimation } from "react-type-animation";
import { Variants, motion } from "framer-motion"


type HeroProps = {
  name: string;
};

const iconVariants = (duration: number) : Variants => ({
  initial: {y:-10},
  animate:{
    y: [10,-10],
    transition:{
      duration:duration,
      ease:"linear",
      repeat: Infinity,
      repeatType: "reverse"
    }
  }
}
);

const Hero = ({ name }: HeroProps) => {
  return (
    <div className="max-w-6xl mx-3 md:mx-4 lg:mx-5 xl:mx-auto md:place-content-center h-5/6 mt-10">
      <div className="flex justify-between items-center flex-col gap-5 lg:flex-row">
        <div>
          <h1 className=" text-bluechill-50 text-5xl font-bold">
            Hola, soy{" "}
            <span className="font-bold text-bluechill-500 text-6xl block">
              {name}
            </span>
          </h1>
          <div className="relative md:mt-10 bg-bluechill-600 p-2 rounded-md font-bold">
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
          <div className="flex items-center justify-center gap-1 mt-10">
            <motion.div
              variants={iconVariants(2)}
              initial="initial"
              animate="animate"
              className="rounded-2xl border-4 border-bluechill-500/50 p-2"
            >
              <SiDotnet className="text-violet-500 text-4xl" />
            </motion.div>
            <motion.div
              variants={iconVariants(3)}
              initial="initial"
              animate="animate"
              className="rounded-2xl border-4 border-bluechill-500/50 p-2"
            >
              <SiMicrosoftsqlserver className="text-yellow-600 text-4xl" />
            </motion.div>
            <motion.div
              variants={iconVariants(2.5)}
              initial="initial"
              animate="animate"
              className="rounded-2xl border-4 border-bluechill-500/50 p-2"
            >
              <AiOutlineJavaScript className="text-yellow-400 text-4xl" />
            </motion.div>
            <motion.div
              variants={iconVariants(2)}
              initial="initial"
              animate="animate"
              className="rounded-2xl border-4 border-bluechill-500/50 p-2"
            >
              <SiTypescript className="text-blue-500 text-4xl" />
            </motion.div>
            <motion.div
              variants={iconVariants(3.5)}
              initial="initial"
              animate="animate"
              className="rounded-2xl border-4 border-bluechill-500/50 p-2"
            >
              <FaReact className="text-blue-300 text-4xl" />
            </motion.div>
            <motion.div
              variants={iconVariants(3)}
              initial="initial"
              animate="animate"
              className="rounded-2xl border-4 border-bluechill-500/50 p-2"
            >
              <SiTailwindcss className="text-sky-700 text-4xl" />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
