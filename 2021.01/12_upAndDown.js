function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES);
}

function draw() {
  background(0);

  beginShape();
  noFill();
  stroke(150, 22, 58, 100);
  translate(width / 2, height / 2);
  for (let angle = 0; angle < 180; angle++) {
    this.r = 150;
    this.x = this.r * cos(angle + mouseX);
    this.y = this.r * sin(angle + mouseY);
    ellipse(this.x, this.y, 100,50);
    line(0, 0, this.x + mouseX, this.y - mouseY);
    line(0, 0, this.x - mouseX, this.y - mouseY);
    line(0, 0, this.x + mouseX, this.y + mouseY);
    line(0, 0, this.x - mouseX, this.y + mouseY);
    vertex(this.x, this.y);
  }
  endShape();
  
}
