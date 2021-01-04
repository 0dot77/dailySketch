let ActionLine;
let ActionLines = [];

let alphaCircle;
let alphaCircles;

let speed = 1;

function setup() {
  createCanvas(400, 400);
  for (var i = 0; i < 100; i++) {
    ActionLine = new Particle(width / 2, height / 2, random(0.1, 0.5), random(TWO_PI));
    ActionLines.push(ActionLine);
  }
}

function draw() {
  background(0, 0, 200, 100);

  beginShape();
  stroke(255);
  var yoff = 0;
  // noFill();
  noStroke();
  fill(255,200);
  for (var x = 0; x < width; x++) {
    var y1 = map(sin(yoff), 0, 1, -50, 20) + 100;
    var y2 = map(sin(yoff), 0, 1, -50, 20) + 400;
    var r = map(sin(yoff),0,1,1,4);
    ellipse(x, y1, r);
    ellipse(x, y2, r);
    yoff += speed;
  }
  speed += 0.01;
  endShape();
  
  push();
  stroke(200,0,100);
  strokeWeight(5);
  for (var i = 0; i < ActionLines.length - 1; i++) {
    ActionLines[i].update();
    ActionLines[i].render();
  }
  pop();
  
  if(mouseIsPressed) {
    saveCanvas();
  }
}

class Particle {
  constructor(x, y, speed, direction) {
    this.pos = createVector(x, y);
    this.vel = createVector(0, 0);
    this.vel.set(speed);
    this.vel.rotate(direction);
  }

  update() {
    this.pos.add(this.vel);
  }

  render() {
    line(this.pos.x, this.pos.y, this.pos.x + random(-10, 10), this.pos.y + random(-10, 10));
  }
}
