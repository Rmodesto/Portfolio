// RocketSketch.js
import p5 from "p5";
import { useEffect, useRef, useState } from "react";

const RocketSketch = ({ rocketAnimation, showMessage }) => {
  const [opacity, setOpacity] = useState(1);
  const sketchRef = useRef();

  useEffect(() => {
    if (showMessage) {
      setOpacity(0);
    } else {
      setOpacity(1);
    }
  }, [showMessage]);

  useEffect(() => {
    const sketch = (p) => {
      let rocket = {
        y: 200,
        x: 100,
      };

      p.setup = () => {
        p.createCanvas(300, 400);
        p.clear();
      };

      p.draw = () => {
        p.clear();
        p.fill("#3A414B");
        // rocket body
        p.rect(rocket.x, rocket.y, 50, 100);
        p.stroke("#3A414B");
        p.strokeWeight(2);
        // rocket cone
        p.triangle(
          rocket.x,
          rocket.y,
          rocket.x + 25,
          rocket.y - 50,
          rocket.x + 50,
          rocket.y
        );
        //rocket fins
        p.triangle(
          rocket.x - 25,
          rocket.y + 100,
          rocket.x,
          rocket.y + 50,
          rocket.x,
          rocket.y + 100
        );
        p.triangle(
          rocket.x + 50,
          rocket.y + 50,
          rocket.x + 75,
          rocket.y + 100,
          rocket.x,
          rocket.y + 100
        );
        // rocket window
        p.fill("#2563EB");
        p.ellipse(rocket.x + 25, rocket.y + 25, 25, 25);
        // rocket fire
        p.fill("#059669");
        p.ellipse(rocket.x + 25, rocket.y + 100, 25, 25);

        // rocket fire animation
        if (rocketAnimation) {
          rocket.y -= 10;
        }
      };
    };

    const myP5 = new p5(sketch, sketchRef.current);

    return () => {
      myP5.remove();
    };
  }, [rocketAnimation]);

  return (
    <div
      ref={sketchRef}
      className={`relative transition-opacity duration-1000 ${
        opacity === 0 ? "opacity-0" : "opacity-100"
      }`}
    >
      {showMessage && (
        <p className="absolute bottom-0 left-1/2 transform -translate-x-1/2 text-white text-center">
          Sent! We'll be in touch.
        </p>
      )}
    </div>
  );
};

export default RocketSketch;