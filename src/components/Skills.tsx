import {
  SiDotnet,
  SiTypescript,
  SiMicrosoftsqlserver,
  SiTailwindcss,
  SiHtml5,
  SiBootstrap,
  SiJavascript,
  SiCss3
} from "react-icons/si";
import { FaReact } from "react-icons/fa6";
import { useRef } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
  useVelocity,
  useAnimationFrame,
} from "framer-motion";
import { wrap } from "@motionone/utils";

interface ParallaxProps {
  children: React.ReactNode;
  baseVelocity: number;
}

function ParallaxText({ children, baseVelocity = 100 }: ParallaxProps) {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false,
  });

  /**
   * This is a magic wrapping for the length of the text - you
   * have to replace for wrapping that works for you or dynamically
   * calculate
   */
  const x = useTransform(baseX, (v) => `${wrap(-20, -45, v)}%`);

  const directionFactor = useRef<number>(1);
  useAnimationFrame((_, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

    /**
     * This is what changes the direction of the scroll once we
     * switch scrolling directions.
     */
    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get();

    baseX.set(baseX.get() + moveBy);
  });

  /**
   * The number of times to repeat the child text should be dynamically calculated
   * based on the size of the text and viewport. Likewise, the x motion value is
   * currently wrapped between -20 and -45% - this 25% is derived from the fact
   * we have four children (100% / 4). This would also want deriving from the
   * dynamically generated number of children.
   */
  return (
    <div className="parallax">
      <motion.div className="scroller" style={{ x }}>
        <span>{children} </span>
        <span>{children} </span>
        <span>{children} </span>
        <span>{children} </span>
      </motion.div>
    </div>
  );
}

