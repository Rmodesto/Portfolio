import { useState } from "react";
import ArrowBack from "./ArrowBack";
import ArrowNext from "./ArrowNext";
import ProjectCard from "./ProjectCard";

import Slider from "react-slick";

const Project = ({
  listProject = [
    {
      name: "Ecommerce",
      image: "/assets/couch.png",
      stack: {
        react: "/assets/react.png",
        next: "/assets/next.png",
        tailwind: "/assets/tailwind.png",
      },
      project: "lorem ipsumsd as dff asqqq weer",
    },
    {
      name: "Soul Amiga",
      image: "/assets/ecom.png",
      stack: {
        react: "/assets/react.png",
        next: "/assets/next.png",
        tailwind: "/assets/tailwind.png",
      },
      project: "lorem ipsumsd as dff asqqq weer",
    },
    {
      name: "Crud App",
      image: "/assets/couch.png",
      stack: {
        react: "/assets/react.png",
        next: "/assets/next.png",
        tailwind: "/assets/tailwind.png",
      },
      project: "lorem ipsumsd as dff asqqq weer",
    },
    {
      name: "Baseball game",
      image: "/assets/ecom.png",
      stack: {
        react: "/assets/react.png",
        next: "/assets/next.png",
        tailwind: "/assets/tailwind.png",
      },
      project: "lorem ipsumsd as dff asqqq weer",
    },
    {
      name: "Ai Chatbot",
      image: "/assets/ecom.png",
      stack: {
        react: "/assets/react.png",
        next: "/assets/next.png",
        tailwind: "/assets/tailwind.png",
      },
      project: "lorem ipsumsd as dff asqqq weer",
    },
  ],
}) => {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const [sliderRef, setSliderRef] = useState(null);
  const [activeIndex, setActiveIndex] = useState(null);

  const handleMouseEnter = (index) => {
    setActiveIndex(index);
  };

  const handleMouseLeave = () => {
    setActiveIndex(null);
  };

  const cardStyle = (image) => ({
    backgroundImage: `url(${image})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    minHeight: "144px",
    position: "relative",
    transition: "all 0.3s ease-in-out",
    ":before": {
      content: '""',
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      backgroundColor: "rgba(0, 0, 0, 0.4)",
      opacity: 0,
      zIndex: 1,
      transition: "all 0.3s ease-in-out",
      backdropFilter: "blur(8px)",
      filter: "blur(8px)",
    },
    ":hover:before": {
      opacity: 1,
    },
    ":hover .card-content": {
      transform: "translateY(0)",
      opacity: 1,
      visibility: "visible",
    },
  });

  return (
    <>
      <div className="mx-auto" id="Projects">
        <Slider
          {...settings}
          arrows={false}
          ref={setSliderRef}
          className="flex items-stretch justify-items-stretch bg-white"
          id="projects"
        >
          {listProject.map((project, index) => (
            <ProjectCard
              key={index}
              project={project}
              index={index}
              activeIndex={activeIndex}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              style={{ ...cardStyle(project.image) }}
            />
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
    </>
  );
};

export default Project;
