const GradientSpacer = () => {
  const svgBackground = {
    backgroundImage: `url(/assets/polygrids.svg)`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  };

  return <div className="w-full h-48" style={svgBackground}></div>;
};

export default GradientSpacer;
