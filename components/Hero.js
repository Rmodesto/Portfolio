//Hero.js

import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import Link from "next/link";
import { useInView } from "react-intersection-observer";
import { fadeIn, floatingVariants, slideIn } from "../utils/motion";
import ButtonOutline from "./ButtonOutline";

const Sketch = dynamic(() => import("./Sketch"), { ssr: false });

const Hero = () => {
  const [ref, inView] = useInView({
    threshold: 0.2, // Set the desired threshold value
    triggerOnce: true, // Set the desired triggerOnce value
  });

  // Logic for animation state based on inView value

  return (
    <section
      ref={ref}
      className="hero relative bg-black-500 flex items-center justify-center min-h-screen bg-gray-900 z-0"
    >
      <div className="sketch-wrapper absolute w-full h-full inset-0 overflow-hidden z-0">
        <Sketch />
      </div>
      <div className="hero__content relative z-10 p-4">
        <motion.h1
          className="hero__title md:text-8xl text-7xl tracking-wider text-white"
          variants={{ ...fadeIn("up", "tween", 0, 0.5), ...floatingVariants }}
          initial="hidden"
          animate={inView ? "show" : "exit"}
        >
          Hello, I&apos;m <span className="text-blue">Rafael</span>
        </motion.h1>
        <motion.p
          className="hero__subtitle md:text-5xl text-4xl text-white font-acumin tracking-wide pt-3"
          variants={slideIn("right", "tween", 0, 0.5)}
          initial="hidden"
          animate={inView ? "show" : "exit"}
        >
          I&apos;m a Web Developer based in NYC
        </motion.p>
        <motion.p
          className="md:text-xl text-md text-white font-acumin tracking-widest font-thin pt-3"
          variants={slideIn("left", "tween", 0, 0.5)}
          initial="hidden"
          animate={inView ? "show" : "exit"}
        >
          I&apos;m passionate about building{" "}
          <span className="text-blue"> interactive</span> web applications.
        </motion.p>
        <div className="pt-5">
          <motion.div
            variants={fadeIn("up", "tween", 0.3, 0.5)}
            initial="hidden"
            animate={inView ? "show" : "exit"}
            className="pt-3"
          >
            <Link href="/#projects">
              <motion.div
                variants={fadeIn("up", "tween", 0.3, 0.5)}
                whileHover={{ scale: 1.1 }}
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
