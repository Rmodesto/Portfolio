import { useEffect, useState } from "react";

function useScroll() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    // Ensure the code only runs on the client-side
    if (typeof window === "undefined") {
      return;
    }

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return [scrollY];
}

export default useScroll;
