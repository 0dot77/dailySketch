function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(240, 190, 0);
  blendMode(BLEND);
  noStroke();

  translate(width / 2 + 10, height / 2 - 20);
  push();
  stroke(0);
  let xoff = 0;
  for (let i = 0; i < 100; i++) {
    blendMode(DIFFERENCE);
    let yoff = 0;
    translate(8, 3);
    stroke(255);
    strokeWeight(map(noise((frameCount / 40) % i), 0, 1, 10, 15));
    rotate(radians(27));
    point(-50, 172 + map(sin(i + frameCount / 40), -1, 1, 0, 10));
    point(50, 172 + map(sin(i + frameCount / 40), -1, 1, 0, 10));
    point(100, 172 + map(sin(i + frameCount / 30), -1, 1, -150, -100));
    point(100, 172 + map(sin(i + frameCount / 30), -1, 1, -200, -300));
  }
  pop();
}
