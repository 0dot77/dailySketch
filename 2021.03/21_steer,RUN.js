let w1,w2,w3;
function setup() {
  createCanvas(400, 400);
  textAlign(CENTER, CENTER);
  textSize(100);
  
  w1 = new Vehicle(width/2, height/2 - 100);
  w2 = new Vehicle(width/2, height/2 + 100);
  w3 = new Vehicle(width/2 + 50, height/2);
}

function draw() {
  blendMode(BLEND);
  background(255);
  let mouse = createVector(mouseX, mouseY);
  
  blendMode(MULTIPLY);
  noStroke();
  fill(255,0,0);
    w1.update();
  w1.seek(mouse);
  w1.render();
    fill(0,255,0);
    w2.update();
  w2.seek(mouse);
  w2.render();
    fill(0,0,255);
    w3.update();
  w3.seek(mouse);
  w3.render();
}

function Vehicle(x,y) {
  this.pos = createVector(x,y);
  this.target = createVector();
  this.vel = createVector(0,0);
  this.acc = createVector(0,0);
  
  this.maxSpeed = 5;
  this.maxForce = 0.1;
}

Vehicle.prototype.applyForce = function(f) {
  this.acc.add(f);
}

Vehicle.prototype.update = function() {
  this.vel.add(this.acc);
  this.vel.limit(this.maxSpeed);
  this.pos.add(this.vel);
  this.acc.mult(0);
}

Vehicle.prototype.seek = function(target) {
  let desired = p5.Vector.sub(target, this.pos);
  desired.setMag(this.maxSpeed);
  
  let steer = p5.Vector.sub(desired, this.vel);
  steer.limit(this.maxForce);
  this.applyForce(steer);

}

Vehicle.prototype.render = function()  {
  
  text('RUN', this.pos.x, this.pos.y);
}
