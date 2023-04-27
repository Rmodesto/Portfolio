const GradientSpacer = ({ direction = "ttb" }) => {
  const spacerClasses = `w-full h-48 animate-gradient-move ${
    direction === "ttb" ? "bg-gradient-spacer-ttb" : "bg-gradient-spacer-btt"
  }`;

  return <div className={spacerClasses}></div>; 
};

export default GradientSpacer;
