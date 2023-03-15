import { useLayoutEffect, useState } from "react";
import Slider from "react-slick";
import ArrowBack from "./ArrowBack";
import ArrowNext from "./ArrowNext";
import Card from "./Card";

const Project = ({
  listProject = [
    {
      id: 1,
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
      id: 2,
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
      id: 3,
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
      id: 4,
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
      id: 5,
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
      id: 6,
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
              key={listProject.id}
              image={listProject.image}
              title={listProject.title}
              description={listProject.description}
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
    );
  }

  return (
    <section className="bg-gray-100">
      <div className="container mx-auto px-5 py-2 lg:px-32 lg:pt-12 flex justify-center items-center">
        <div className="m-1 flex flex-wrap md:-m-2 lg:flex-row">
          {listProject.map((project, index) => (
            <Card
              key={listProject.id}
              image={listProject.image}
              title={listProject.title}
              description={listProject.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Project;
