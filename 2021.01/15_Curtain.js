function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(0, 30);
  let from = color(10, 37, 0);
  let to = color(255, 100, 255);
  for (let x = 0; x <= width; x += 5) {
    let pct = map(x, 0, 400, 0, 0.35);
    stroke(lerpColor(from, to, pct));
    for (let y = 0; y <= height; y += 20) {
      strokeWeight(map(sin(y - frameCount / 10), -1, 1, 1, 10));
      point(x, y);
    }
  }
}
