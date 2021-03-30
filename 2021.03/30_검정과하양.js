let font;
let upWords = ['검','정'];
let downWords = ['하','양'];
let r1,r2;

function preload() {
  font = loadFont('BlackHanSans-Regular.ttf');
}

function setup() {
  createCanvas(400, 400);
  textFont(font);
  textAlign(CENTER, CENTER);
  textSize(100);
  
  r1= new rotateText(width / 2 - 50, height / 2 - 100, upWords[0],downWords[0]);
  r2= new rotateText(width / 2 + 50, height / 2 - 100, upWords[1],downWords[1]);
}

function draw() {
  background(255);
  fill(0);
  rect(0, 0, width, height / 2);

  r1.move();
  r2.move();
}

function rotateText(x, y, utx, dtx) {
  this.pos = createVector(x, y);
  this.vel = createVector(0, 2);
  this.moveCount = 0;
  
  this.move = function() {
    this.textRotate();
    
    this.pos.add(this.vel);
    
    if(this.pos.y >= height/2 +100) {
      this.vel.mult(-1);
    } else if(this.pos.y <= height/2 - 100) {
      this.vel.mult(-1);
    }
    
    // console.log(this.moveCount);
  }

  this.textRotate = function() {
    push();
    translate(this.pos.x, this.pos.y);
    rotate(radians(map(sin(frameCount/20),-1,1,0,180)));

    if (this.pos.y <= height / 2) {
      fill(255);
      text(utx,0,0);
    } else {
      fill(0);
      text(dtx,0,0);
    }
    pop();
  }
}
