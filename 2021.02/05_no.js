function setup() {
  createCanvas(400, 400);
  rectMode(CENTER);
}

function draw() {
  background(0, 10);

  noStroke();
  translate(width / 2, height / 2);
  push();
  for (let angle = 0; angle < 100; angle++) {
    rotate(angle);
    fill(angle, angle + 55, angle + 200);
    rect(0, 0, 100, 100);
    translate(angle - 100, frameCount * 10);
  }
  pop();

  if (mouseIsPressed) {
    saveCanvas();
  }


  if (frameCount > 80) {
    textFont('Arial');
    textSize(50);
    textAlign(CENTER);
    fill(0, 255, 0);
    textStyle(ITALIC);
    text('NO', 0, 20);

    noLoop();
  }

}
