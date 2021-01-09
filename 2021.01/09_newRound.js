let n;

function setup() {
  createCanvas(400,400);
  n = 0;
}

function draw() {
  background(0);
  translate(width / 2, height / 2);
  beginShape();
  for (var ne = 0; ne < 30; ne += 1) {
    fill(random(255),random(255),random(255));
    for (var a = 0; a < 360; a += 10) {
      stroke(random(255),random(255),random(255));
      strokeWeight(4);
      this.r = map(sin(n),0,1,50,150);
      this.x = this.r * map(cos(radians(a)),-1,1,-10,10);
      this.y = this.r * sin(radians(a + n));
      vertex(this.x, this.y);
    }
    n += 0.11;
  }
  endShape(CLOSE);
  
  if(mouseIsPressed) {
    saveCanvas();
  }
}
