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
    <section className="h-full py-24 md:h-auto" id="about">
      <div className="flex bg-white flex-col md:flex-row h-full items-center mx-auto max-w-7xl">
        <motion.div
          className="w-full md:h-full md:w-1/2 flex items-center justify-center px-4 md:px-0"
          ref={ref2}
          variants={fadeIn("up", "tween", 0, 0.5)}
          initial="hidden"
          animate={inView2 ? "show" : "hidden"}
        >
          <Image
            src="/assets/raf.jpg"
            alt="Rafael"
            width={400}
            height={620}
            className="rounded-md z-5"
          />
        </motion.div>

        <motion.div
          className="bg-white w-full md:h-full md:w-1/2 p-6 flex flex-col justify-between space-y-4 px-4 md:px-0"
          ref={ref1}
          variants={staggered}
          initial="hidden"
          animate={inView1 ? "show" : "hidden"}
        >
          <motion.div variants={staggered}>
            <motion.p
              className="mb-4 font-acumin  tracking-wide"
              ref={refPara1}
              variants={fadeIn("down", "tween", 0, 0.5)}
              initial="hidden"
              animate={inViewPara1 ? "show" : "hidden"}
            >
              As a Junior Web Developer with a foundation in Business
              Administration and a Master&apos;s Degree in Information Systems
              Web and App Development, I, Rafael Modesto, bring a unique
              perspective to the digital world. My academic background has
              equipped me with a strong understanding of the business and
              technical aspects of web development, which I use to craft
              solutions that are functional and user-friendly.
            </motion.p>
            <motion.p
              className="mb-4 font-acumin  tracking-wide"
              ref={refPara2}
              variants={fadeIn("right", "tween", 0, 0.5)}
              initial="hidden"
              animate={inViewPara2 ? "show" : "hidden"}
            >
              When it comes to my personal life, my passions extend beyond the
              realm of technology. I have a deep appreciation for art and music,
              and I enjoy spending my free time making beats and cycling. These
              hobbies allow me to express my creativity and stay active,
              providing a balance to my tech-focused professional life.
            </motion.p>
            <motion.p
              className="mb-4 font-acumin  tracking-wide"
              ref={refPara3}
              variants={fadeIn("up", "tween", 0, 0.5)}
              initial="hidden"
              animate={inViewPara3 ? "show" : "hidden"}
            >
              In the realm of web development, I am constantly looking for
              opportunities to learn, grow, and contribute to the digital
              landscape. My goal is to use my skills and knowledge to create
              impactful digital solutions that not only meet business needs but
              also provide a seamless experience for users. With a blend of
              technical expertise, business acumen, and a passion for continual
              learning, I am excited about the opportunities and challenges that
              lie ahead in my web development career.
            </motion.p>
          </motion.div>

          <motion.div
            className="mt-auto flex text-black-500 space-x-3"
            variants={staggered}
          >
            <SocialLink url="https://github.com/username" type="github" />
            <SocialLink
              url="https://www.linkedin.com/in/username"
              type="linkedin"
            />
            <SocialLink url="https://twitter.com/username" type="twitter" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
