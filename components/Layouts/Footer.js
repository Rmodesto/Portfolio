import { motion } from "framer-motion";
import { footerVariants } from "../../utils/motion";
import SocialLink from "../SocialLinks";

const Footer = () => {
  return (
    <motion.footer
      className="bg-black-100 py-24"
      variants={footerVariants}
      initial="hidden"
      animate="show"
    >
      <div className="container flex flex-col justify-center items-center">
        <div className="flex flex-col md:flex-row justify-center items-center py-4 w-full text-center">
          <p className="text-white inline-block">
            RM | {new Date().getFullYear()}
          </p>
        </div>

        <div className="flex justify-center text-white items-center gap-2 mb-4">
          <SocialLink url="https://github.com/username" type="github" />
          <SocialLink
            url="https://www.linkedin.com/in/username"
            type="linkedin"
          />
          <SocialLink url="https://twitter.com/username" type="twitter" />
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
