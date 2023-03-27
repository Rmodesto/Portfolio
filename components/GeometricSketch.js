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

      // Add a custom dotted ellipse function
      const dottedEllipse = (x, y, w, h, segments, strokeWeight) => {
        p.push();
        p.strokeWeight(strokeWeight);
        p.beginShape();
        for (let i = 0; i < segments; i++) {
          let angle = p.map(i, 0, segments, 0, p.TWO_PI);
          let ex = x + (w / 2) * p.cos(angle);
          let ey = y + (h / 2) * p.sin(angle);
          if (i % 2 === 0) {
            p.vertex(ex, ey);
          } else {
            p.curveVertex(ex, ey);
          }
        }
        p.endShape(p.CLOSE);
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
