import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import { useInView } from "react-intersection-observer";
import { geometricVariants, staggerContainer } from "../utils/motion";

const GeometricSketch = dynamic(() => import("./GeometricSketch"), {
  ssr: false,
});

const Vortex = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  };

  const [ref1, inView1] = useInView({ threshold: 0.1 });
  const [ref2, inView2] = useInView({ threshold: 0.1 });
  const [ref3, inView3] = useInView({ threshold: 0.1 });
  const [ref4, inView4] = useInView({ threshold: 0.1 });

  return (
    <div
      className="relative bg-black-500 p-6 md:p-20 min-h-screen flex items-center justify-center"
      id="vortex"
    >
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate={inView1 ? "visible" : "hidden"}
        className="grid grid-cols-1 md:grid-cols-2 grid-rows-4 md:grid-rows-2 w-full max-w-7xl gap-6"
      >
        {/* First quadrant */}
        <motion.div
          variants={fadeInUp}
          ref={ref1}
          className="col-start-1 row-start-1"
        >
          <h2 className="text-white text-2xl md:text-3xl">
            <span className="text-blue">Skills</span> and Tools
          </h2>
          <p className="pt-2 text-white tracking-wide font-acumin">
            For a more detailed overview, please feel free <br /> to check the
            tools used in <span className="text-blue"> each project.</span>
          </p>
        </motion.div>

        {/* Second quadrant */}
        <motion.div
          ref={ref2}
          className="col-start-1 md:col-start-2 row-start-2 md:row-start-1 bg-black-500 p-6"
          variants={geometricVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.25 }}
        >
          <div className="h-full flex items-center justify-center">
            <GeometricSketch />
          </div>
        </motion.div>

        {/* Third quadrant */}
        <motion.div
          ref={ref3}
          className="col-start-1 md:col-start-1 row-start-3 md:row-start-2 bg-black-500 p-6"
          variants={geometricVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.25 }}
        >
          <div className="h-full flex items-center justify-center">
            <GeometricSketch />
          </div>
        </motion.div>

        {/* Fourth quadrant */}
        <motion.div
          ref={ref4}
          className="col-start-1 row-start-4 md:col-start-2 md:row-start-2"
          variants={fadeInUp}
          initial="hidden"
          animate={inView4 ? "visible" : "hidden"}
        >
          <div
            className="text-white flex flex-wrap justify
          -center items-center"
          >
            <span className="text-xl md:text-2xl opacity-70 mb-6">
              TailwindCSS
            </span>
            <span className="text-2xl md:text-3xl opacity-80 mr-6">
              Adobe Xd
            </span>
            <span className="text-3xl md:text-4xl opacity-90 mb-6">
              JavaScript
            </span>
            <span className="text-4xl md:text-5xl opacity-100">Nextjs</span>
            <span className="text-3xl md:text-4xl opacity-90 mt-6">git</span>
            <span className="text-2xl md:text-3xl opacity-80 ml-6">React</span>
            <span className="text-xl md:text-2xl opacity-70 mt-6">MongoDB</span>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Vortex;
