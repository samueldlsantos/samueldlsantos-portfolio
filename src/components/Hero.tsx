import developer from "../img/sam1cropped.jpeg";
import { AiOutlineJavaScript   } from "react-icons/ai";
import { SiDotnet , SiTypescript, SiMicrosoftsqlserver, SiTailwindcss } from "react-icons/si";
import { FaReact } from "react-icons/fa6";
import { TypeAnimation } from "react-type-animation";
import { Variants, motion } from "framer-motion"


type HeroProps = {
  name: string;
  profession: string;
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

const Hero = ({ name, profession }: HeroProps) => {
  return (
    <div className="max-w-6xl mx-3 md:mx-4 lg:mx-5 xl:mx-auto md:place-content-center h-5/6">
      <div className="flex justify-between items-center flex-col gap-5 lg:flex-row">
        <div>
          <h1 className="text-white text-5xl font-thin">
            Hola, soy{" "}
            <span className="flex felx-column font-bold text-blue-600 text-6xl">
              {name}
            </span>
          </h1>
          <TypeAnimation
          className="text-white text-4xl mt-10 bg-blue-600 p-2 rounded-md font-bold"
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
            style={{ fontSize: "2em", display: "inline-block", color:"white" }}
            repeat={Infinity}
          />
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
               className="rounded-2xl border-4 border-blue-500/50 p-2">
                  <SiDotnet className=" text-violet-500 text-4xl " />
              </motion.div>

              <motion.div 
              variants={iconVariants(3)}
              initial="initial"
              animate="animate"
              className="rounded-2xl border-4 border-blue-500/50 p-2">
                  <SiMicrosoftsqlserver className="text-yellow-600 text-4xl" />
              </motion.div>

              <motion.div
              variants={iconVariants(2.5)}
              initial="initial"
              animate="animate"
              className="rounded-2xl border-4 border-blue-500/50 p-2">
                  <AiOutlineJavaScript className="text-yellow-400 text-4xl" />
              </motion.div>

              <motion.div  
                  variants={iconVariants(2)}
                  initial="initial"
                  animate="animate"
                  className="rounded-2xl border-4 border-blue-500/50 p-2">
                  <SiTypescript className="text-blue-500 text-4xl" />
              </motion.div>

              <motion.div
                   variants={iconVariants(3.5)}
                   initial="initial"
                   animate="animate"
                    className="rounded-2xl border-4 border-blue-500/50 p-2">
                  <FaReact className="text-blue-300 text-4xl" />
              </motion.div>

              <motion.div
                  variants={iconVariants(3)}
                  initial="initial"
                  animate="animate" 
                  className="rounded-2xl border-4 border-blue-500/50 p-2">
                  <SiTailwindcss className="text-sky-700 text-4xl" />
              </motion.div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
