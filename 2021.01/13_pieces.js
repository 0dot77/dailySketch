function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(100, 155, 200);

  push();
  noStroke();
  for (var i = 0; i <= height; i += 10) {
    rect(width / 2, i, i % 100, 30);
    rotate(i);
    rect(width / 2, i, i % 100, 30);
  }
  pop();

  noStroke();
  ellipse(0, 0, 200, 200);
  ellipse(0, height, 200, 200);
  ellipse(width, 0, 200, 200);
  ellipse(width, height, 200, 200);
}
