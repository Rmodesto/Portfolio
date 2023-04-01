import p5 from "p5";
import { useEffect, useRef } from "react";

const RotatingShapes = () => {
  const myRef = useRef();

  useEffect(() => {
    let myP5 = new p5(sketch, myRef.current);

    return () => {
      myP5.remove();
    };
  }, []);

  const sketch = (p5) => {
    let angle = 0;
    let phase = 0;
    const cubeSize = 50;
    const cubeCount = 3;

    p5.setup = () => {
      p5.createCanvas(377, 377, p5.WEBGL);
      p5.frameRate(30);
      p5.smooth();
    };

    const drawCubeDots = (size, x, y, z, dotSpacing) => {
      const halfSize = size / 2;
      p5.push();
      p5.translate(x, y, z);

      for (let i = -halfSize; i <= halfSize; i += dotSpacing) {
        for (let j = -halfSize; j <= halfSize; j += dotSpacing) {
          for (let k = -halfSize; k <= halfSize; k += dotSpacing) {
            p5.push();
            p5.translate(i, j, k);
            p5.stroke(0, 255, 0);
            p5.strokeWeight(4);
            p5.point(0, 0, 0);
            p5.pop();
          }
        }
      }

      p5.pop();
    };

    const drawCube = (size, x, y, z) => {
      const halfSize = size / 2;
      p5.push();
      p5.translate(x, y, z);
      p5.stroke(255);
      p5.strokeWeight(1);
      p5.noFill();

      const vertices = [
        [-halfSize, -halfSize, -halfSize],
        [halfSize, -halfSize, -halfSize],
        [halfSize, halfSize, -halfSize],
        [-halfSize, halfSize, -halfSize],
        [-halfSize, -halfSize, halfSize],
        [halfSize, -halfSize, halfSize],
        [halfSize, halfSize, halfSize],
        [-halfSize, halfSize, halfSize],
      ];

      const edges = [
        [0, 1],
        [1, 2],
        [2, 3],
        [3, 0],
        [4, 5],
        [5, 6],
        [6, 7],
        [7, 4],
        [0, 4],
        [1, 5],
        [2, 6],
        [3, 7],
      ];

      for (const edge of edges) {
        p5.line(
          vertices[edge[0]][0],
          vertices[edge[0]][1],
          vertices[edge[0]][2],
          vertices[edge[1]][0],
          vertices[edge[1]][1],
          vertices[edge[1]][2]
        );
      }

      p5.pop();
    };

    const drawCubedCubes = () => {
      for (let x = -cubeCount; x <= cubeCount; x++) {
        for (let y = -cubeCount; y <= cubeCount; y++) {
          for (let z = -cubeCount; z <= cubeCount; z++) {
            drawCube(
              cubeSize,
              x * cubeSize * 2,
              y * cubeSize * 2,
              z * cubeSize * 2
            );
          }
        }
      }
    };

    const drawSphericalCubeDots = (size, x, y, z, dotSpacing) => {
      const halfSize = size / 2;
      p5.push();
      p5.translate(x, y, z);

      for (let i = -halfSize; i <= halfSize; i += dotSpacing) {
        for (let j = -halfSize; j <= halfSize; j += dotSpacing) {
          for (let k = -halfSize; k <= halfSize; k += dotSpacing) {
            const d = Math.sqrt(i * i + j * j + k * k);
            if (Math.abs(d - halfSize) < dotSpacing / 2) {
              p5.push();
              p5.translate(i, j, k);
              p5.stroke(0, 255, 0);
              p5.strokeWeight(4);
              p5.point(0, 0, 0);
              p5.pop();
            }
          }
        }
      }

      p5.pop();
    };

    p5.draw = () => {
      p5.background(30);
      p5.rotateX(angle);
      p5.rotateY(angle);
      p5.rotateZ(angle);

      const dotSpacing = 20; // Adjust the spacing between the dots

      if (phase === 0) {
        drawCubeDots(cubeSize, 0, 0, 0, dotSpacing);
      } else if (phase === 1) {
        for (let x = -cubeCount; x <= cubeCount; x++) {
          for (let y = -cubeCount; y <= cubeCount; y++) {
            for (let z = -cubeCount; z <= cubeCount; z++) {
              if (
                x === -cubeCount ||
                x === cubeCount ||
                y === -cubeCount ||
                y === cubeCount ||
                z === -cubeCount ||
                z === cubeCount
              ) {
                drawCubeDots(
                  cubeSize,
                  x * cubeSize,
                  y * cubeSize,
                  z * cubeSize,
                  dotSpacing
                );
              }
            }
          }
        }
      } else {
        for (let x = -cubeCount; x <= cubeCount; x++) {
          for (let y = -cubeCount; y <= cubeCount; y++) {
            for (let z = -cubeCount; z <= cubeCount; z++) {
              if (
                x === -cubeCount ||
                x === cubeCount ||
                y === -cubeCount ||
                y === cubeCount ||
                z === -cubeCount ||
                z === cubeCount
              ) {
                drawSphericalCube(
                  cubeSize,
                  x * cubeSize,
                  y * cubeSize,
                  z * cubeSize,
                  dotSpacing
                );
              }
            }
          }
        }
      }

      // Draw square outline
      p5.stroke(255);
      p5.strokeWeight(1);
      p5.noFill();
      drawCube(cubeSize, 0, 0, 0);

      angle += 0.01;
    };

    p5.mouseClicked = () => {
      phase = (phase + 1) % 3;
    };
  };

  return <div ref={myRef}></div>;
};

export default RotatingShapes;
