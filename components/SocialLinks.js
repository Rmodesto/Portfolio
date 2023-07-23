import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const SocialLink = ({ url, type, variants }) => {
  const getIcon = () => {
    switch (type) {
      case "github":
        return <FaGithub className="w-6 h-6" />;
      case "linkedin":
        return <FaLinkedin className="w-6 h-6" />;

      default:
        return null;
    }
  };

  return (
    <motion.a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      variants={variants}
      whileHover={{ scale: 1.2 }} // Add this line for the hover effect
    >
      {getIcon()}
    </motion.a>
  );
};

export default SocialLink;
