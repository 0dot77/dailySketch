let pg;

function setup() {
  createCanvas(400, 300);
  pg = createGraphics(width, height);

}

function draw() {
  background(0);

  let tileX = 5;
  let tileY = 5;

  let tileW = int(width / tileX);
  let tileH = int(height / tileY);

  for (let y = 0; y < tileY; y++) {
    for (let x = 0; x < tileX; x++) {
      let wave = floor(map(cos(frameCount / 50 * (x + y)), -1, 1, 0, 150));

      let sx = x * tileW;
      let sy = y * tileH + wave;
      let sw = tileW;
      let sh = tileH;

      let dx = x * tileW;
      let dy = y * tileH;
      let dw = tileW;
      let dh = tileH;
      noStroke();
      ellipse(sx + 40, dy + 30, 50, 50);
      copy(pg, sx, sy, sw, sh, dx, dy, dw, dh);
    }
  }

  
  pg.noStroke();
  pg.fill(100);
  pg.circle(width / 2, height / 2, 200);
  pg.circle(width/2 - 100, height/2, 100);
  pg.circle(width/2 + 100, height/2 + 100, 100);
}
