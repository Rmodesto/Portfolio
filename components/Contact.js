import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import { useEffect, useRef, useState } from "react";
import { useInView } from "react-intersection-observer";
import { sendContactForm } from "../lib/api";
import { buttonVariants, fadeIn, fadeInUp } from "../utils/motion";

import Spinner from "./Spinner";

const RocketSketch = dynamic(() => import("./RocketSketch"), {
  ssr: false,
});

const initValues = { name: "", email: "", subject: "", message: "" };
const initErrors = { name: "", email: "", subject: "", message: "" };
const initState = { values: initValues, errors: initErrors };

const Contact = () => {
  const sketchRef = useRef(null);

  // Create a reference with the useInView hook
  const [ref, inView] = useInView({
    threshold: 0.1, // Adjust this value to control when the animation starts
  });

  const [state, setState] = useState(initState);
  const { values, errors } = state;
  const [loading, setLoading] = useState(false);
  const [rocketAnimation, setRocketAnimation] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const [showRocket, setShowRocket] = useState(true);

  const validateField = (name, value) => {
    let errorMsg = "";
    // check if the value is empty
    if (!value.trim()) {
      errorMsg = "This field cannot be empty.";
    }

    setState((prev) => ({
      ...prev,
      errors: {
        ...prev.errors,
        [name]: errorMsg,
      },
    }));
    return errorMsg;
  };

  const handleChange = ({ target }) => {
    const { name, value } = target;

    let isValid = true;
    let errorMessage = "";
    switch (name) {
      case "email":
        isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
        errorMessage = !isValid ? "Please enter a valid email." : "";
        break;
      case "name":
        isValid = /^[a-zA-Z\s]*$/.test(value);
        errorMessage = !isValid
          ? "Name can contain only alphabets and spaces."
          : "";
        break;
      case "subject":
        isValid = /^[a-zA-Z0-9\s]*$/.test(value);
        errorMessage = !isValid
          ? "Subject can contain only alphanumeric characters and spaces."
          : "";
        break;
      case "message":
        isValid = /^[a-zA-Z0-9\s]*$/.test(value);
        errorMessage = !isValid
          ? "Message can contain only alphanumeric characters and spaces."
          : "";
        break;
    }

    setState((prev) => ({
      ...prev,
      values: {
        ...prev.values,
        [name]: value,
      },
      errors: {
        ...prev.errors,
        [name]:
          errorMessage || (value === "" ? "This field cannot be empty." : ""),
      },
    }));
  };

  const isFormValid = Object.values(values).every((val) => val !== "");

  // Add an effect that listens for changes to the errors state
  useEffect(() => {
    const hasErrors = Object.values(errors).some((error) => error !== "");
    if (hasErrors) {
      setLoading(false);
    }
  }, [errors]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setRocketAnimation(true);

    // check for empty fields here:
    const emptyFields = Object.entries(values).filter(
      ([key, value]) => value === ""
    );
    if (emptyFields.length > 0) {
      const newErrors = { ...errors };
      emptyFields.forEach(([key]) => {
        newErrors[key] = "This field cannot be empty.";
      });
      setState((prev) => ({ ...prev, errors: newErrors }));
      setLoading(false);
      return; // Do not proceed with form submission.
    }

    try {
      await sendContactForm({
        name: e.target.elements.name.value,
        email: e.target.elements.email.value,
        subject: e.target.elements.subject.value,
        message: e.target.elements.message.value,
      });

      setLoading(false);
      setShowMessage(true);
      alert("Message sent successfully!");
      setState(initState); // Reset the form fields
    } catch (error) {
      setLoading(false);
      // Set the error message in the errors state
      setState((prev) => ({
        ...prev,
        errors: {
          ...prev.errors,
          message: "Form submission failed!",
        },
      }));
      console.log(error);
    }
    // Reset the rocket animation state after a delay
    setTimeout(() => {
      setRocketAnimation(false);
      setShowMessage(false); // Hide the message
    }, 3000);
  };

  return (
    <div>
      <motion.div
        className="bg-black-500  py-24 px-8"
        ref={ref}
        id="contact"
        variants={fadeInUp}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        <div className="flex justify-start"></div>
        <div className="max-w-4xl mx-auto py-8 sm:flex sm:flex-row sm:justify-center">
          <motion.div className="sm:w-1/2 sm:pr-8 relative" variants={fadeInUp}>
            <RocketSketch
              rocketAnimation={rocketAnimation}
              sketchRef={sketchRef}
            />

            {showMessage && (
              <p className="text-white text-center text-xl absolute bottom-0 left-1/2 transform -translate-x-1/2">
                Sent! We&apos;ll be in touch.
              </p>
            )}
          </motion.div>

          <motion.div className="sm:w-1/2 sm:pl-4">
            <form
              className="flex flex-col space-y-4 placeholder:font-thin font-Verdana font-thin"
              method="POST"
              onSubmit={handleSubmit}
            >
              <motion.input
                type="email"
                name="email"
                value={values.email}
                onChange={handleChange}
                onBlur={(e) => {
                  const errorMsg = validateField(e.target.name, e.target.value);
                  if (errorMsg) {
                    e.target.classList.add("border-rose");
                  } else {
                    e.target.classList.remove("border-rose");
                  }
                }}
                id="email"
                placeholder="Email"
                className="border-2 font-acumin  tracking-widest border-gray-500 rounded-lg p-2"
                variants={fadeIn("up", "tween", 0, 0.5)}
                initial="hidden"
                animate={inView ? "show" : "hidden"}
              />
              {errors.email && <div className="text-rose">{errors.email}</div>}
              <motion.input
                type="text"
                name="name"
                value={values.name}
                onChange={handleChange}
                onBlur={(e) => {
                  if (!e.target.value) {
                    e.target.classList.add("border-red-500");
                  } else {
                    e.target.classList.remove("border-rose");
                  }
                }}
                id="name"
                placeholder="Name"
                className="border-2 font-acumin font-thin tracking-widest border-gray-500 rounded-lg p-2"
                variants={fadeIn("up", "tween", 0, 0.5)}
                initial="hidden"
                animate={inView ? "show" : "hidden"}
              />
              {errors.name && <div className="text-rose">{errors.name}</div>}
              <motion.input
                type="text"
                name="subject"
                value={values.subject}
                onChange={handleChange}
                onBlur={(e) => {
                  if (!e.target.value) {
                    e.target.classList.add("border-rose");
                  } else {
                    e.target.classList.remove("border-rose");
                  }
                }}
                id="subject"
                placeholder="Subject"
                className="border-2 font-acumin  tracking-widest border-gray-500 rounded-lg p-2"
                variants={fadeIn("up", "tween", 0, 0.5)}
                initial="hidden"
                animate={inView ? "show" : "hidden"}
              />
              {errors.subject && (
                <div className="text-rose">{errors.subject}</div>
              )}

              <motion.textarea
                variants={fadeIn("up", "tween", 0, 0.5)}
                initial="hidden"
                animate={inView ? "show" : "hidden"}
                name="message"
                value={values.message}
                onChange={handleChange}
                placeholder="Message"
                className="border-2 font-acumin  tracking-widest border-gray-500 rounded-lg p-2"
              />
              {errors.message && (
                <div className="text-rose">{errors.message}</div>
              )}
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
    </div>
  );
};

export default Contact;
