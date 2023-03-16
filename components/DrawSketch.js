export default function DrawSketch(p5) {
  // Your previous p5.js sketch code.
  const sketch = (p5) => {
    let nodes = [];
    let maxNodes = 40;
    let nodeRadius = 3;
    let maxDistance = 200;

    p5.setup = () => {
      p5.createCanvas(p5.windowWidth, p5.windowHeight);
      for (let i = 0; i < maxNodes; i++) {
        nodes.push(new Node(p5.random(p5.width), p5.random(p5.height)));
      }
    };

    p5.windowResized = () => {
      p5.resizeCanvas(p5.windowWidth, p5.windowHeight);
    };

    p5.draw = () => {
      p5.background("rgba(0, 0, 0, 0.3)");
      nodes.forEach((node) => {
        node.update();
        node.display();
      });

      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          let d = p5.dist(nodes[i].x, nodes[i].y, nodes[j].x, nodes[j].y);
          if (d < maxDistance) {
            p5.strokeWeight(p5.map(d, 0, maxDistance, 1, 0));
            p5.stroke(255, p5.map(d, 0, maxDistance, 255, 0));
            p5.line(nodes[i].x, nodes[i].y, nodes[j].x, nodes[j].y);
          }
        }
      }
    };

    class Node {
      constructor(x, y) {
        this.x = x;
        this.y = y;
        this.vx = p5.random(-1, 1);
        this.vy = p5.random(-1, 1);
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        if (this.x < 0 || this.x > p5.width) {
          this.vx *= -1;
        }
        if (this.y < 0 || this.y > p5.height) {
          this.vy *= -1;
        }
      }

      display() {
        p5.fill(255);
        p5.noStroke();
        p5.ellipse(this.x, this.y, nodeRadius);
      }
    }
  };
}
