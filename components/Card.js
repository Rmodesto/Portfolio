import { motion } from "framer-motion";
import React from "react";
import {
  cardVariants,
  imageVariants,
  stackVariants,
  textVariants,
} from "../utils/motion";

const Card = React.forwardRef(
  ({ image, title, description, stack = [] }, ref) => {
    return (
      <motion.div
        ref={ref} // Add the ref here
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
          className="absolute inset-0 p-2 flex flex-col justify-start"
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
  }
);

export default Card;
