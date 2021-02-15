function setup() {
  createCanvas(400, 300);
  pixelDensity(1);
}

function draw() {
  loadPixels();
  let tiles = 50;
  let tileSize = width / tiles;

  for (let gridY = 0; gridY < width; gridY++) {
    for (let gridX = 0; gridX < height; gridX++) {
      let px = int(gridX * tileSize);
      let py = int(gridY * tileSize);
      
      let index = (px * py) + mouseX;
      pixels[index + 0] = 100;
      pixels[index + 1] = 150;
      pixels[index + 2] = 188;
      pixels[index + 3] = 255;

    }
  }
  updatePixels();
}

function keyPressed() {
  saveCanvas();
}
