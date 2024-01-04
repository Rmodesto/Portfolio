//Projects.js
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { FaReact } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { useInView } from "react-intersection-observer";
import Slider from "react-slick";
import { slideInFromLeft, slideInFromRight } from "../utils/motion";
import ArrowBack from "./ArrowBack";
import ArrowNext from "./ArrowNext";
import Card from "./Card";

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

const Project = () => {
  // Create refs for each component you want to animate
  const ref1 = useRef();
  const ref2 = useRef();

  const listProject = [
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
  ];

  // Use the hook with your refs and threshold
  const [inViewRef1, inView1] = useInView({
    threshold: 0.1, // Set the desired threshold value
    triggerOnce: true, // Set the desired triggerOnce value
  });
  const [inViewRef2, inView2] = useInView({
    threshold: 0.1, // Set the desired threshold value
    triggerOnce: true, // Set the desired triggerOnce value
  });

  const cardRefs = listProject.map(() => useRef());

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

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "10px",
    swipeToSlide: true,
    focusOnSelect: true,
    adaptiveHeight: true,
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
    <motion.section className="bg-black-500  pt-0.5 py-24" id="projects">
      <div className="flex flex-wrap -mx-2 md:-mx-4">
        <AnimatePresence>
          <motion.div
            className="w-full md:w-1/3 px-2 md:px-4 mb-4 md:mb-8"
            ref={inViewRef1}
            initial="hidden"
            animate={inView1 ? "show" : "exit"}
            exit="exit"
            variants={slideInFromRight()} // Update with your desired motion variants
          >
            {/* Content for ref1 */}
          </motion.div>
          <motion.div
            className="w-full md:w-1/3 px-2 md:px-4 mb-4 md:mb-8"
            ref={inViewRef2}
            initial="hidden"
            animate={inView2 ? "show" : "exit"}
            exit="exit"
            variants={slideInFromLeft()} // Update with your desired motion variants
          >
            {/* Content for ref2 */}
          </motion.div>
          {listProject.map((project, index) => {
            const cardRef = cardRefs[index];
            const [inViewRef, inView] = useInView({
              threshold: 0.1, // Set the desired threshold value
              triggerOnce: true, // Set the desired triggerOnce value
            });

            const slideInVariant =
              index < 3 ? slideInFromRight() : slideInFromLeft();

            return (
              <motion.div
                key={project.id}
                className="w-full md:w-1/3 px-2 md:px-4 mb-4 md:mb-8"
                ref={cardRef}
                initial="hidden"
                animate={inView ? "show" : "exit"}
                exit="exit"
                variants={slideInVariant} // Update with your desired motion variants
              >
                   return (
              <motion.div
                key={project.id}
                className="w-full md:w-1/3 px-2 md:px-4 mb-4 md:mb-8"
                ref={cardRef}
                initial="hidden"
                animate={animation}
                exit="exit"
                variants={slideInVariant}
              >
                <Card
                  key={project.id}
                  image={project.image}
                  title={project.title}
                  description={project.description}
                  stack={project.stack.map((stack) => getIcon(stack)) || []}
                />
              </motion.div>
            );
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>
    </motion.section>
  );
};

export default Project;