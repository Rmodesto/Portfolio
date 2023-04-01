const SketchCubes = (p) => {
  let angle = 0;
  const dotCount = 5;
  const cubeSize = 89;
  const gridSize = 3;
  const cubeSpacing = 1 * cubeSize;

  p.setup = () => {
    p.createCanvas(377, 377, p.WEBGL);
  };

  p.draw = () => {
    p.background(255);
    p.translate(-cubeSpacing, -cubeSpacing);

    for (let gridX = 0; gridX < gridSize; gridX++) {
      for (let gridY = 0; gridY < gridSize; gridY++) {
        for (let gridZ = 0; gridZ < gridSize; gridZ++) {
          p.push();
          p.translate(
            gridX * cubeSpacing,
            gridY * cubeSpacing,
            gridZ * cubeSpacing
          );

          p.rotateX(angle);
          p.rotateY(angle);
          p.rotateZ(angle);

          // Move the camera further away from the origin (0, 0, 0) along the Z-axis
          // The first three parameters are the camera position (x, y, z)
          // The next three parameters are the point the camera is looking at (x, y, z)
          // The last three parameters are the camera's up direction (x, y, z)
          p.camera(0, 0, 600, 0, 0, 0, 0, 1, 0);

          for (let x = 0; x < dotCount; x++) {
            for (let y = 0; y < dotCount; y++) {
              for (let z = 0; z < dotCount; z++) {
                const posX = p.map(x, 0, dotCount, -cubeSize / 2, cubeSize / 2);
                const posY = p.map(y, 0, dotCount, -cubeSize / 2, cubeSize / 2);
                const posZ = p.map(z, 0, dotCount, -cubeSize / 2, cubeSize / 2);

                p.push();
                p.translate(posX, posY, posZ);
                p.fill(0);
                p.sphere(2);
                p.pop();
              }
            }
          }

          p.pop();
        }
      }
    }
    angle += 0.01;
  };
};

export default SketchCubes;
