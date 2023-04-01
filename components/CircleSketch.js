
const outlineShape = p => {
    let weight = randomSelectTwo() ? thinStroke : thickStroke;
    let hexagonTrue = randomSelectTwo();
  
    p.setup = () => {
      p.createCanvas(CRYSTAL_SIZE, CRYSTAL_SIZE);
      p.stroke(layerColor);
      p.strokeWeight(weight);
    };
  
    p.draw = () => {
      p.background(255);
      p.push();
      p.translate(CRYSTAL_SIZE / 2, CRYSTAL_SIZE / 2);
      if (hexagonTrue) {
        hexagon(0, 0, CRYSTAL_SIZE / 2);
      } else {
        p.ellipse(0, 0, CRYSTAL_SIZE, CRYSTAL_SIZE);
      }
      p.pop();
    };
  };
  
  const dottedLines = p => {
    let numShapes = randomSelectTwo() ? sides : sides * 2;
    let angle = 360 / numShapes;
    let shapeSize = 3;
    let centerOffset = singleStep;
  
    p.setup = () => {
      p.createCanvas(CRYSTAL_SIZE, CRYSTAL_SIZE);
      p.fill(layerColor);
      p.noStroke();
    };
  
    p.draw = () => {
      p.background(255);
      p.push();
      p.translate(CRYSTAL_SIZE / 2, CRYSTAL_SIZE / 2);
      for (let i = 0; i <= numShapes; i++) {
        for (
          let x = centerOffset;
          x < CRYSTAL_SIZE / 2;
          x += singleStep
        ) {
          p.rect(x, 0, shapeSize, shapeSize);
        }
        p.rotate(angle);
      }
      p.pop();
    };
  };
  

  
