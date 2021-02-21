let myFont;
let slider;
let words = '바';
let c;
let p = [];
let meetSwitch = false;

function preload() {
  myFont = loadFont('IropkeBatangM.otf');
}

function setup() {
  createCanvas(400, 300);
  s = new slideBar(3);
}

function draw() {
  background(255);
  textFont(myFont);
  textSize(100);
  fill(0);
  textAlign(CENTER, CENTER);


  text(words, width / 2, height / 2);

  if (s.pos1.x > width / 2) {
    switchBool = true;
    for (let i = 0; i < 50; i++) {
      p[i] = new popWords(width / 2, height / 2, random(3, 10), random(TWO_PI));
    }
  } else {
    switchBool = false;
  }


  for (let i = 0; i < p.length; i++) {
    let particles = p[i];
    particles.update();
    particles.render();
    
    if(particles.pos.x > width || particles.pos.x < 0) p.splice(i,1);
    if(particles.pos.y > height || particles.pos.y < 0) p.splice(i,1);
  }

  s.update();
  s.render();

  console.log(switchBool);
}

function popWords(x, y, speed, direction) {
  this.pos = createVector(x, y);
  this.vel = createVector(0, 0);
  this.vel.set(speed);
  this.vel.rotate(direction);

  this.update = function() {
    this.pos.add(this.vel);
  }

  this.render = function() {
    textSize(20);
    text(words, this.pos.x, this.pos.y);
  }
}

function slideBar(speed) {
  this.pos1 = createVector(0, 0);
  this.pos2 = createVector(0, height);
  this.vel = createVector(0, 0);
  this.vel.set(speed);

  this.update = function() {
    this.pos1.add(this.vel);
    this.pos2.add(this.vel);

    if (this.pos1.x > width || this.pos1.x < 0) this.vel.mult(-1);
  }

  this.render = function() {
    push();
    stroke(0);
    strokeWeight(3);
    line(this.pos1.x, this.pos1.y, this.pos2.x, this.pos2.y);
    pop();

    push();
    strokeWeight(3);
    point(this.pos1.x, height / 2);
    pop();
  }
}
