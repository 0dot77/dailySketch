let myFont;
let pg;
let letter = "라";

function preload() {
  myFont = loadFont('IropkeBatangM.otf');
}

function setup() {
  createCanvas(400, 400, P2D);
  colorMode(HSB, 100, 100, 100);
  pg = createGraphics(width, height);
  // image(pg,0,0);
}

function draw() {
  background(255,0,0);

  pg.background(255,0,0);
  pg.textFont(myFont);
  pg.textAlign(CENTER, CENTER);
  pg.fill(255);
  pg.textSize(200);
  pg.text(letter, width / 2, height / 2 - 30);

  let tileX = 5;
  let tileY = 5;
  let tileW = width / tileX;
  let tileH = height / tileY;

  for (let y = 0; y < tileY; y++) {
    for (let x = 0; x < tileX; x++) {
      let wave = floor(map(sin(frameCount / 10 + (x+y)), -1, 1, -10,10));

      let sx = x * tileW;
      let sy = y * tileH;
      let sw = tileW;
      let sh = tileH;

      let dx = x * tileW + wave;
      let dy = y * tileH;
      let dw = tileW;
      let dh = tileH;
      copy(pg, sx, sy, sw, sh, dx, dy, dw, dh);
    }
  }
}

function keyPressed() {
  saveCanvas();
}
