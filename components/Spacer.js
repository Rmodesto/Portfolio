const Spacer = ({ height, gradient }) => {
  const spacerStyle = {
    height: `${height * 0.25}rem`,
    background: gradient,
  };
  return <div style={spacerStyle}></div>;
};

export default Spacer;
