function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES);
}

function draw() {
  background(0);

  beginShape();
  translate(width / 2, height / 2);
  push();
  for (let u = 0; u < 10; u++) {
    stroke(random(255), random(255), random(255));
    for (let i = 0; i <= 180; i++) {
      fill(0);
      var rad = map(sin(30 + frameCount), -1, 1, 50, 100);
      var x = rad * cos(i + frameCount);
      var y = rad * sin(i);
      vertex(x, y);
      rect(x, y, 50, 50);
    }
    endShape(CLOSE);
    rotate(u + frameCount / 10);
  }
  pop();
}
