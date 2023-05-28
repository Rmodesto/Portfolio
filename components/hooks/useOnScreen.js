import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

const useOnScreenAnimation = (options) => {
  const [ref, inView] = useInView(options);
  const [animation, setAnimation] = useState("hidden");

  useEffect(() => {
    if (inView) {
      setAnimation("show");
    } else {
      setAnimation("exit");
    }
  }, [inView]);

  return [ref, animation];
};

export default useOnScreenAnimation;
