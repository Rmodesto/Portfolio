import { useEffect, useState } from "react";
import { FaReact } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import Slider from "react-slick";
import ArrowBack from "./ArrowBack";
import ArrowNext from "./ArrowNext";
import Card from "./Card";
import ScrollAnimationWrapper from "./layouts/ScrollAnimationWrapper";

const getIcon = (stack) => {
  switch (stack) {
    case "react":
      return <FaReact key={stack} />;

    case "tailwind":
      return <SiTailwindcss key={stack} />;
    default:
      return null;
  }
};

const Project = ({
  listProject = [
    {
      id: 1,
      title: "Ecommerce",
      image: "/assets/auto.webp",
      stack: ["react", "nextjs", "tailwind"],
      description: "lorem ipsumsd as dff asqqq weer",
    },
    {
      id: 2,
      title: "Ecommerce",
      image: "/assets/auto.webp",
      stack: ["react", "nextjs", "tailwind"],
      description: "lorem ipsumsd as dff asqqq weer",
    },
    {
      id: 3,
      title: "Ecommerce",
      image: "/assets/og.webp",
      stack: ["react", "nextjs", "tailwind"],
      description: "lorem ipsumsd as dff asqqq weer",
    },
    {
      id: 4,
      title: "Ecommerce",
      image: "/assets/down.webp",
      stack: ["react", "nextjs", "tailwind"],
      description: "lorem ipsumsd as dff asqqq weer",
    },
    {
      id: 5,
      title: "Ecommerce",
      image: "/assets/porsh.webp",
      stack: ["react", "nextjs", "tailwind"],
      description: "lorem ipsumsd as dff asqqq weer",
    },
    {
      id: 6,
      title: "Ecommerce",
      image: "/assets/web1.webp",
      stack: ["react", "nextjs", "tailwind"],
      description: "lorem ipsumsd as dff asqqq weer",
    },
    // Your project data here
  ],
}) => {
  const [isMobile, setIsMobile] = useState(false);
  const [sliderRef, setSliderRef] = useState(null);

  useEffect(() => {
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
      <div className="w-full" id="projects">
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
        <div className="flex w-full bg-black-100 items-center justify-center">
          <div className="flex flex-none justify-between w-auto mt-14">
            <div
              className="mx-4 flex items-center justify-center h-14 w-14 rounded-full bg-white border-green-500 border hover:bg-green-500 hover:text-white-500 transition-all text-green-500 cursor-pointer"
              onClick={sliderRef?.slickPrev}
            >
              <ArrowBack className="h-6 w-6 " />
            </div>
            <div
              className="flex items-center justify-center h-14 w-14 rounded-full bg-white border-green-500 border hover:bg-green-500 hover:text-white-500 transition-all text-green-500 cursor-pointer"
              onClick={sliderRef?.slickNext}
            >
              <ArrowNext className="h-6 w-6" />
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <section className="bg-black-500  pt-0.5 py-24" id="projects">
      <div className="container mx-auto px-5 lg:px-32 ">
        <div className="flex flex-wrap -mx-2 md:-mx-4">
          {listProject.map((project, index) => {
            if (index < 6) {
              return (
                <div
                  key={project.id}
                  className="w-full md:w-1/3 px-2 md:px-4 mb-4 md:mb-8"
                >
                  <ScrollAnimationWrapper>
                    <div className="h-full">
                      <Card
                        key={project.id}
                        image={project.image}
                        title={project.title}
                        description={project.description}
                        stack={
                          project.stack.map((stack) => getIcon(stack)) || []
                        }
                      />
                    </div>
                  </ScrollAnimationWrapper>
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
