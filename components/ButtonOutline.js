const ButtonOutline = ({ children, text }) => {
  return (
    <button className="md:text-xl text-sm md:py-12 py-4 md:px-40 px-14 border border-blue hover:bg-blue bg-transparent outline-none rounded-l-full rounded-r-full text-white capitalize hover:shadow-md hover:text-white-500 transition-all hover:shadow-blue ">
      {" "}
      {text}
    </button>
  );
};

export default ButtonOutline;
