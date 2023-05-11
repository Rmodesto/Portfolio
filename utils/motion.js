export const navVariants = {
  hidden: {
    opacity: 0,
    y: -50,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 140,
    },
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 80,
      delay: 1,
    },
  },
};

export const slideIn = (
  direction = "up",
  type = "tween",
  delay = 0,
  duration = 0.5
) => {
  const hidden = {
    opacity: 0,
  };

  const show = {
    opacity: 1,
    transition: { type, delay, duration },
  };

  if (direction === "up") {
    hidden.y = 50;
    show.y = 0;
  } else if (direction === "right") {
    hidden.x = -50;
    show.x = 0;
  } else if (direction === "down") {
    hidden.y = -50;
    show.y = 0;
  } else if (direction === "left") {
    hidden.x = 50;
    show.x = 0;
  }

  return {
    hidden,
    show,
  };
};

// motion.js

export const staggerContainer = (
  delayChildren = 0.2,
  staggerChildren = 0.1
) => {
  return {
    hidden: {
      opacity: 0,
    },
    show: {
      opacity: 1,
      transition: {
        delayChildren,
        staggerChildren,
      },
    },
  };
};

export const textVariant = (delay) => ({
  hidden: {
    y: 50,
    opacity: 0,
  },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      duration: 1.25,
      delay,
    },
  },
});

export const textContainer = {
  hidden: {
    opacity: 0,
  },
  show: (i = 1) => ({
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: i * 0.1 },
  }),
};

export const textVariant2 = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: "tween",
      ease: "easeIn",
    },
  },
};

export const fadeIn = (direction, type, delay, duration) => ({
  hidden: {
    x: direction === "left" ? 100 : direction === "right" ? -100 : 0,
    y: direction === "up" ? 100 : direction === "down" ? -100 : 0,
    opacity: 0,
  },
  show: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      type,
      delay,
      duration,
      ease: "easeOut",
    },
  },
});

export const geometricVariants = (direction) => ({
  hidden: {
    x: direction === "left" ? "-100%" : "100%",
    rotate: 120,
  },
  show: {
    x: 0,
    rotate: 0,
    transition: {
      type: "spring",
      duration: 1.8,
      delay: 0.5,
    },
  },
});

export const zoomIn = (delay, duration) => ({
  hidden: {
    scale: 0,
    opacity: 0,
  },
  show: {
    scale: 1,
    opacity: 1,
    transition: {
      type: "tween",
      delay,
      duration,
      ease: "easeOut",
    },
  },
});

export const footerVariants = {
  hidden: {
    opacity: 0,
    y: 50,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 140,
    },
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 80,
      delay: 0.5,
    },
  },
};

export const cardVariants = {
  hover: {
    scale: 1.05,
    transition: { duration: 0.3, ease: "easeInOut" },
  },
  initial: {
    scale: 1,
    transition: { duration: 0.3, ease: "easeInOut" },
  },
};

export const imageVariants = {
  hover: {
    filter: "blur(10px)",
    transition: { duration: 0.3, ease: "easeInOut" },
  },
  initial: {
    filter: "blur(0px)",
    transition: { duration: 0.3, ease: "easeInOut" },
  },
};

export const textVariants = {
  hover: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.3, ease: "easeInOut" },
  },
  initial: {
    opacity: 0,
    y: 50,
    transition: { duration: 0.3, ease: "easeInOut" },
  },
};

export const stackVariants = {
  hover: {
    opacity: 1,
    transition: { duration: 0.3, ease: "easeInOut" },
  },
  initial: {
    opacity: 0,
    transition: { duration: 0.3, ease: "easeInOut" },
  },
};

export const glassEffectVariants = {
  hover: {
    backdropFilter: "blur(10px)",
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    transition: { duration: 0.3, ease: "easeInOut" },
  },
  initial: {
    backdropFilter: "none",
    backgroundColor: "transparent",
    transition: { duration: 0.3, ease: "easeInOut" },
  },
};