const Skills = () => {
  return (
    <div className="mx-3 md:mx-4 lg:mx-5 xl:mx-auto mt-20">
      <h2 className="text-bluechill-50 text-center text-4xl font-bold mb-10">
        Skills
      </h2>

      <ParallaxText baseVelocity={-2}>
        <div className="flex items-center md:justify-center gap-7 mr-7">
          <div className="group/skill rounded-lg p-2 backdrop-blur-xl backdrop-brightness-75 bg-white/20 hover:bg-white/10 relative place-content-center">
            <SiDotnet className="text-violet-500 text-9xl group-hover/skill:blur" />
            <p className="invisible group-hover/skill:visible absolute inset-0 text-center content-center text-white font-bold text-xl">
              .NET
            </p>
          </div>
          <div className="group/skill rounded-lg p-2 backdrop-blur-xl backdrop-brightness-75 bg-white/20 hover:bg-white/10 relative place-content-center">
            <SiMicrosoftsqlserver className="text-yellow-600 text-9xl group-hover/skill:blur" />
            <p className="invisible group-hover/skill:visible absolute inset-0 text-center content-center text-white font-bold text-xl">
              SQL Server
            </p>
          </div>
          <div className="group/skill rounded-lg p-2 backdrop-blur-xl backdrop-brightness-75 bg-white/20 hover:bg-white/10 relative place-content-center">
            <FaReact className="text-blue-300 text-9xl group-hover/skill:blur" />
            <p className="invisible group-hover/skill:visible absolute inset-0 text-center content-center text-white font-bold text-xl">
              React.js
            </p>
          </div>
          <div className="group/skill rounded-lg p-2 backdrop-blur-xl backdrop-brightness-75 bg-white/20 hover:bg-white/10 relative place-content-center">
            <SiTailwindcss className="text-sky-700 text-9xl group-hover/skill:blur" />
            <p className="invisible group-hover/skill:visible absolute inset-0 text-center content-center text-white font-bold text-xl">
              Tailwind CSS
            </p>
          </div>
          <div className="group/skill rounded-lg p-2 backdrop-blur-xl backdrop-brightness-75 bg-white/20 hover:bg-white/10 relative place-content-center">
            <SiHtml5 className=" text-red-500 text-9xl group-hover/skill:blur" />
            <p className="invisible group-hover/skill:visible absolute inset-0 text-center content-center text-white font-bold text-xl">
              HTML
            </p>
          </div>
          <div className="group/skill rounded-lg p-2 backdrop-blur-xl backdrop-brightness-75 bg-white/20 hover:bg-white/10 relative place-content-center">
            <SiCss3 className=" text-sky-500 text-9xl group-hover/skill:blur" />
            <p className="invisible group-hover/skill:visible absolute inset-0 text-center content-center text-white font-bold text-xl">
              CSS
            </p>
          </div>
          <div className="group/skill rounded-lg p-2 backdrop-blur-xl backdrop-brightness-75 bg-white/20 hover:bg-white/10 relative place-content-center">
            <SiBootstrap className=" text-violet-700 text-9xl group-hover/skill:blur" />
            <p className="invisible group-hover/skill:visible absolute inset-0 text-center content-center text-white font-bold text-xl">
              Bootstrap
            </p>
          </div>
          <div className="group/skill rounded-lg p-2 backdrop-blur-xl backdrop-brightness-75 bg-white/20 hover:bg-white/10 relative place-content-center">
            <SiJavascript className="text-yellow-400 text-9xl group-hover/skill:blur" />
            <p className="invisible group-hover/skill:visible absolute inset-0 text-center content-center text-white font-bold text-xl">
              JavaScript
            </p>
          </div>
          <div className="group/skill rounded-lg p-2 backdrop-blur-xl backdrop-brightness-75 bg-white/20 hover:bg-white/10 relative place-content-center">
            <SiTypescript className="text-blue-500 text-9xl group-hover/skill:blur" />
            <p className="invisible group-hover/skill:visible absolute inset-0 text-center content-center text-white font-bold text-xl">
              TypeScript
            </p>
          </div>
        </div>
      </ParallaxText>

      {/* <div className="flex flex-col md:flex-row items-center md:justify-center gap-5">
        <motion.div
          whileHover={{ scale: [null, 1.5, 1.4] }}
          transition={{ duration: 0.3 }}
          className="rounded-lg p-2 backdrop-blur-xl backdrop-brightness-75 bg-white/20"
        >
          <SiDotnet className="text-violet-500 text-8xl" />
        </motion.div>
        <motion.div
          whileHover={{ scale: [null, 1.5, 1.4] }}
          transition={{ duration: 0.3 }}
          className="rounded-lg p-2 backdrop-blur-xl backdrop-brightness-75 bg-white/20"
        >
          <SiMicrosoftsqlserver className="text-yellow-600 text-8xl" />
        </motion.div>
        <motion.div
          whileHover={{ scale: [null, 1.5, 1.4] }}
          transition={{ duration: 0.3 }}
          className="rounded-lg p-2 backdrop-blur-xl backdrop-brightness-75 bg-white/20"
        >
          <AiOutlineJavaScript className="text-yellow-400 text-8xl" />
        </motion.div>
        <motion.div
          whileHover={{ scale: [null, 1.5, 1.4] }}
          transition={{ duration: 0.3 }}
          className="rounded-lg p-2 backdrop-blur-xl backdrop-brightness-75 bg-white/20"
        >
          <SiTypescript className="text-blue-500 text-8xl" />
        </motion.div>
        <motion.div
          whileHover={{ scale: [null, 1.5, 1.4] }}
          transition={{ duration: 0.3 }}
          className="rounded-lg p-2 backdrop-blur-xl backdrop-brightness-75 bg-white/20"
        >
          <FaReact className="text-blue-300 text-8xl" />
        </motion.div>
        <motion.div
          whileHover={{ scale: [null, 1.5, 1.4] }}
          transition={{ duration: 0.3 }}
          className="rounded-lg  p-2 backdrop-blur-xl backdrop-brightness-75 bg-white/20"
        >
          <SiTailwindcss className="text-sky-700 text-8xl" />
        </motion.div>
      </div> */}
      {/* <ParallaxText baseVelocity={-3}>Framer Motion</ParallaxText>
      <ParallaxText baseVelocity={3}>Scroll velocity</ParallaxText> */}
    </div>
  );
};

export default Skills;
