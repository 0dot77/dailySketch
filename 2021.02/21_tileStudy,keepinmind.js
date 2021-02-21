let pg;

function setup() {
  createCanvas(400, 300);
  pg = createGraphics(width, height);
}

function draw() {
  background(0);
  pg.background(0);
  pg.noStroke();
  for (let i = 100; i > 0; i -= 10) {
    pg.fill(i);
    pg.ellipse(width / 2, height / 2, i * 3, i * 3);
  }

  let tilesX = 8;
  let tilesY = 8;

  let tileW = int(width / tilesX);
  let tileH = int(height / tilesY);

  for (let y = 0; y < tilesY; y++) {
    for (let x = 0; x < tilesX; x++) {
      let wave = int(map(tan(frameCount / 10 + (x + y) * 10), -1, 1, -10, 10));

      let sx = x * tileW + wave;
      let sy = y * tileH;
      let sw = tileW;
      let sh = tileH;

      let dx = x * tileW;
      let dy = y * tileH;
      let dw = tileW;
      let dh = tileH;

      copy(pg, sx, sy, sw, sh, dx, dy, dw, dh);
    }
  }
  
  fill(255);
  textSize(50);
  textAlign(CENTER, CENTER);
  text('KEEP IN MIND', width/2, height/2);
}
