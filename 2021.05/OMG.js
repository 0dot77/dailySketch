let font;
let pressed = false;

function preload() {
  font = loadFont("Righteous-Regular.ttf");
}

function setup() {
  createCanvas(400, 400);
  textFont(font);
  textAlign(CENTER, CENTER);
  rectMode(CENTER);
  blendMode(BLEND);
}

function draw() {
  background(0);
  translate(width / 2, height / 2);

  //basic shape
  noStroke();
  rect(0, 0, 100, 100);

  push();
  blendMode(MULTIPLY);
  rotate(radians(frameCount));
  textSize(30);
  fill(255, 0, 0);
  text("OMG", 0, -30);

  pop();

  push();
  textSize(30);
  fill(100, 200, 100);
  text("OMG", 0, -70);
  textSize(150);
  text("OMG", 0, -150);
  pop();

  push();
  rotate(radians(90));
  textSize(30);
  fill(255);
  text("OMG", 0, -70);
  pop();

  push();
  rotate(radians(180));
  textSize(30);
  fill(200, 100, 100);
  text("OMG", 0, -70);
  textSize(150);
  text("OMG", 0, -150);
  pop();

  push();
  rotate(radians(270));
  textSize(30);
  fill(255);
  text("OMG", 0, -70);
  pop();
}
