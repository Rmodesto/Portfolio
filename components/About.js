import { motion } from "framer-motion";
import Image from "next/image";
import useOnScreen from "../components/hooks/useOnScreen";
import { fadeInUp } from "../utils/motion";
import SocialLink from "./SocialLinks";

const About = () => {
  const [ref1, isVisible] = useOnScreen({ threshold: 0.1 });

  return (
    <section className="h-full py-24 md:h-auto" id="about">
      <div className="flex bg-white flex-col md:flex-row h-full items-center mx-auto max-w-7xl">
        <div className="w-full md:h-full md:w-1/2 flex items-center justify-center px-4 md:px-0">
          <Image
            src="/assets/rafael.jpg"
            alt="Rafael"
            width={400}
            height={400}
            className="rounded-md z-5"
          />
        </div>

        <motion.div
          className="bg-white w-full md:h-full md:w-1/2 p-6 flex flex-col justify-between space-y-4 px-4 md:px-0"
          ref={ref1}
        >
          <div>
            <motion.h2
              className="text-2xl font-bold mb-4"
              variants={fadeInUp}
              initial="hidden"
              animate={isVisible ? "visible" : "hidden"}
            >
              About
            </motion.h2>
            <motion.p
              className="mb-4 font-acumin"
              variants={fadeInUp}
              initial="hidden"
              animate={isVisible ? "visible" : "hidden"}
            >
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </motion.p>
            <motion.p
              className="mb-4 font-acumin"
              variants={fadeInUp}
              initial="hidden"
              animate={isVisible ? "visible" : "hidden"}
            >
              It has survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </motion.p>
          </div>
          <motion.div
            className="mt-auto flex text-black-500 space-x-3"
            variants={fadeInUp}
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
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
