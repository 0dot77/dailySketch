let myFont;
let textBool;
let randomPosX;
let randomPosY;
let randomPosArr = [];

function preload() {
  myFont = loadFont('Inter-Black.otf');
}

function setup() {
  createCanvas(400, 400);
  for (let i = 0; i < 100; i++) {
    randomPosArr.push(createVector(random(width), random(height)));
  }
}

function draw() {
  background(255, 232, 120, 10);


  push();
  for (let i = 0; i < randomPosArr.length; i++) {
    noStroke();
    fill(184, 157, 94);
    ellipse(randomPosArr[i].x, randomPosArr[i].y, 5, 5);
  }
  pop();
  let tilesX = 10;
  let tilesY = 10;
  let tileW = width / tilesX;
  let tileH = height / tilesY;


  stroke(0);
  strokeWeight(5);
  fill(0, 100, 200);
  translate(tileW / 2, tileH / 2);
  let size = map(sin(frameCount / 50), -1, 1, tileW + 10, tileW * 1.5);
  let reX = map(sin(frameCount / 50), -1, 1, 0, 10);
  for (let x = 0; x < tilesX; x++) {
    for (let y = 0; y < reX; y++) {
      ellipse(x * tileW, y * tileH, size, size);
    }
  }

  push();
  textSize(50);
  fill(255);
  noStroke();
  textFont(myFont);
  textAlign(CENTER, CENTER);
  let textSC = map(sin(frameCount / 50), -1, 1, 0, 1);
  scale(1, textSC);

  if (textSC > 0.99) {
    textBool = false;
  } else if (textSC < 0.001) {
    textBool = true;
  }

  if (textBool) {
    text('EXHALE', width / 2 - 10, height / 2 + 100);
  } else {
    text('INHALE', width / 2 - 10, height / 2 + 100);
  }
  pop();
}
