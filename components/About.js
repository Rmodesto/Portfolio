import { motion } from "framer-motion";
import Image from "next/image";
import useOnScreenAnimation from "../components/hooks/useOnScreenAnimation";
import { fadeIn, staggerContainer } from "../utils/motion";
import SocialLink from "./SocialLinks";

const About = () => {
  const [ref1, animation] = useOnScreenAnimation({ threshold: 0.1 });
  const [ref2, imageAnimation] = useOnScreenAnimation({ threshold: 0.1 });
  const staggered = staggerContainer();

  return (
    <section className="h-full py-24 md:h-auto" id="about">
      <div className="flex bg-white flex-col md:flex-row h-full items-center mx-auto max-w-7xl">
        <motion.div
          className="w-full md:h-full md:w-1/2 flex items-center justify-center px-4 md:px-0"
          ref={ref2}
          variants={fadeIn("up", "tween", 0, 0.5)}
          initial="hidden"
          animate={imageAnimation}
        >
          <Image
            src="/assets/rafael.jpg"
            alt="Rafael"
            width={400}
            height={400}
            className="rounded-md z-5"
          />
        </motion.div>

        <motion.div
          className="bg-white w-full md:h-full md:w-1/2 p-6 flex flex-col justify-between space-y-4 px-4 md:px-0"
          ref={ref1}
          variants={staggered}
          initial="hidden"
          animate={animation}
        >
          <motion.div variants={staggered}>
            <motion.p
              className="mb-4 font-acumin"
              variants={fadeIn("down", "tween", 0, 0.5)}
              initial="hidden"
              animate={animation}
            >
              As a Junior Web Developer with a foundation in Business
              Administration and a Master's Degree in Information Systems Web
              and App Development, I, Rafael Modesto, bring a unique perspective
              to the digital world. My academic background has equipped me with
              a strong understanding of the business and technical aspects of
              web development, which I use to craft solutions that are
              functional and user-friendly.
            </motion.p>
            <motion.p
              className="mb-4 font-acumin"
              variants={fadeIn("right", "tween", 0, 0.5)}
              initial="hidden"
              animate={animation}
            >
              When it comes to my personal life, my passions extend beyond the
              realm of technology. I have a deep appreciation for art and music,
              and I enjoy spending my free time making beats and cycling. These
              hobbies allow me to express my creativity and stay active,
              providing a balance to my tech-focused professional life.
            </motion.p>
            <motion.p
              className="mb-4 font-acumin"
              variants={fadeIn("up", "tween", 0, 0.5)}
              initial="hidden"
              animate={animation}
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
