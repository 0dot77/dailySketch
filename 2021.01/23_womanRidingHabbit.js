let img,
  imgArr = [],
    bg;

function preload() {
  img = loadImage('asset/woman_in_a_riding_habit.jpg');
}

function setup() {
  createCanvas(400, 400);
  img.resize(400, 400);
  bg = createCanvas(400,400);

}

function draw() {
  // background(0);
  let tiles = 50;
  let tileSize = width / tiles;
  for (let x = 0; x < tiles; x++) {
    for (let y = 0; y < tiles; y++) {
      let distance = dist(x * tileSize, y * tileSize, mouseX, mouseY);
      let c = color(img.get(int(x * tileSize), int(y * tileSize)));

      let size = map(brightness(c), 0, 255, tileSize, 0);
      ellipse(x * tileSize, y * tileSize, size, size);

      if (distance <= 100) {
        fill(255, 0, 0);
      } else {
        fill(0, 100);
      }
    }
  }
}
