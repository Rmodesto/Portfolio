import { motion } from "framer-motion";
import Image from "next/image";
import { useLayoutEffect, useState } from "react";
import Slider from "react-slick";
import ArrowBack from "./ArrowBack";
import ArrowNext from "./ArrowNext";

const Project = ({
  listProject = [
    {
      title: "Ecommerce",
      image: "/assets/couch.png",
      stack: {
        react: "/assets/react.png",
        next: "/assets/next.png",
        tailwind: "/assets/tailwind.png",
      },
      description: "lorem ipsumsd as dff asqqq weer",
    },
    {
      title: "Ecommerce",
      image: "/assets/couch.png",
      stack: {
        react: "/assets/react.png",
        next: "/assets/next.png",
        tailwind: "/assets/tailwind.png",
      },
      description: "lorem ipsumsd as dff asqqq weer",
    },
    {
      title: "Ecommerce",
      image: "/assets/couch.png",
      stack: {
        react: "/assets/react.png",
        next: "/assets/next.png",
        tailwind: "/assets/tailwind.png",
      },
      description: "lorem ipsumsd as dff asqqq weer",
    },
    {
      title: "Ecommerce",
      image: "/assets/couch.png",
      stack: {
        react: "/assets/react.png",
        next: "/assets/next.png",
        tailwind: "/assets/tailwind.png",
      },
      description: "lorem ipsumsd as dff asqqq weer",
    },
    {
      title: "Ecommerce",
      image: "/assets/couch.png",
      stack: {
        react: "/assets/react.png",
        next: "/assets/next.png",
        tailwind: "/assets/tailwind.png",
      },
      description: "lorem ipsumsd as dff asqqq weer",
    },
    {
      title: "Ecommerce",
      image: "/assets/couch.png",
      stack: {
        react: "/assets/react.png",
        next: "/assets/next.png",
        tailwind: "/assets/tailwind.png",
      },
      description: "lorem ipsumsd as dff asqqq weer",
    },
  ],
}) => {
  const [isMobile, setIsMobile] = useState(false);
  const [sliderRef, setSliderRef] = useState(null);
  const [isHovered, setIsHovered] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(-1); // store currently hovered project index
  const [currentProject, setCurrentProject] = useState(null);

  useLayoutEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize(); // initial check
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const handleHover = (event) => {
    const target = event.currentTarget;
    const overlay = target.querySelector(".overlay");
    if (overlay) {
      setIsHovered(true);
      setHoveredIndex(parseInt(target.dataset.index)); // store hovered project index
      setCurrentProject(listProject[hoveredIndex]); // store current project data
      console.log("hoveredIndex");
    }
  };

  const handleLeave = (event) => {
    const target = event.currentTarget;
    const overlay = target.querySelector(".overlay");
    if (overlay) {
      setIsHovered(false);
      setHoveredIndex(-1);
      console.log("hoveredIndex", hoveredIndex);
    }
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
          {listProject.map((project, index) => (
            <div key={index}>
              <Image
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center"
                src={project.image}
                width={300}
                height={300}
                onClick={() => window.open(project.link)}
              />
            </div>
          ))}
        </Slider>
        <div className="flex w-full bg-black-500 items-center justify-end">
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
              <ArrowNext className="h-6 w-6 " />
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <section className="bg-gray-100">
      <div className="container mx-auto px-5 py-2 lg:px-32 lg:pt-12 flex justify-center items-center">
        <div className="m-1 flex flex-wrap md:-m-2 lg:flex-row">
          {listProject.map((project, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.1 }}
              className="flex w-1/3 flex-wrap"
              onMouseEnter={handleHover}
              onMouseLeave={handleLeave}
              data-index={index} // store project index as data attribute
            >
              <div className="w-full p-1 md:p-2">
                <div className="relative">
                  <motion.img
                    alt={project.title}
                    className="block h-full w-full rounded-lg z-5 object-cover object-center"
                    src={project.image}
                    whileHover={{ filter: "blur(5px)" }}
                  />
                  {isHovered && hoveredIndex === index && (
                    <div className="absolute inset-0 flex items-center justify-center overlay">
                      <div>
                        <h3 className="text-lg font-bold">
                          {currentProject?.title}
                        </h3>
                        <p className="mt-1">{currentProject?.description}</p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Project;
