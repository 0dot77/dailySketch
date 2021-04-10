let attractors = [];
let particles = [];
let r = [];
let picker = [];

function setup() {
  createCanvas(400, 400);
  
  r = [random(255),random(255),random(255)];
  
  for(let i = 0; i < 3; i++) {
    picker[i] = int(random(0,3));
  }
  
  for (let i = 0; i < 500; i++) {
    // particles.push(new Particle(random(width), random(height)));
    particles.push(new Particle(random(width), random(height)));
  }

  // for(let i = 0; i < 10; i++) {
  // attractors.push(createVector(random(width),random(height)));
  // }

}

function mousePressed() {
  attractors.push(createVector(mouseX, mouseY));
}

function draw() {
  background(51);
  //   stroke(255);
  //   noStroke();
  //   fill(255, 0, 0, map(sin(1 - frameCount / 10), -1, 1, 0, 255));
  //   text('attractor', attractors.x, attractors.y - 15);

  noStroke(0);
  for (let i = 0; i < attractors.length; i++) {
    fill(0);
    ellipse(attractors[i].x, attractors[i].y,20,20);
  }


  for (let i = 0; i < particles.length; i++) {
    let particle = particles[i];
    for (let j = 0; j < attractors.length; j++) {
      particle.attracted(attractors[j]);
    }
    particle.update();
    particle.show();
  }

}

function Particle(x, y) {
  this.pos = createVector(x, y);
  this.prev = createVector(x, y);
  this.vel = createVector();
  // this.vel.setMag(random(2,5));
  this.acc = createVector();

  this.update = function() {
    this.vel.add(this.acc);
    this.vel.limit(5);
    this.pos.add(this.vel);
    this.acc.mult(0);
  }

  this.show = function() {
    stroke(r[picker[0]],r[picker[1]],r[picker[2]]);
    strokeWeight(5);
    // point(this.pos.x, this.pos.y);
    line(this.pos.x, this.pos.y, this.prev.x, this.prev.y);

    this.prev.x = this.pos.x;
    this.prev.y = this.pos.y;
  }

  this.attracted = function(target) {
    // dir = target - this.pos
    let force = p5.Vector.sub(target, this.pos);
    let d = force.mag();
    d = constrain(d, 1, 25);
    let G = 50;
    let strength = G / (d * d);
    force.setMag(strength);
    if (d < 20) {
      force.mult(-10);
    }

    this.acc.add(force);
  }
}
