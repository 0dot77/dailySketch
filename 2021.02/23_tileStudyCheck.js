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
      pg.background(255%x, 100%y,100);
      let wave = floor(map(cos(frameCount / 50 * (x + y)), -1, 1, 50, 400));

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
}
