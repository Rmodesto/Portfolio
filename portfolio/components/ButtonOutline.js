const ButtonOutline = ({ children, text }) => {
  return (
    <button className="font-medium tracking-wide text-white py-6 px-20 border border-blue hover:bg-blue bg-transparent outline-none rounded-l-full rounded-r-full capitalize hover:bg-green-500 hover:text-white-500 transition-all hover:shadow-green-md ">
      {" "}
      {text}
    </button>
  );
};

export default ButtonOutline;
