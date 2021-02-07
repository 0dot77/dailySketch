let letter = 'BLUE LIGHT';
let myfont;
let ellipsePos;

function preload() {
  myfont = loadFont('MAZIUSREVIEW20.09-Extraitalic.otf');
  ellipsePos = {
    x: width / 2,
    y: height / 2 - 15
  };
}

function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES);
}

function draw() {
  background(0, 100, 200);
  noStroke();
  stroke(200, 200, 0);
  noFill();
  translate(width / 2, height / 2);

  for (let i = 0; i < 150; i++) {
    circle(ellipsePos.x + 128, ellipsePos.y, map(sin(i + frameCount), -1, 1, 15, 300));
  }

  push();
  textFont(myfont);
  strokeWeight(1);
  fill(243, 200, 0);
  textSize(50);
  textAlign(CENTER, CENTER);
  text(letter, 0, 0);
  pop();
}

function mousePressed() {
  saveCanvas();
}
