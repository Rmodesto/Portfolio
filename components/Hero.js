import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import Link from "next/link";
import ButtonOutline from "./ButtonOutline";

const Sketch = dynamic(() => import("./Sketch"), { ssr: false });

const Hero = () => {
  return (
    <section className="hero relative bg-black-500 flex items-center justify-center min-h-screen bg-gray-900">
      <div className="sketch-wrapper absolute w-full h-full inset-0 overflow-hidden z-0">
        <Sketch />
      </div>
      <div className="hero__content relative z-10 p-4">
        <motion.h1
          className="hero__title text-5xl tracking-wider text-white"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Hello, I'm <span className="text-blue">Rafael</span>
        </motion.h1>
        <motion.p
          className="hero__subtitle text-white font-acumin tracking-wide text-2xl pt-3"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          I'm a Web Developer based in NYC
        </motion.p>
        <motion.p
          className="text-sm text-white font-acumin tracking-widest font-thin pt-3"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          I'm passionate about building{" "}
          <span className="text-blue"> interactive</span> web applications.
        </motion.p>
        <div className="pt-5">
          <motion.div whileHover={{ scale: 1.1 }} className="pt-3">
            <Link href="/projects">
              <ButtonOutline text="View my work" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
