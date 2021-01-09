function setup() {
  createCanvas(400, 400);
  this.r = 100;
}

function draw() {
  background(0, 100);
  noCursor();
  noStroke();
  beginShape();
  for (let angle = 0; angle < TWO_PI; angle += 0.1) {
    this.x = this.r * cos(angle);
    this.y = this.r * sin(angle);
    stroke(255);
    line(mouseX, mouseY, -width / 2 * angle, -height);
    line(mouseX, mouseY, width / 2 * angle, -height);
    line(mouseX, mouseY, width / 2 * angle, height);
    line(mouseX, mouseY, -width / 2 * angle, height);
    fill(255);
    ellipse(mouseX - this.x * 2, mouseY - this.y, 1, 1);
    fill(255);
    ellipse(mouseX - this.x, mouseY - this.y, 5, 5);
    fill(0,0,100, 100);
    vertex(mouseX - this.x, mouseY - this.y);
  }
  endShape(CLOSE);
  
  if(mouseIsPressed) {
    saveCanvas();
  }
}
