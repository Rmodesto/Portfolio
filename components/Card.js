// Card.js
import { motion } from "framer-motion";
import React, { useState } from "react";
import { cardVariants, hoverVariants, imageVariants } from "../utils/motion";

const Card = React.forwardRef(
  ({ image, title, description, stack = [], href }, ref) => {
    const [isHovered, setIsHovered] = useState(false);

    // handle click event
    const handleClick = () => {
      window.open(href, "_blank");
    };

    return (
      <motion.div
        ref={ref}
        className="rounded-md shadow-md overflow-hidden relative"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={handleClick} // added onClick handler
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
          className={`absolute inset-0 transition-all duration-200 ${
            isHovered ? "backdrop-blur-md bg-black bg-opacity-30" : ""
          }`}
        />

        <motion.div
          className="absolute inset-0 p-2 flex flex-col justify-center items-center text-center text-3xl"
          variants={hoverVariants}
          initial="hidden"
          animate={isHovered ? "show" : "hidden"} // use isHovered state to control animation
        >
          <h3 className="font-semibold underline underline-offset-3 text-white">
            {title}
          </h3>
          <p className="text-white font-acumin text-xl">{description}</p>
          <div className="flex justify-center items-center text-blue text-3xl space-x-2">
            {stack}
          </div>
        </motion.div>
      </motion.div>
    );
  }
);

Card.displayName = "Card";

export default Card;
