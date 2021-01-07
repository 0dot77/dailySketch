var xoff;
var yoff;

function setup() {
  createCanvas(400, 400);
  xoff = 0;
  yoff = 0;
  zoff = 0;
}

function draw() {
  background(0, 100);

  rectMode(CENTER);
  strokeWeight(0.5);
  stroke(0, 0, 255, 100);
  noFill();
  for (var x = 0; x <= width; x += 10) {
    for (var y = 0; y <= height; y += 10) {
      ellipse(x, y, 1);
    }
  }

  translate(width / 2, height / 2);
  for (var a = 0; a < 180; a++) {
    strokeWeight(0.2);
    this.r = map(sin(xoff), -1, 1, 0, 200);
    this.x = this.r * cos(-radians(a));
    this.y = this.r * noise(yoff + cos(-radians(a)));
    stroke(255, 0, 0, 100);
    ellipse(this.x, this.y, 10, 10);
    stroke(255, 100);
    ellipse(this.x, this.y, 50, 50);
    xoff += 0.00001;

  }
  yoff += 0.005;
  
  if(mouseIsPressed) {
    saveCanvas();
  }
}
