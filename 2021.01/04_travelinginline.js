function setup() {
  createCanvas(400, 400);
  background(0);
  this.r = 100;
  this.speed = 1;
}

function draw() {
  for (var angle = 0; angle < TWO_PI; angle += 1) {
    this.x = this.r * cos(angle);
    this.y = this.r * sin(angle);
    stroke(200,0,0,50);
    strokeWeight(0.5);
    line(width / 2, this.y, this.x, heighta/ 2);
    line(height / 2, this.x, this.y, width / 2);
    this.r += this.speed;

    if (this.r > 700) {
      this.speed = 0;
    }
  }
  
  if(mouseIsPressed) {
    saveCanvas();
  }
}
