let words = '지끈지끈';
let pungs = [];
let pungsNum = 100;
let pungGo = false;

function setup() {
  createCanvas(400, 400);
  textAlign(CENTER, CENTER);
  textSize(80);
  
}

function draw() {
  background(0);
  
  if(frameCount%120 == 119) {
    pungGo = true;
  } else {
    pungGo = false;
  }
  
  if(pungGo) {
  for(let i = 0 ; i < pungsNum; i++) {
    pungs.push(new pung(width/2, height/2, random(1,3), random(radians(190),radians(350))));
  }
  }
  
  for(let u = 0; u < pungs.length; u++) {
    let p = pungs[u];
    p.update();
    p.render();
    
    if(pungs[u].pos.x + 2.5 > width || pungs[u].pos.x - 2.5 < 0 || pungs[u].pos.y + 2.5 > height || pungs[u].pos.y - 2.5 < 0) pungs.splice(u,1);
  }
  
  fill(255);
  text(words.charAt(0),width/2 - 130 + random(-1,1), height/2 + random(-1,1));
  
  push();
  fill(255);
  textSize(map(tan(frameCount/50),-1,1,0,200));
  text(words.charAt(1),width/2 - 50, height/2);
  pop();
  
  push();
  translate(width/2 + 60, height/2);
  for(let i = 0; i < 100; i++) {
  let sinpx = map(sin(frameCount/50),-1,1,0, i);
  fill(random(255),random(255),random(255));
  text(words.charAt(2),sinpx,i * 0.5);
}
  pop();
  
  push();
  fill(255);
  let px = width/2 + 140;
  let py = height/2;
  let angle = atan2(mouseY - py, mouseX - px);
  translate(px,py);
  rotate(angle);
  strokeWeight(10);
  stroke(255,0,0);
  text(words.charAt(3),0,0);
  pop();
}

class pung {
  constructor(x,y,speed,direction) {
    this.pos = createVector(x,y);
    this.vel = createVector(0,0);
    this.vel.set(speed);
    this.vel.rotate(direction);
  }
  
  update() {
    this.pos.add(this.vel);
  }
  
  render() {
    fill(255,0,0);
  ellipse(this.pos.x, this.pos.y, 5,5);
  }
}
