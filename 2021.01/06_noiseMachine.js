function setup() {
  createCanvas(400, 400);
  this.r = 100;

}

function draw() {
  background(0);
  
  push();
  beginShape();
  strokeWeight(1);
  noFill();
  translate(width / 2, height / 2);
  for (var angle = 0; angle <= PI; angle += 0.5) {
    stroke(255);
    rectMode(CENTER);
    this.x = this.r * cos(angle);
    this.y = this.r * map(noise(angle + millis() / 1000), 0, 1, 0, 1);
    vertex(this.x, -this.y);
    vertex(this.x, this.y);
    ellipse(this.x, -this.y, 50);
    ellipse(this.x, this.y, 50);
    rect(this.x, this.y, 10,10);
    rect(this.x, -this.y, 10,10);
  }
  endShape();
  pop();

  strokeCap(ROUND);
  strokeWeight(10);
  stroke(255);
  line(50, height / 2, width - 50, height / 2);
}
