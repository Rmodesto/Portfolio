//motion.js

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

  const exit = {
    opacity: 0,
    transition: { type, delay, duration },
  };

  if (direction === "up") {
    hidden.y = 50;
    show.y = 0;
    exit.y = 50;
  } else if (direction === "right") {
    hidden.x = -50;
    show.x = 0;
    exit.x = -50;
  } else if (direction === "down") {
    hidden.y = -50;
    show.y = 0;
    exit.y = -50;
  } else if (direction === "left") {
    hidden.x = 50;
    show.x = 0;
    exit.x = 50;
  }

  return {
    hidden,
    show,
    exit,
  };
};

export const textVariants = (delay, exitDelay = 0) => ({
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
  exit: {
    y: 50,
    opacity: 0,
    transition: {
      type: "spring",
      duration: 1.25,
      delay: exitDelay,
    },
  },
});

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
  exit: {
    x: direction === "left" ? 100 : direction === "right" ? -100 : 0,
    y: direction === "up" ? 100 : direction === "down" ? -100 : 0,
    opacity: 0,
    transition: {
      type,
      delay,
      duration,
      ease: "easeIn",
    },
  },
});

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
    exit: {
      opacity: 0,
      transition: {
        duration: 0.5,
      },
    },
  };
};

export const textContainer = {
  hidden: {
    opacity: 0,
  },
  show: (i = 1) => ({
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: i * 0.1 },
  }),
  exit: {
    opacity: 0,
  },
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
  exit: {
    opacity: 0,
    y: 20,
  },
};

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
  exit: {
    x: direction === "left" ? "-100%" : "100%",
    rotate: 120,
    transition: {
      type: "spring",
      duration: 1.8,
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
  exit: {
    scale: 0,
    opacity: 0,
    transition: {
      type: "tween",
      duration,
      ease: "easeIn",
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
  exit: {
    opacity: 0,
    y: 50,
    transition: {
      type: "spring",
      stiffness: 80,
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

export const hoverVariants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.5 } },
  exit: { opacity: 0, transition: { duration: 0.5 } },
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
  exit: {
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
  exit: {
    backdropFilter: "none",
    backgroundColor: "transparent",
    transition: { duration: 0.3, ease: "easeInOut" },
  },
};

export const buttonVariants = {
  initial: { scale: 1, opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.5 } },
  hover: { scale: 1.1, transition: { duration: 0.3 } },
  tap: { scale: 0.9, transition: { duration: 0.3 } },
};

const floatingVariants = {
  hidden: { y: -2 },
  show: {
    y: 2,
    transition: {
      duration: 1,
      repeat: Infinity,
      repeatType: "mirror",
      ease: "easeInOut",
    },
  },
};

export const exitVariant = {
  hidden: { opacity: 0, scale: 0.95 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.3 } },
  exit: { opacity: 0, scale: 0.95, transition: { duration: 0.3 } },
};

export const slideInFromRight = (
  type = "tween",
  delay = 0,
  duration = 0.5
) => ({
  hidden: {
    opacity: 0,
    x: 50,
  },
  show: {
    opacity: 1,
    x: 0,
    transition: { type, delay, duration },
  },
  exit: {
    opacity: 0,
    x: 50,
    transition: { type, delay, duration },
  },
});

export const slideInFromLeft = (type = "tween", delay = 0, duration = 0.5) => ({
  hidden: {
    opacity: 0,
    x: -50,
  },
  show: {
    opacity: 1,
    x: 0,
    transition: { type, delay, duration },
  },
  exit: {
    opacity: 0,
    x: -50,
    transition: { type, delay },
  },
});
