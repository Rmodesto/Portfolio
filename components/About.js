import { motion } from "framer-motion";
import Image from "next/image";
import ScrollAnimationWrapper from "./layouts/ScrollAnimationWrapper";
import SocialLink from "./SocialLinks";

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };
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
          variants={containerVariants}
          initial="hidden"
          animate="show"
        >
          <div>
            <ScrollAnimationWrapper>
              <motion.h2
                className="text-2xl font-bold mb-4"
                variants={itemVariants}
              >
                About
              </motion.h2>
            </ScrollAnimationWrapper>
            <ScrollAnimationWrapper>
              <motion.p className="mb-4 font-acumin" variants={itemVariants}>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </motion.p>
            </ScrollAnimationWrapper>
            <ScrollAnimationWrapper>
              <motion.p className="mb-4 font-acumin" variants={itemVariants}>
                It has survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </motion.p>
            </ScrollAnimationWrapper>
          </div>
          <motion.div
            className="mt-auto flex text-black-500 space-x-3"
            variants={containerVariants}
            initial="hidden"
            animate="show"
          >
            <SocialLink
              url="https://github.com/username"
              type="github"
              variants={itemVariants}
            />
            <SocialLink
              url="https://www.linkedin.com/in/username"
              type="linkedin"
              variants={itemVariants}
            />
            <SocialLink
              url="https://twitter.com/username"
              type="twitter"
              variants={itemVariants}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
