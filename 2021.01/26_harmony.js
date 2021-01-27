function setup() {
  createCanvas(400, 400);
}

function draw() {
  blendMode(BLEND);
  background(255,10);
  blendMode(MULTIPLY);
  noStroke();
  beginShape();
  for (let x = 0; x <= width / 2; x += 50) {
    for (let y = 0; y <= height; y += 50) {

      let useX = 200 + x * cos(frameCount / 50);
      let useY = 200 + y * sin(frameCount / 50);
      // vertex(width / 2, useY);
      // ellipse(useX, y, 5, 5);
      // vertex(useX, y);
      fill(random(y), random(x), 0);
      ellipse(useX + map(noise(x + frameCount / 100), 0, 1, 0, 50), useY - map(noise(x + frameCount / 100), 0, 1, 0, 50), map(noise(x + frameCount / 100), 0, 1, 0, 50));
      ellipse((width - useX) - map(noise(x + frameCount / 100), 0, 1, 0, 50), useY + map(noise(x + frameCount / 100), 0, 1, 0, 50), map(noise(y + frameCount / 100), 0, 1, 0, 10));
    }
  }
  endShape();
}
