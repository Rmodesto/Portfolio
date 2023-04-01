import p5 from "p5";
import { useEffect, useRef } from "react";
import SketchCubes from "./SketchCubes";

const RotatingCubes = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const myP5 = new p5(SketchCubes, canvasRef.current);
    return () => {
      myP5.remove();
    };
  }, []);

  return <div ref={canvasRef}></div>;
};

export default RotatingCubes;
