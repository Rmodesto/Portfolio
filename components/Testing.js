 import { useLayoutEffect, useState } from "react";

import DiNextjs from "react-icons/di";
import FaReact from "react-icons/fa";
import SiTailwindcss from "react-icons/si";
import Slider from "react-slick";
import Card from "./Card";

const Project = ({
  listProject = [
    {
      id: 1,
      title: "Ecommerce",
      image: "/assets/auto.webp",
      stack: { react: FaReact, nextjs: DiNextjs, tailwind: SiTailwindcss },
      description: "lorem ipsumsd as dff asqqq weer",
    },
    {
      id: 2,
      title: "Ecommerce",
      image: "/assets/auto.webp",
      stack: { react: FaReact, nextjs: DiNextjs, tailwind: SiTailwindcss },
      description: "lorem ipsumsd as dff asqqq weer",
    },
    {
      id: 3,
      title: "Ecommerce",
      image: "/assets/og.webp",
      stack: { react: FaReact, nextjs: DiNextjs, tailwind: SiTailwindcss },
      description: "lorem ipsumsd as dff asqqq weer",
    },
    {
      id: 4,
      title: "Ecommerce",
      image: "/assets/down.webp",
      stack: { react: FaReact, nextjs: DiNextjs, tailwind: SiTailwindcss },
      description: "lorem ipsumsd as dff asqqq weer",
    },
    {
      id: 5,
      title: "Ecommerce",
      image: "/assets/porsh.webp",
      stack: { react: FaReact, nextjs: DiNextjs, tailwind: SiTailwindcss },
      description: "lorem ipsumsd as dff asqqq weer",
    },
    {
      id: 6,
      title: "Ecommerce",
      image: "/assets/web1.webp",
      stack: { react: FaReact, nextjs: DiNextjs, tailwind: SiTailwindcss },
      description: "lorem ipsumsd as dff asqqq weer",
    },
    // Your project data here
  ],
}) => {
  const [isMobile, setIsMobile] = useState(false);
  const [sliderRef, setSliderRef] = useState(null);

  useLayoutEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize(); // initial check
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const firstRow = listProject.slice(0, 3);
  const secondRow = listProject.slice(3, 6);

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  if (isMobile) {
    return (
      <div className="w-full">
        <Slider
          {...sliderSettings}
          dots={true}
          arrows={false}
          ref={setSliderRef}
        >
          {listProject.map((project) => (
            <Card
              key={project.id}
              image={project.image}
              title={project.title}
              description={project.description}
            />
          ))}
        </Slider>
        {/* Your slider controls */}
      </div>
    );
  }

  return (
    <section className="bg-gray-100">
      <div className="container mx-auto px-5 py-2 lg:px-32 lg:pt-12">
        <div className="flex flex-wrap -mx-2 md:-mx-4">
          {listProject.map((project, index) => {
            if (index < 6) {
              return (
                <div
                  key={project.id}
                  className="w-full md:w-1/3 px-2 md:px-4 mb-4 md:mb-8"
                >
                  <div className="min-h-max">
                    <Card
                      key={project.id}
                      image={project.image}
                      title={project.title}
                      description={project.description}
                      stack={[
                        project.stack.react,
                        project.stack.nextjs,
                        project.stack.tailwind,
                      ]}
                    />
                  </div>
                </div>
              );
            }
          })}
        </div>
      </div>
    </section>
  );
};

export default Project;

