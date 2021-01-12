function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(0);
  strokeWeight(2);
  stroke(255);
  rect(0, 0, 100, 400);
  for (var i = 0; i <= height; i += 10) {
    line(mouseX, i, 150 + mouseX / 2, i);
    line(mouseX, i, 400, i);
    line(i,mouseX,i,400);
    if (mouseX <= 100) {
      fill(255, 0, 0);
    } else {
      fill(0);
    }
    ellipse(100, i * 5, 10, 10);
  }
}
