import { motion } from "framer-motion";

const Card = ({ image, title, description, stack = [] }) => {
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

  const stackVariants = {
    hover: {
      opacity: 1,
      transition: { duration: 0.3 },
    },
    initial: {
      opacity: 0,
      transition: { duration: 0.3 },
    },
  };

  return (
    <motion.div
      className="rounded-md shadow-md overflow-hidden relative"
      variants={cardVariants}
      initial="initial"
      whileHover="hover"
    >
      <motion.img
        className="w-full object-cover"
        src={image}
        alt={title}
        variants={imageVariants}
      />

      <motion.div
        className="absolute inset-0 p-2 flex flex-col justify-end"
        variants={textVariants}
      >
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="text-gray-600">{description}</p>
        <motion.div variants={stackVariants} className="text-black">
          {/*when card is hovered show react-icons */}
          <div className="flex justify-center items-center space-x-2">
            {stack}
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Card;
