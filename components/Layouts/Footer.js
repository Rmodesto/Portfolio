import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { footerVariants } from "../../utils/motion";
import SocialLink from "../SocialLinks";

const Footer = () => {
  const [ref1, inView1] = useInView({ threshold: 0.1 });
  const [ref2, inView2] = useInView({ threshold: 0.1 });
  const [ref3, inView3] = useInView({ threshold: 0.1 });

  return (
    <footer className="bg-black-100 py-24">
      <div className="container flex flex-col justify-center items-center">
        <motion.div
          ref={ref1}
          className="flex flex-col md:flex-row justify-center items-center py-4 w-full text-center"
          variants={footerVariants}
          initial="hidden"
          animate={inView1 ? "show" : "hidden"}
        >
          <p className="text-white text-2xl inline-block">
            RM | {new Date().getFullYear()}
          </p>
        </motion.div>

        <motion.div
          ref={ref2}
          className="flex justify-center text-white text-2xl items-center gap-2 mb-4"
          variants={footerVariants}
          initial="hidden"
          animate={inView2 ? "show" : "hidden"}
        >
          <SocialLink url="https://github.com/username" type="github" />
          <SocialLink
            url="https://www.linkedin.com/in/username"
            type="linkedin"
          />
          <SocialLink url="https://twitter.com/username" type="twitter" />
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
