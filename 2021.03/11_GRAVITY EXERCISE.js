let words = 'GRAVITY';
let myFont;
let wordParticles = [];
function preload() {
  myFont = loadFont('Barlow-Black.otf');
}

function setup() {
  createCanvas(400, 400);
  textFont(myFont);
}

function draw() {
  background(0);
  
  for(let word of wordParticles) {
    let grav = createVector(0, 0.2);
    word.applyForce(grav);
    word.update();
    word.edges();
    word.render();
  }
  
  for(let i = wordParticles.length -1; i >= 0; i--) {
    
    if(wordParticles[i].finished()) {
    wordParticles.splice(i,1);
    }
  }
}

function mouseReleased() {
  for(let i = 0; i < 15; i++) {
    wordParticles.push(new wordParticle(mouseX,mouseY));
  }
}

class wordParticle {
  constructor(x,y){
    this.pos = createVector(x,y);
    this.vel = p5.Vector.random2D();
    this.acc = createVector(0,0);
    this.lifeTime = 255;
    this.dead = random(1,2);
    this.tSize = 15;
    this.colors = color(random(255),random(255),random(255));
  }
  
  applyForce(force) {
    this.acc.add(force);
  }
  
  update() {
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.set(0,0);
    this.lifeTime -= this.dead;
  }
  
  finished() {
    return this.lifeTime <= 0;
  }
  
  edges() {
    if(this.pos.x > width - this.tSize) {
      this.pos.x = width - this.tSize;
      this.vel.x *= -1;
    } else if(this.pos.x < 0 + this.tSize/2) {
      this.pos.x = this.tSize/2;
      this.vel.x *= -1;
    }
    
    if(this.pos.y > height - this.tSize) {
      this.pos.y = height - this.tSize;
      this.vel.y *= -1;
    } else if(this.pos.y < 0 + this.tSize) {
      this.pos.y = this.tSize;
      this.vel.y *= -1;
    }
  }
  
  render() {
    textAlign(CENTER, CENTER);
    textSize(30);
    fill(this.colors, this.lifeTime);
    text(words, this.pos.x, this.pos.y);
  }
}
