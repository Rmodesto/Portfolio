import p5 from "p5";
import { useEffect, useRef } from "react";

const GeometricSketch = () => {
  const canvasRef = useRef(null);
  const sketchRef = useRef(null);

  useEffect(() => {
    const sketch = (p) => {
      let hexagonSize = 180;
      let circleSize = (hexagonSize * Math.sqrt(3)) / 3;
      let rotationAngle = 40; // Set rotation angle for hexagon and green circles

      p.setup = () => {
        p.createCanvas(400, 400).parent(canvasRef.current);
        p.angleMode(p.DEGREES);
        p.background(255, 255, 255, 0);
      };

      // Add a custom function to draw a dotted line
      const drawDottedLine = (x1, y1, x2, y2, segments, strokeWeight) => {
        p.push();
        p.strokeWeight(strokeWeight);
        for (let i = 0; i < segments; i++) {
          let t = i / (segments - 1);
          let x = p.lerp(x1, x2, t);
          let y = p.lerp(y1, y2, t);
          if (i % 2 === 0) {
            p.point(x, y);
          }
        }
        p.pop();
      };

      p.draw = () => {
        p.background(255, 255, 255, 0);
        p.strokeWeight(1);
        p.stroke(0);
        p.noFill();

        // draw hexagon
        let hexagonX = p.width / 2;
        let hexagonY = p.height / 2 - 10;
        let hexagonRadius = hexagonSize / 2;
        p.beginShape();
        for (let i = 0; i < 6; i++) {
          let angle = 60 * i + rotationAngle; // Add rotation angle to hexagon
          let x = hexagonX + hexagonRadius * p.cos(angle);
          let y = hexagonY + hexagonRadius * p.sin(angle);
          p.vertex(x, y);
        }
        p.endShape(p.CLOSE);

        // draw circle
        let circleX = hexagonX;
        let circleY = hexagonY;
        let circleRadius = circleSize / 2;
        p.fill(255);
        p.strokeWeight(3);
        p.stroke(0);
        p.ellipse(circleX, circleY, circleSize, circleSize);

        // draw three green border circles
        let greenCircleRadius = hexagonRadius / 2.17;

        p.noFill();
        p.stroke(0, 255, 0);
        p.strokeWeight(0.25);

        for (let i = 0; i < 3; i++) {
          let angle = 120 * i - 60 + rotationAngle; // Add rotation angle to green circles
          let x = hexagonX + (hexagonRadius - greenCircleRadius) * p.cos(angle);
          let y = hexagonY + (hexagonRadius - greenCircleRadius) * p.sin(angle);
          p.ellipse(x, y, greenCircleRadius * 2, greenCircleRadius * 2);

          // Calculate the start and end points of the dotted line
          let lineAngle = angle + 180; // Rotate the line to converge on the overlapping vertex
          let lineLength = greenCircleRadius * 2;
          let x1 = x + (lineLength / 2) * p.cos(lineAngle);
          let y1 = y + (lineLength / 2) * p.sin(lineAngle);
          let x2 = x - (lineLength / 2) * p.cos(lineAngle);
          let y2 = y - (lineLength / 2) * p.sin(lineAngle);

          // Draw the dotted line across the diameter of the green circle
          let dottedLineSegments = 20;
          let dottedLineStrokeWeight = 2;
          drawDottedLine(
            x1,
            y1,
            x2,
            y2,
            dottedLineSegments,
            dottedLineStrokeWeight
          );
        }
      };
    };

    sketchRef.current = new p5(sketch);

    return () => {
      sketchRef.current.remove();
    };
  }, []);

  return <div ref={canvasRef}></div>;
};

export default GeometricSketch;
