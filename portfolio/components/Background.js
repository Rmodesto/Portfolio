// background.js

export default function sketch(p) {
  let container;

  p.setup = function () {
    container = document.getElementById("background-container");
    p.createCanvas(container.offsetWidth, container.offsetHeight);
    p.background("bg-transparent"); // blue background
  };

  p.draw = function () {
    p.stroke("text-white"); // white lines and dots
    p.strokeWeight(1);

    // draw lines
    for (let i = 0; i < 50; i++) {
      let x1 = p.random(p.width);
      let y1 = p.random(p.height);
      let x2 = p.random(p.width);
      let y2 = p.random(p.height);
      p.line(x1, y1, x2, y2);
    }

    // draw dots
    for (let i = 0; i < 100; i++) {
      let x = p.random(p.width);
      let y = p.random(p.height);
      p.point(x, y);
    }
  };
}
