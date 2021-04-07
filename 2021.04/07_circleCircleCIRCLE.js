let inc = 1;
let y;
let pos;
let els = [];
let mx, my;
let ds = [];
let actRandomSeed = 0;
let randomColor =[];
let randomPicker = [];
function setup() {
  createCanvas(400, 400);
  textAlign(CENTER, CENTER);
  textSize(80);
  textStyle(ITALIC);
  pos = createVector(width/2, height/2);
  randomColor = [random(255),random(255),random(255)];
  randomPicker = int([random(0,3),random(0,3),random(0,3)]);
  for(let i = 0; i < 10; i++) {
    els[i] = new el(i);
  }
  
  for(let i = 0; i < 3; i++ ) {
    ds[i] = new Disappear();    
  }
  
}

function draw() {
  background(220);
  randomSeed(actRandomSeed);
  
  for(let i = 0; i < ds.length; i++) {
    push();
    fill(0);
  text('CIRCLE', width/2, height/2 - 25 + i * 30 )
    pop();
  ds[i].render(i);    
  }

  //main 
  mx = width/2;
  my = height/2+100;
  let mr = 50;
  
  
  fill(255,0,0,map(sin(1-frameCount/50),-1,1,0,255));
  noStroke();
  ellipse(width/2, height/2 + 100,mr, mr);
  
  // translate(width/2, height/2);
  for(let i = 0; i< els.length; i++) {
    push();
    els[i].update();
    els[i].edges();
    els[i].render();
    
    let d = dist(mx,my,els[i].pos.x, els[i].pos.y);
    
    if(d < mr/2 + 5) {
        els[i].spread();
    }
  }
  pop();
  
  // console.log(floor(map(sin(1-frameCount/50),-1,1,0,255)));
}

class el {
  constructor(i) {
    this.pos = createVector(width/2, 0 + (i*10));
    this.vel = createVector(0,3);
    this.acc = createVector(0,0);
    this.radius = 5;
  }
  
  update() {
    this.pos.add(this.vel);
    this.vel.add(this.acc);
    this.acc.mult(0);
  }
  
  edges() {
    if(this.pos.y > height) this.pos.y = 0;
    if(this.pos.y < 0) this.pos.y = height;
    if(this.pos.x > width) this.pos.x = 0;
    if(this.pos.x < 0) this.pos.x = width;
  }
  
  applyForce(force) {
    this.acc.add(force);
  }
  spread() {
    this.applyForce(0.5);
    this.vel.rotate(random(TWO_PI));
  
    // this.vel.setMag(3);
    // this.applyForce(-1.5);
  }
  
  render() {
    push();
    fill(0);
    noStroke();
    ellipse(this.pos.x, this.pos.y,this.radius,this.radius);
    pop();
  }
}

class Disappear {
  constructor() {
    this.pos = createVector(random(width),random(height));
    this.r = 100;
  }
  
  render(i) {
    
    let dis = floor(map(sin(1-frameCount/50),-1,1,0,255));
    
    if(dis == 0) {
      
      actRandomSeed = random(10000);
      
    }
    fill(randomColor[randomPicker[i]],randomColor[randomPicker[1]],randomColor[randomPicker[0]],map(sin(1-frameCount/50),-1,1,0,255));
    ellipse(random(width),random(height), this.r, this.r);
  }
}
