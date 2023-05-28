import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

const useOnScreenAnimation = ({ threshold, refs, triggerOnce }) => {
  const refsArray = Array.isArray(refs) ? refs : [refs];

  const animations = refsArray.map((ref) => {
    const [inViewRef, inView] = useInView({ threshold, triggerOnce });
    const [animation, setAnimation] = useState("hidden");

    useEffect(() => {
      console.log("inView:", inView); // Log the inView value to check if it's updating correctly
      if (inView) {
        setAnimation("show");
      } else {
        setAnimation("hidden");
      }
    }, [inView]);

    return { ref: inViewRef, animation };
  });

  return animations;
};

export default useOnScreenAnimation;
