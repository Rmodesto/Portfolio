//About.js
import { motion } from "framer-motion";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import { fadeIn, staggerContainer } from "../utils/motion";
import SocialLink from "./SocialLinks";

const About = () => {
  const [ref1, inView1] = useInView({ threshold: 0.1 });
  const [ref2, inView2] = useInView({ threshold: 0.1 });
  const staggered = staggerContainer();

  // New useInView hooks for each paragraph
  const [refPara1, inViewPara1] = useInView({ threshold: 0.1 });
  const [refPara2, inViewPara2] = useInView({ threshold: 0.1 });
  const [refPara3, inViewPara3] = useInView({ threshold: 0.1 });

  return (
    <section className="h-full bg-black-100 py-24 md:h-auto" id="about">
      <div className="flex flex-col md:flex-row h-full mx-auto max-w-7xl">
        <motion.div
          className="w-full md:h-full md:w-1/2 flex items-center justify-center px-4 md:px-0"
          ref={ref2}
          variants={fadeIn("up", "tween", 0, 0.5)}
          initial="hidden"
          animate={inView2 ? "show" : "hidden"}
        >
          <Image
            src="/assets/raf1.jpg"
            alt="Rafael"
            width={400}
            height={620}
            className="rounded-md z-5 border-none"
          />
        </motion.div>

        <motion.div
          className=" text-white w-full md:h-full md:w-1/2 p-6 flex flex-col justify-between space-y-4 px-4 md:px-0"
          ref={ref1}
          variants={staggered}
          initial="hidden"
          animate={inView1 ? "show" : "hidden"}
        >
          <motion.div variants={staggered}>
            <motion.p
              className="mb-4 font-acumin tracking-wide"
              ref={refPara1}
              variants={fadeIn("down", "tween", 0, 0.5)}
              initial="hidden"
              animate={inViewPara1 ? "show" : "hidden"}
            >
              I&apos;m a Junior Web Developer with a solid grounding in Business
              Administration and a Master&apos;s in Information Systems Web and
              App Development. This unique combo allows me to bridge the gap
              between business needs and technical possibilities, creating
              solutions that are as practical as they are user-friendly.
            </motion.p>
            <motion.p
              className="mb-4 font-acumin  tracking-wide"
              ref={refPara2}
              variants={fadeIn("right", "tween", 0, 0.5)}
              initial="hidden"
              animate={inViewPara2 ? "show" : "hidden"}
            >
              But life isn&apos;t all about code and algorithms! When I&apos;m
              not solving digital puzzles, you&apos;ll find me immersed in music
              and art, crafting beats, or cycling around the city. These
              passions keep me balanced, inspired, and ready to bring a fresh,
              creative perspective to every project.
            </motion.p>
            <motion.p
              className="mb-4 font-acumin  tracking-wide"
              ref={refPara3}
              variants={fadeIn("up", "tween", 0, 0.5)}
              initial="hidden"
              animate={inViewPara3 ? "show" : "hidden"}
            >
              So, let&apos;s make something incredible together.
            </motion.p>
          </motion.div>

          <motion.div
            className="mt-auto flex text-white space-x-3"
            variants={staggered}
          >
            <SocialLink
              url="https://github.com/username"
              type="github"
              size=""
            />
            <SocialLink
              url="https://www.linkedin.com/in/username"
              type="linkedin"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
