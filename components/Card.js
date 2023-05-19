//Card.js
import { motion } from "framer-motion";
import React, { useState } from "react";
import { cardVariants, hoverVariants, imageVariants } from "../utils/motion";

const Card = React.forwardRef(
  ({ image, title, description, stack = [] }, ref) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
      <motion.div
        ref={ref}
        className="rounded-md shadow-md overflow-hidden relative"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        variants={cardVariants}
        initial="hidden"
        animate="show"
        whileHover="hover"
      >
        <motion.img
          className="w-full object-cover"
          src={image}
          alt={title}
          variants={imageVariants}
          initial="initial"
          animate={isHovered ? "hover" : "initial"}
        />

        <motion.div
          className="absolute inset-0 p-2 flex flex-col justify-center items-center text-center"
          variants={hoverVariants}
          initial="hidden"
          animate={isHovered ? "show" : "hidden"} // use isHovered state to control animation
        >
          <h3 className="text-xl font-semibold">{title}</h3>
          <p className="text-gray-600">{description}</p>
          <div className="flex justify-center items-center space-x-2">
            {stack}
          </div>
        </motion.div>
      </motion.div>
    );
  }
);

export default Card;
