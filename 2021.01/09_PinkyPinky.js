let n = 0;
function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(255,10,80);
  
  translate(width/2, height/2);
  beginShape();
  for(let a = 0; a < 360; a ++) {
    strokeWeight(4);
    this.r = map(sin(n),-1,1,0,100);
    this.x = this.r * -cos(a);
    this.y = this.r * sin(a);
    stroke(255,66,87);
    fill(20,10,22);
    ellipse(this.x, this.y,100,100);
    noStroke();
    vertex(this.x, this.y);
  }
  endShape();
  n += 0.1;
}
