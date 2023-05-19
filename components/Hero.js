import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import Link from "next/link";
import { buttonVariants, fadeIn, slideIn } from "../utils/motion";

import ButtonOutline from "./ButtonOutline";
import useOnScreenAnimation from "./hooks/useOnScreenAnimation";

const Sketch = dynamic(() => import("./Sketch"), { ssr: false });

const Hero = () => {
  const [ref, animation] = useOnScreenAnimation({ triggerOnce: false });

  return (
    <section
      ref={ref}
      className="hero relative bg-black-500 flex items-center justify-center min-h-screen bg-gray-900"
    >
      <div className="sketch-wrapper absolute w-full h-full inset-0 overflow-hidden z-0">
        <Sketch />
      </div>
      <div className="hero__content relative z-10 p-4">
        <motion.h1
          className="hero__title text-8xl tracking-wider text-white"
          variants={fadeIn("up", "tween", 0, 0.5)}
          initial="hidden"
          animate={animation ? "show" : "reverse"}
        >
          Hello, I'm <span className="text-blue">Rafael</span>
        </motion.h1>
        <motion.p
          className="hero__subtitle text-white font-acumin tracking-wide text-5xl pt-3"
          variants={slideIn("right", "tween", 0, 0.5)}
          initial="hidden"
          animate={animation ? "show" : "reverse"}
        >
          I'm a Web Developer based in NYC
        </motion.p>
        <motion.p
          className="text-xl text-white font-acumin tracking-widest font-thin pt-3"
          variants={slideIn("left", "tween", 0, 0.5)}
          initial="hidden"
          animate={animation ? "show" : "reverse"}
        >
          I'm passionate about building{" "}
          <span className="text-blue"> interactive</span> web applications.
        </motion.p>
        <div className="pt-5">
          <motion.div
            variants={fadeIn("up", "tween", 0.3, 0.5)}
            initial="hidden"
            animate={animation ? "show" : "reverse"}
            className="pt-3"
          >
            <Link href="/projects">
              <motion.div
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
                initial="initial"
              >
                <ButtonOutline text="View my work" />
              </motion.div>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
