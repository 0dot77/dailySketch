let myFont;
let pg;
let letter = 'L';

function preload() {
  myFont = loadFont('Sprat-RegularBold.otf');
}

function setup() {
  createCanvas(400, 400);
  pg = createGraphics(400, 400);

}

function draw() {
  background(200,100,50);
  pg.background(200,100,50);
  pg.textFont(myFont);
  pg.textAlign(CENTER, CENTER);
  pg.textSize(300);
  // pg.fill(255);
  pg.text(letter, width / 2, height / 2 -50);

  //image(pg,0,0);
  let tilesX = 5;
  let tilesY = 5;

  let tileW = width / tilesX;
  let tileH = height / tilesY;

  for (let y = 0; y < tilesY; y++) {
    for (let x = 0; x < tilesX; x++) {
      let wave = int(-tan(frameCount/100) * (x+y) * 20);
      pg.fill(map(sin(x + frameCount/100),-1,1,0,255),0,0);

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

function mousePressed() {
  saveCanvas();
}
