var xoff;
var yoff;

function setup() {
  createCanvas(400, 400);
  xoff = 0;
  yoff = 0;
  zoff = 0;
}

function draw() {
  background(0,100);
  
  rectMode(CENTER);
  strokeWeight(1);
  stroke(0,0,255,100);
  for(var i = 0; i <200; i += 5) {
    noFill();
    rect(width/2, height/2, i,i);
  }

  translate(width / 2, height / 2);
  for (var a = 0; a < 180; a++) {
    stroke(255,0,0);
    strokeWeight(0.2);
    this.r = map(sin(xoff),-1,1,0,200);
    this.x = this.r * cos(-radians(a));
    this.y = this.r * noise(yoff + cos(-radians(a)));
    ellipse(this.x, this.y, 50);
    xoff += 0.00001;

  }
  yoff += 0.005;
}
