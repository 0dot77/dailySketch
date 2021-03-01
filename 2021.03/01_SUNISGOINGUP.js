let words = 'SUN IS GOING UP';
let wordsArr = [];

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(100, 100, 200);

  translate(width / 2, height / 2);
  push();
  textSize(30);
  fill(255);
  textStyle(BOLD);
  for (let i = 0; i < words.length; i++) {
    rotate(radians(360 / 16));
    text(words.charAt(i), 70, 0);
  }
  pop();

  strokeWeight(1.5);

  let m = map(mouseX, 0, height, 0, 360);
  push();
  rotate(radians(m));
  for (let i = 0; i < 16; i++) {
    noStroke();
    rotate(radians(360 / 16));
    fill(240, 236, 46);
    triangle(110, -20, 200, 25, 100, 50);
  }
  pop();

  push();
  rotate(radians(-m));
  for (let i = 0; i < 10; i++) {
    noStroke();
    fill(255, 0, 0);
    beginShape();
    vertex(0, 0);
    vertex(120, -10);
    vertex(160, 20);
    vertex(100, 40);
    endShape();

    rotate(radians(360 / 16));
    fill(250, 187, 92);
    beginShape();
    vertex(0, 0);
    vertex(100, 10);
    vertex(140, -10);
    vertex(100, -30);
    vertex(0, 0);
    endShape();

  }
  pop();


  push();
  noStroke();
  fill(240, 236, 46);
  circle(0, 0, 50);
  circle(0, 0, 25);
  pop();

}
