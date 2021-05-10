function setup() {
  createCanvas(400, 400);
  // rectMode(CENTER);
}

function draw() {
  background(0);
  translate(width / 2, height / 2);

  push();
  rectMode(CENTER);
  fill(100, 187, 233);
  for (let i = -100; i < 100; i += 10) {
    for (let j = -100; j < 100; j += 10) {
      rect(i, j, 10, 10);
    }
  }
  pop();

  push();
  noStroke();
  fill(100, 187, 0);
  let maxHeight = map(sin(frameCount / 50), -1, 1, 0, -50);
  rect(-30, 4.5, 30, maxHeight);
  pop();

  push();
  noStroke();
  fill(115, 50, 100);
  rect(-80, 30, 30, -maxHeight);
  pop();

  push();
  noStroke();
  fill(115, 0, 155);
  rect(50, 30, 30, maxHeight * 1.9);
  pop();
}
