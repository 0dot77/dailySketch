function setup() {
  createCanvas(200, 500);
}

function draw() {
  background(240, 190, 0);
  noStroke();
  // rect(width / 2, height / 2, 200, 100, 20, 20);
  ellipse(width / 2, height / 2, 100, 100);

  push();
  stroke(0);
  let xoff = 0;
  for (let i = 0; i < 100; i++) {
    let yoff = 0;
    translate(10, 5);
    stroke(240, 0, i);
    strokeWeight(map(noise((frameCount / 10) % i), 0, 1, 1, 20));
    point(width / 2 - 100, 172 + map(sin(i + frameCount / 10), -1, 1, 0, 10));
    point(width / 2 - 50, 172 + map(sin(i + frameCount / 10), -1, 1, 0, 10));
    stroke(240, 0, 100);
    point(width / 2, 172 + map(sin(i + frameCount / 10), -1, 1, 0, 10));
    point(width / 2 + 50, 172 + map(sin(i + frameCount / 10), -1, 1, 0, 10));
    point(width / 2 + 100, 172 + map(sin(i + frameCount / 10), -1, 1, 0, 10));

    point(-50, 172 + map(sin(i + frameCount / 10), -1, 1, 0, 10));
    point(0, 172 + map(sin(i + frameCount / 10), -1, 1, 0, 10));
    point(50, 172 + map(sin(i + frameCount / 10), -1, 1, 0, 10));
    point(100, 172 + map(sin(i + frameCount / 10), -1, 1, 0, 10));
  }
  pop();
}
