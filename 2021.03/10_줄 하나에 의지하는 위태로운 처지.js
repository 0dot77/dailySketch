let springPoint;
let weight;
let k; // 용수철 상수
let springLength;
let tSize;
let words = '줄하나에의지하는위태로운처지'

function setup() {
  createCanvas(400, 400);

  weight = new Particle(random(width),random(height),10,random(TWO_PI),0.9);
  
  k = 0.1;
  springLength = 100;
  
  textAlign(CENTER);
}

function draw() {
  blendMode(BLEND);
  noCursor();
  background(0,100,200);
  tSize = 30;
  
  springPoint = createVector(mouseX,mouseY);
  let distance = springPoint.copy();
  distance.sub(weight.pos.x, weight.pos.y);
  distance.setMag(distance.mag() - springLength);
  
  let springForce = distance.mult(k);
  weight.vel.add(springForce);
  weight.update();
  
  stroke(0);
  

  line(weight.pos.x, weight.pos.y - (tSize/2 + 10), springPoint.x, springPoint.y);

  fill(0);
  
  blendMode(DIFFERENCE);
  let textNum = map(sin(frameCount/50),-1,1,0,words.length);
  textSize(tSize);
  fill(255);
  text(words.charAt(textNum),weight.pos.x, weight.pos.y);
  fill(255);
  ellipse(weight.pos.x, weight.pos.y - 10, tSize * 1.7,tSize * 1.7);
  fill(255);
  ellipse(springPoint.x, springPoint.y,4);
  
}

class Particle {
  constructor(x,y,speed,direction,grav) {
    this.pos = createVector(x,y);
    this.vel = createVector(0,0);
    this.vel.set(speed);
    this.vel.rotate(direction);
    this.grav = createVector(0, grav || 0);
    this.friction = 0.9;
    this.radius = 20;
  }
  
  update() {
    //마찰을 곱하고
    this.vel.mult(this.friction);
    //중력을 더해서
    this.vel.add(this.grav);
    this.pos.add(this.vel);
  }
}
