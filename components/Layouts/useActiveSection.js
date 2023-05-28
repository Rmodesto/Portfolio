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

      // Check if we're in a browser environment
      if (typeof window !== "undefined") {
        // Update the URL without adding a history entry
        if (currentActiveSection) {
          window.history.replaceState(null, null, `#${currentActiveSection}`);
        } else {
          window.history.replaceState(null, null, " ");
        }
      }
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
