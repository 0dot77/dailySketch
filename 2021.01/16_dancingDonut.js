function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(0, 15);
  let from = color(100, 37, 88);
  let to = color(140, 233, 100);
  for (let x = 0; x <= width; x += 50) {
    let pct = map(x, 0, 400, 0, 1);
    stroke(lerpColor(from, to, pct));
    for (let y = 0; y <= height; y += 50) {
      strokeWeight(map(cos(y - frameCount / 10), -1, 1, 0, 15));
      noFill();
      ellipse(x + map(sin(y + frameCount / 30), -1, 1, -10, 10), y, 30);
      }
    }
    if (mouseIsPressed) {
      saveCanvas();
    }
  }
