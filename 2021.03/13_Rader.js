let e = [];
function setup() {
  createCanvas(400, 400);
  for(let i = 0; i < 30; i++) {
    e.push(new beep(random(width),random(height),3));
  }
}

function draw() {
  background(0);
  
  for(let i = 0; i < e.length; i++) {
    e[i].update();
    e[i].render();
  }
  
  push();
      translate(width/2, height/2);
      rotate(radians(frameCount));
  for(let i = 1; i < 50; i++) {
    
    let c = lerpColor(color(0,30,0),color(0,255,0),map(sin(frameCount/i),-1,1,0,0.7));
    
    stroke(c);
    line(0,0,i * 2, -200);
    line(0, 0, 200, i * 2);
    line(0, 0, 0 -i * 2, 200);
    line(0, 0, -200, 0 -i * 2);
  }
  pop();
}

function beep(x,y,size) {
  this.pos = createVector(x,y);
  this.size = size;
  this.update = function() {
    this.size = map(sin(frameCount/50),-1,1,5,15);
  }
  this.render = function() {
    noFill();
    stroke('#f10000');
    ellipse(this.pos.x, this.pos.y, this.size, this.size);
  }
}
