import { useScroll, useTransform } from "framer-motion";
import React, { cloneElement, useRef } from "react";

function useParallax(value, distance) {
  return useTransform(value, [0, 2], [-distance, distance]);
}

const ParallaxWrapper = ({ children, distance }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });

  const parallaxValue = useParallax(scrollYProgress, distance);

  return (
    <div ref={ref}>
      {React.Children.map(children, (child) =>
        cloneElement(child, {
          style: { ...child.props.style, y: parallaxValue },
        })
      )}
    </div>
  );
};

export default ParallaxWrapper;
