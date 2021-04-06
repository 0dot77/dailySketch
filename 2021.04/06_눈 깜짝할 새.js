let w = ['MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY'];
let count = 0;
let countBool = false;

function setup() {
  createCanvas(400, 400);
  // background(255);
  // rectMode(CENTER);
}

function draw() {

  translate(width / 2, height / 2);

  push();
  if (floor(map(sin(frameCount / 10), -1, 1, -180, -90)) == -91) {
    countBool = true;
  } else {
    countBool = false;
  }

  if (countBool) {
    count += 1
    background(random(255), random(255), random(255));
  }

  if (count == 5) {
    count = 0;
  }

  fill(0);
  textSize(50);
  textAlign(CENTER, CENTER);
  text(w[count], 0, 0);
  pop();

  push();
  translate(-150, 110);
  rotate(radians(map(sin(frameCount / 10), -1, 1, -180, -90)));
  noFill();
  stroke(0);
  rect(0, 0, 20, 300);
  pop();

}
