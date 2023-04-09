import dynamic from "next/dynamic";
import { useState } from "react";
import { sendContactForm } from "../lib/api";
import ScrollAnimationWrapper from "./layouts/ScrollAnimationWrapper";
import Spinner from "./Spinner";

const RocketSketch = dynamic(() => import("./RocketSketch"), {
  ssr: false,
});

const initValues = { name: "", email: "", subject: "", message: "" };

const initState = { values: initValues };

const Contact = () => {
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
    <div className="bg-black-500 py-24 px-8" id="contact">
      <div className="flex justify-center">
        <ScrollAnimationWrapper>
          <h1 className="text-4xl text-white font-bold">Contact</h1>
        </ScrollAnimationWrapper>
      </div>
      <div className="max-w-4xl mx-auto py-8 sm:flex sm:flex-row sm:justify-center">
        <div className="sm:w-1/2 sm:pr-4 relative">
          <RocketSketch rocketAnimation={rocketAnimation} />
          {showMessage && (
            <p className="text-white text-center absolute bottom-0 left-1/2 transform -translate-x-1/2">
              Sent! We'll be in touch.
            </p>
          )}
        </div>

        <div className="sm:w-1/2 sm:pl-4">
          <ScrollAnimationWrapper>
            <form
              className="flex flex-col space-y-4"
              method="POST"
              onSubmit={handleSubmit}
            >
              <input
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
                className="border-2 font-acumin border-gray-500 rounded-lg p-2"
              />
              <input
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
              />
              <input
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
                id="subject"
                placeholder="Subject"
                className="border-2 font-acumin border-gray-500 rounded-lg p-2"
              />

              <textarea
                name="message"
                value={values.message}
                onChange={handleChange}
                placeholder="Message"
                className="border-2 font-acumin border-gray-500 rounded-lg p-2"
              />
              {loading ? (
                <Spinner />
              ) : (
                <button
                  className="border-2 border-blue text-white hover:bg-blue rounded-lg p-2"
                  disabled={!isFormValid}
                  type="submit"
                >
                  Submit
                </button>
              )}
            </form>
          </ScrollAnimationWrapper>
        </div>
      </div>
    </div>
  );
};

export default Contact;
