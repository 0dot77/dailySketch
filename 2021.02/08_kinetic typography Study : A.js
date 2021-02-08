let myFont;
let pg;
let gap = 10;
let letter = "A";

function preload() {
  myFont = loadFont('Messapia-Bold.otf');
}

function setup() {
  createCanvas(400, 400, P2D);
  pg = createGraphics(width, height);
  pg.background(255);
  pg.textFont(myFont);
  pg.textAlign(CENTER, CENTER);
  pg.fill(0);
  pg.textSize(200);
  pg.text(letter, width / 2, height / 2);
  // image(pg,0,0);
}

function draw() {
  background(0);
  let startX = 100;
  let startY = 150;
  let w = pg.textWidth(letter);
  let h = height * 0.5;
  // image(pg, 0, 0);

  /*
  아래의 박스로 타이포의 위치를 잡아준 다음에 brightness를 확인해주고 그려준다. 
  */
  // noFill();
  // stroke(0);
  // rect(startX, startY, w, h);

  fill(255,0,150);
  // strokeWeight(3);
  stroke(255, 0, 0);
  for (let y = startY; y < startY + h; y += gap) {
    for (let x = startX; x < startX + w; x += 10) {
      let c = pg.get(x, y);
      if (brightness(c) < 10) {
        let offset = frameCount * 0.1 + (x + y) * 0.01;
        let dx = x + sin(offset) * gap * 0.8;
        let dy = y + sin(offset);

        for (let i = 0; i < 5; i++) {
          ellipse(dx - 5 * i, dy - 10 * i, i * 3, i * 3);
        }
      }
    }
  }
}

function mousePressed() {
  saveCanvas();
}
