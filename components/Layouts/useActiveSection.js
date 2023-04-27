// useActiveSection.js
import { useEffect, useState } from "react";

const useActiveSection = (sectionIds) => {
  const [activeSection, setActiveSection] = useState(null);

  useEffect(() => {
    const onScroll = () => {
      let currentActiveSection = null;

      sectionIds.forEach((id) => {
        const section = document.getElementById(id);
        if (section) {
          const sectionTop = section.getBoundingClientRect().top;
          if (
            sectionTop <= window.innerHeight * 0.4 &&
            sectionTop >= -window.innerHeight * 0.4
          ) {
            currentActiveSection = id;
          }
        }
      });

      setActiveSection(currentActiveSection);
    };

    window.addEventListener("scroll", onScroll);
    onScroll();

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, [sectionIds]);

  return activeSection;
};

export default useActiveSection;
