let myFont;
let word = "자";
let img, tiles, tileSize;

function preload() {
  myFont = loadFont('IropkeBatangM.otf');
  img = loadImage('z.jpg');
}

function setup() {
  createCanvas(400, 300);
  // colorMode(HSB, width, height, 100);
  img.resize(width, height);
}

function draw() {
  background('#000000');
  textFont(myFont);
  fill(255);
  // textSize(15);
  let tiles = 30;
  let tileSize = width / tiles;
  textAlign(CENTER, CENTER);
  for (let x = 0; x < tiles; x ++) {
    for (let y = 0; y < tiles; y ++) {
      let c = color(img.get(int(x * tileSize), int(y * tileSize)));

      let size = map(brightness(c), 0, 255, 1, 30);
      text(word, x * tileSize + 7, y * tileSize - 10);

      let d = dist(mouseX, mouseY, x * tileSize, y * tileSize);
      if (d < 20) {
        textSize(map(sin(size * frameCount / 50), -1, 1, 1, 50));
      } else {
        textSize(size);
      }
    }
  }
}

function keyPressed() {
  saveCanvas();
}
