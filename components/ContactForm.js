import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import { useState } from "react";
import { useInView } from "react-intersection-observer";
import { buttonVariants, fadeIn, fadeInUp } from "../utils/motion";

import { sendContactForm } from "../lib/api";

import Spinner from "../components/Spinner";

const RocketSketch = dynamic(() => import("./RocketSketch"), {
  ssr: false,
});

const initValues = { name: "", email: "", subject: "", message: "" };

const initState = { values: initValues };

//Framer Motion Variants

const Contact = () => {
  // Create a reference with the useInView hook
  const [ref, inView] = useInView({
    threshold: 0.1, // Adjust this value to control when the animation starts
  });

  const [state, setState] = useState(initState);
  const { values } = state;
  const [loading, setLoading] = useState(false);
  const [rocketAnimation, setRocketAnimation] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const [showRocket, setShowRocket] = useState(true);

  const handleChange = ({ target }) =>
    setState((prev) => ({
      ...prev,
      values: {
        ...prev.values,
        [target.name]: target.value,
      },
    }));

  const isFormValid = Object.values(values).every((val) => val !== "");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setRocketAnimation(true);

    try {
      await sendContactForm({
        name: e.target.elements.name.value,
        email: e.target.elements.email.value,
        subject: e.target.elements.subject.value,
        message: e.target.elements.message.value,
      });
      setLoading(false);
      alert("Message sent successfully!");
      setState(initState); // Reset the form fields
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
    // Reset the rocket animation state after a delay
    setTimeout(() => {
      setRocketAnimation(false);
    }, 3000);
  };

  return (
    <motion.div
      className="bg-black-500 py-24 px-8"
      ref={ref}
      id="contact"
      variants={fadeInUp}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
    >
      <div className="flex justify-center">
        <motion.h1 className="text-4xl text-white font-bold">Clouds</motion.h1>
      </div>
      <div className="max-w-4xl mx-auto py-8 sm:flex sm:flex-row sm:justify-center">
        <motion.div className="sm:w-1/2 sm:pr-4 relative" variants={fadeInUp}>
          <RocketSketch rocketAnimation={rocketAnimation} />
          {showMessage && (
            <p className="text-white text-center absolute bottom-0 left-1/2 transform -translate-x-1/2">
              Sent! We'll be in touch.
            </p>
          )}
        </motion.div>

        <motion.div className="sm:w-1/2 sm:pl-4">
          <form
            className="flex flex-col space-y-4"
            method="POST"
            onSubmit={handleSubmit}
          >
            <motion.input
              type="email"
              name="email"
              value={values.email}
              onChange={handleChange}
              onBlur={(e) => {
                if (!e.target.value) {
                  e.target.classList.add("border-red-500");
                } else {
                  e.target.classList.remove("border-red-500");
                }
              }}
              id="email"
              placeholder="Email"
              className="border-2 font-acumin font-thin border-gray-500 rounded-lg p-2"
              variants={fadeIn("up", "tween", 0, 0.5)}
              initial="hidden"
              animate={inView ? "show" : "hidden"}
            />
            <motion.input
              type="text"
              name="name"
              value={values.name}
              onChange={handleChange}
              onBlur={(e) => {
                if (!e.target.value) {
                  e.target.classList.add("border-red-500");
                } else {
                  e.target.classList.remove("border-red-500");
                }
              }}
              id="name"
              placeholder="Name"
              className="border-2 font-acumin border-gray-500 rounded-lg p-2"
              variants={fadeIn("up", "tween", 0, 0.5)}
              initial="hidden"
              animate={inView ? "show" : "hidden"}
            />
            <motion.input
              type="text"
              name="subject"
              value={values.subject}
              onChange={handleChange}
              onBlur={(e) => {
                if (!e.target.value) {
                  e.target.classList.add("border-red-500");
                } else {
                  e.target.classList.remove("border-red-500");
                }
              }}
              id="email"
              placeholder="Email"
              className="border-2 font-acumin font-thin border-gray-500 rounded-lg p-2"
              variants={fadeIn("up", "tween", 0, 0.5)}
              initial="hidden"
              animate={inView ? "show" : "hidden"}
            />

            <motion.textarea
              variants={fadeIn("up", "tween", 0, 0.5)}
              initial="hidden"
              animate={inView ? "show" : "hidden"}
              name="message"
              value={values.message}
              onChange={handleChange}
              placeholder="Message"
              className="border-2 font-acumin border-gray-500 rounded-lg p-2"
            />
            {loading ? (
              <Spinner />
            ) : (
              <motion.button
                className="border-2 border-blue text-white hover:bg-blue rounded-lg p-2"
                disabled={!isFormValid}
                type="submit"
                variants={buttonVariants}
                initial="hidden"
                animate={inView ? "show" : "hidden"}
                whileHover="hover"
                whileTap="tap"
              >
                Submit
              </motion.button>
            )}
          </form>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Contact;
