import { useState } from "react";
import { sendContactForm } from "../lib/api";

import Spinner from "./Spinner";

const initValues = { name: "", email: "", subject: "", message: "" };

const initState = { values: initValues };

const Contact = () => {
  const [state, setState] = useState(initState);
  const { values } = state;
  const [loading, setLoading] = useState(false);

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

    try {
      await sendContactForm({
        name: e.target.elements.name.value,
        email: e.target.elements.email.value,
        subject: e.target.elements.subject.value,
        message: e.target.elements.message.value,
      });
      setLoading(false);
      alert("Message sent successfully!");
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  return (
    <div className="bg-black-500 py-24 px-8" id="contact">
      <div className="flex justify-center">
        <h1 className="text-4xl font-bold">Contact</h1>
      </div>
      <div className="max-w-4xl mx-auto py-8 sm:flex sm:flex-row sm:justify-center">
        <div className="sm:w-1/2 sm:pr-4"></div>
        <div className="sm:w-1/2 sm:pl-4">
          <form
            className="flex flex-col font-acumin space-y-4"
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
              className="border-2 border-gray-500 rounded-lg p-2"
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
              className="border-2 border-gray-500 rounded-lg p-2"
            />

            <textarea
              name="message"
              value={values.message}
              onChange={handleChange}
              placeholder="Message"
              className="border-2 border-gray-500 rounded-lg p-2"
            />
            {loading ? (
              <Spinner />
            ) : (
              <button
                className="border-2 border-blue font-nasalization text-white hover:bg-blue rounded-lg p-2"
                disabled={!isFormValid}
                type="submit"
              >
                Submit
              </button>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
