let n;

function setup() {
  createCanvas(400, 400);
  background(0);
  noFill();
  stroke(200, 77, 0);
  for (var x = 0; x <= width; x += 20) {
    for (var y = 0; y <= height; y += 20) {
      arc(x, y, 50, 50, 0, random(PI));
      arc(x, y, 50, 50, PI, random(PI));
    }
  }
  n = 0;
}

function draw() {
  rectMode(CENTER);
  strokeWeight(1);
  stroke(100, 0, 200, 50);
  for (let i = 0; i < 20; i++) {
    rect(width / 2 - map(sin(n), -1, 1, -50, 50), (height / 2 - 25) + map(sin(n), -1, 1, 10, 30), 100, 100);

  }

  rect(0, 0, 200, 200);
  rect(width, 0, 200, 200);
  rect(width, height, 200, 200);
  rect(0, height, 200, 200);
  n += 1;
  if (n > 40) {
    noLoop();
  }

}
