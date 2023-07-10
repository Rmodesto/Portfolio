// Logo.js

const Logo = ({ className }) => {
  return (
    <div className={`text-white font-bold ${className}`}>
      <span className="text-green">_</span>
      <span className="text-blue">R</span>
      <span className="text-blue">M</span>
    </div>
  );
};

export default Logo;
