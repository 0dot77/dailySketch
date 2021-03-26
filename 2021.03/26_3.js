let txt = '3';
let img;
let e;

function preload() {
  img = loadImage('untitled.png');
}
function setup() {
  createCanvas(400, 400);
  e = new particle(random(width-15), random(height-15));
}

function draw() {
  background(80,100,100);
  let line2 = map(mouseX,0,400,0,10);
  let constLine2 = constrain(line2,0,10);
  
  e.update();
  e.render();
  
  for(let x = 0; x < width; x +=25) {
    for(let y = 0; y < height; y+= 15) {
      let c = img.get(x,y);
      let r = atan2(e.pos.y - y, e.pos.x - x);
      push();
      strokeWeight(1);
      translate(x + 10,y);
      rotate(r);
      fill(c);
      stroke(c);
      // noStroke();
      line(0,0,10,10);
      line(0,0,0,constLine2);
    pop();
    }
  }
}

function particle(x,y,speed) {
  this.pos = createVector(x,y);
  this.vel = p5.Vector.random2D();
  this.r = 30;

}

particle.prototype.update = function() {
  this.pos.add(this.vel);
  
  
  if(this.pos.x > width - this.r/2 || this.pos.x < this.r/2) this.vel.x *= -1;
  if(this.pos.y > height - this.r/2 || this.pos.y < this.r/2) this.vel.y *= -1;
}

particle.prototype.render = function() {
  noStroke();
  fill(0);
  ellipse(this.pos.x, this.pos.y, this.r, this.r);
  
}
