let myFont;
let word = '타';
let words = [];
let ellipsePos;
let speedX, speedY;

function preload() {
  myFont = loadFont('IropkeBatangM.otf');
}

function setup() {
  createCanvas(400, 300);
  ellipsePos = createVector(random(0, width), random(0, height));
  speedX = 1;
  speedY = 2;
}

function draw() {

  background(0);
  blendMode(BLEND);

  fill(255);
  stroke(100, 20, 150);
  ellipse(ellipsePos.x, ellipsePos.y, 80, 80);
  ellipsePos.x += speedX;
  ellipsePos.y += speedY;

  if (ellipsePos.x > width || ellipsePos.x < 0) speedX *= -1;
  if (ellipsePos.y > height || ellipsePos.y < 0) speedY *= -1;
  textFont(myFont);
  textAlign(CENTER, CENTER);
  strokeWeight(2);
  noStroke();
  fill(255);
  blendMode(DIFFERENCE);
  textSize(200);
  text(word, width / 2, height / 2 - 25);
}
