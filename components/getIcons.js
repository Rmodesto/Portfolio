import FaReact from "react-icons/fa";
import SiTailwindcss from "react-icons/si";

const getIcons = (stack) => {
  switch (stack) {
    case "react":
      return <FaReact />;
    case "nextjs":
      return <SiNextDotJs />;
    case "tailwind":
      return <SiTailwindcss />;
    default:
      return null;
  }
};

export default getIcons;
