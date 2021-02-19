let myFont;
let word = '파';
let pg;
let gap = 10;

function preload() {
  myFont = loadFont('IropkeBatangM.otf');
}

function setup() {
  createCanvas(400, 300);
  noCursor();
  pg = createGraphics(width, height);
  pg.background(0);
  pg.textFont(myFont);
  pg.fill(255);
  pg.textAlign(CENTER, CENTER);
  pg.textSize(200);
  pg.text(word, width / 2, height / 2 - 10);
}

function draw() {
  // image(pg,0,0);
  background(0, 100, 200);
  rectMode(CENTER);

  let from = color(map(mouseX, 0, width, 0, 255), 0, 0);
  let to = color(0, map(mouseY, 0, height, 0, 255), 255);
  let pct = map(sin(frameCount / 50), -1, 1, 0, 1);
  let colors = lerpColor(from, to, pct);

  let startX = mouseX - 100;
  let startY = mouseY - 50;
  let w = pg.textWidth(word) + 50;
  let h = (height * 0.5) + 50;

  fill(255);
  for (let y = startY; y < startY + h; y += gap) {
    for (let x = startX; x < startX + w; x += gap) {
      let c = pg.get(x, y);
      if (brightness(c) < 10) {
        let offset = frameCount * 0.1 + (x + y) * 0.01;
        let dx = x + sin(offset) * gap * 0.8;
        let dy = y + sin(offset);

        for (let i = 0; i < 5; i++) {
          fill(colors);
          ellipse(dx - 5 * i, dy - 10 * i, i * 3, i * 3);
        }
      }
    }
  }
}
