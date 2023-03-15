import { motion } from "framer-motion";

const Card = ({ image, title, description }) => {
  const cardVariants = {
    hover: {
      scale: 1.05,
      transition: { duration: 0.3 },
    },
    initial: {
      scale: 1,
      transition: { duration: 0.3 },
    },
  };

  const imageVariants = {
    hover: {
      filter: "blur(10px)",
      transition: { duration: 0.3 },
    },
    initial: {
      filter: "blur(0px)",
      transition: { duration: 0.3 },
    },
  };

  const textVariants = {
    hover: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3 },
    },
    initial: {
      opacity: 0,
      y: 50,
      transition: { duration: 0.3 },
    },
  };

  return (
    <motion.div
      className="bg-white p-4 rounded-md shadow-md overflow-hidden relative"
      variants={cardVariants}
      initial="initial"
      whileHover="hover"
    >
      <motion.img
        className="w-full h-64 object-cover"
        src={image}
        alt={title}
        variants={imageVariants}
      />
      <motion.div className="mt-4" variants={textVariants}>
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </motion.div>
    </motion.div>
  );
};

export default Card;
