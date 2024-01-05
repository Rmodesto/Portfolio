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
          className=" text-white -mt-6 w-full md:h-full md:w-1/2 p-6 flex flex-col justify-between space-y-4 px-4 md:px-0"
          ref={ref1}
          variants={staggered}
          initial="hidden"
          animate={inView1 ? "show" : "hidden"}
        >
          <motion.div variants={staggered}>
            <motion.p
              className="mb-2 font-acumin tracking-wide"
              ref={refPara1}
              variants={fadeIn("down", "tween", 0, 0.5)}
              initial="hidden"
              animate={inViewPara1 ? "show" : "hidden"}
            >
              Greetings! I am a dedicated Web Developer with a solid track record of 6 years
              in developing engaging web applications. My academic journey is marked by a unique
              combination of business insight and advanced technology, having completed a 
              Master&apos;s in Information Systems Web and App Development. This distinct blend 
              empowers me to effectively align technological solutions with business goals, creating
              outcomes that are both technically proficient and strategically sound.  
            </motion.p>
           
            <motion.p
              className="mb-4 font-acumin  tracking-wide"
              ref={refPara2}
              variants={fadeIn("right", "tween", 0, 0.5)}
              initial="hidden"
              animate={inViewPara2 ? "show" : "hidden"}
            >
              Beyond the realm of coding and digital solutions, my world is enriched by a deep passion 
              for music and art. Whether I&aposm experimenting with new beats or exploring the urban landscape 
              on my bike, these interests infuse my professional endeavors with creativity and a fresh perspective.
            </motion.p>
            <motion.p
              className="mb-4 font-acumin  tracking-wide"
              ref={refPara3}
              variants={fadeIn("up", "tween", 0, 0.5)}
              initial="hidden"
              animate={inViewPara3 ? "show" : "hidden"}
            >
            My approach to web development is centered around a synergy of technical skill, business acumen, and creative vision.
            If you&aposre in search of a Web Developer who can contribute a novel and effective perspective to your projects, I&aposm eager 
            to collaborate. Together, let&aposs craft exceptional experiences and innovative solutions!
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
