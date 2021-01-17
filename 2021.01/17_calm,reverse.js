function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(0);
  fill(255);
  rect(0, 0, 400, 150);
  noStroke();
  noCursor();
  fill(0, 33, 150);
  translate(width / 2 - 50, 0);
  for (let x = 0; x < width; x++) {
    for (let xW = 0; xW < width; xW += 50) {
      ellipse(frameCount / x - xW, x + height / 2, 30, 30);
    }
  }
}
