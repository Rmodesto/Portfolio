// components/P5Icosahedron.js
import p5 from "p5";
import { useEffect, useRef } from "react";

const P5Icosahedron = () => {
  const canvasRef = useRef(null);

  const sketch = (p) => {
    let icosahedron;

    p.setup = () => {
      p.createCanvas(377, 233, p.WEBGL);
      p.angleMode(p.DEGREES);
      icosahedron = createIcosahedron(p, 150);
    };

    p.draw = () => {
      p.background(200);

      p.rotateX(p.frameCount * 0.01);
      p.rotateY(p.frameCount * 0.01);

      p.strokeWeight(2);
      p.stroke(0);
      p.noFill();

      p.model(icosahedron);
    };
  };

  const createIcosahedron = (p, size) => {
    const phi = (1 + Math.sqrt(5)) / 2;

    const vertices = [
      [-1, phi, 0],
      [1, phi, 0],
      [-1, -phi, 0],
      [1, -phi, 0],

      [0, -1, phi],
      [0, 1, phi],
      [0, -1, -phi],
      [0, 1, -phi],

      [phi, 0, -1],
      [phi, 0, 1],
      [-phi, 0, -1],
      [-phi, 0, 1],
    ];

    const faces = [
      [0, 11, 5],
      [0, 5, 1],
      [0, 1, 7],
      [0, 7, 10],
      [0, 10, 11],

      [1, 5, 9],
      [5, 11, 4],
      [11, 10, 2],
      [10, 7, 6],
      [7, 1, 8],

      [3, 9, 4],
      [3, 4, 2],
      [3, 2, 6],
      [3, 6, 8],
      [3, 8, 9],

      [4, 9, 5],
      [2, 4, 11],
      [6, 2, 10],
      [8, 6, 7],
      [9, 8, 1],
    ];

    const geometry = new p5.Geometry();

    vertices.forEach((vertex) => {
      const [x, y, z] = vertex;
      geometry.vertices.push(new p5.Vector(x * size, y * size, z * size));
    });

    faces.forEach((face) => {
      geometry.faces.push(face);
    });

    geometry.computeNormals();

    return geometry;
  };

  useEffect(() => {
    const p5Instance = new p5(sketch, canvasRef.current);
    return () => p5Instance.remove();
  }, []);

  return <div ref={canvasRef} />;
};

export default P5Icosahedron;
