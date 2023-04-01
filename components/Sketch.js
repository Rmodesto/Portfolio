import p5 from "p5";
import { useEffect, useRef } from "react";

const Sketch = (p) => {
  const myRef = useRef();

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    let myP5;

    const sketch = (p) => {
      const colors = {
        blue: "#1fb6ff",
        pink: "#ff49db",
        orange: "#ff7849",
        green: "#13ce66",
        gray: "#8492a6",
        "gray-light": "#d3dce6",
        "gray-dark": "#273444",
      };
      let dots = [];

      class Dot {
        constructor() {
          this.x = p.random(p.width);
          this.y = p.random(p.height);
          this.size = p.random(0.5, 8);
          this.color = p.random(Object.values(colors));
          this.opacity = p.random(255);
          this.speedX = p.random(-0.5, 0.5);
          this.speedY = p.random(-0.5, 0.5);
        }

        update() {
          this.x += this.speedX;
          this.y += this.speedY;

          if (this.x < 0 || this.x > p.width) {
            this.speedX *= -1;
          }

          if (this.y < 0 || this.y > p.height) {
            this.speedY *= -1;
          }
        }

        display() {
          p.fill(this.color + this.opacity.toString(16));
          p.ellipse(this.x, this.y, this.size);
        }
      }

      // ...

      p.setup = () => {
        p.createCanvas(p.windowWidth, p.windowHeight);
        p.canvas.style.position = "absolute";
        p.canvas.style.zIndex = "-1";
        p.frameRate(30);
        for (let i = 0; i < 100; i++) {
          dots.push(new Dot());
        }
      };

      // ...

      p.draw = () => {
        p.background("#252c38"); // Set the background to transparent
        for (let dot of dots) {
          dot.update();
          dot.display();
        }
      };

      p.windowResized = () => {
        p.resizeCanvas(p.windowWidth, p.windowHeight);
      };
    };

    myP5 = new p5(sketch, myRef.current);

    myP5.canvas.style.position = "absolute";
    myP5.canvas.style.zIndex = "-1";
    myP5.canvas.style.top = "0";
    myP5.canvas.style.left = "0";

    return () => {
      myP5.remove();
    };
  }, []);

  return <div ref={myRef} />;
};

export default Sketch;
