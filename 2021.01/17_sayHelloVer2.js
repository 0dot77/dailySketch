function setup() {
  createCanvas(400, 400);
}

function draw() {
  background('YELLOW');

  textFont('Georgia');
  textAlign(CENTER);

  push();
  textSize(20);
  fill(0);
  strokeWeight(2);
  stroke(255);
  for (let x = 0; x <= width; x += 30) {
    for (let y = 0; y <= height; y += 30) {
      // rotate(y);
      text('안녕', x, y);
    }
  }
  pop();


  fill(255);
  stroke(0);
  strokeWeight(10);
  translate(width / 2, height / 2);
  textSize(50 + map(sin(frameCount / 10), -1, 1, 50, 100));
  text('안', 0, -25);
  text('녕', 0, 150);
}
