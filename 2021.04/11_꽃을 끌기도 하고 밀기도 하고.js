let attractors = [];
let particles = [];
let word1 = '끌어';
let word2 = '밀어';
let font;
let flower;
function preload() {
  font = loadFont('KCC-Kimhoon.ttf');
  flower = loadImage('pngegg.png');
}

function setup() {
  createCanvas(400, 400);
  flower.resize(20,20);
  textAlign(CENTER, CENTER);
  textStyle(NORMAL);
  textFont(font);
  textSize(30);
  for (let i = 0; i < 50; i++) {
    particles.push(new Particle(random(width), random(height)));
  }

}

function mousePressed() {
  attractors.push(createVector(mouseX, mouseY));
}

function draw() {
  background(100, 200, 100);
  for (let i = 0; i < attractors.length; i++) {
    strokeWeight(1);

    if (i % 2 == 0) {
      fill(255);
      strokeWeight(3);
      text(word1, attractors[i].x, attractors[i].y);
      fill(0);
      text(word1, attractors[i].x + 5, attractors[i].y + 5);
    } else {
      text(word2, attractors[i].x, attractors[i].y);
    }

  }
  for (let i = 0; i < particles.length; i++) {
    let particle = particles[i];
    for (let j = 0; j < attractors.length; j++) {
      particle.attracted(attractors[j], j);
    }
    particle.update();
    if (particle.lifeSpan()) {
      particles.splice(i, 0);

      // if (particles.length < 0) {
      //   for (let i = 0; i < 50; i++) {
      //     particles.push(new Particle(width/2, height/2));
      //   }
      // }
    }
    particle.show();
  }
}

function Particle(x, y) {
  this.pos = createVector(x, y);
  this.prev = createVector(x, y);
  this.vel = createVector();
  this.acc = createVector();

  this.update = function() {
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.mult(0);
  }

  this.lifeSpan = function() {
    return (this.pos.x > width || this.pos.x < 0) || (this.pos.y > width || this.pos.y < 0)
  }

  this.show = function() {
    image(flower,this.pos.x, this.pos.y);
  }

  this.attracted = function(target, j) {
    let force = p5.Vector.sub(target, this.pos);
    let d = force.mag();

    if (j % 2 == 1) {
      force.mult(-1);
    }

    d = constrain(d, 1, 25);
    let G = 2.5;
    let strength = G / (d * d);
    force.setMag(strength);

    this.acc.add(force);
  }
}
