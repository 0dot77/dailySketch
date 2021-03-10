let cloudsNum = 10;
let clouds = [];
let cloud;

function preload() {
  cloud = loadImage('asset/cloud.svg');
}
function setup() {
  createCanvas(400, 400);
  
  for(let i = 0; i < cloudsNum; i++) {
    clouds.push(new c(random(width), random(height),random(1,2)));
  }
}

function draw() {
  background(0,100,200);
  
  textSize(100);
  textAlign(CENTER,CENTER);
  fill(189, 53, 112);
  noStroke();
  textStyle(ITALIC);
  text('살랑살랑', width/2 + map(tan(frameCount/50),-1,1,-30,30), height/2 + map(cos(frameCount/50),-1,1,-50,50));
  
  for(let i = 0; i < clouds.length; i++) {
    clouds[i].update();
    clouds[i].render();
  }
  
  
}

function c(x,y,speed) {
  this.pos = createVector(x,y);
  this.vel = createVector(0,0);
  this.vel.set(speed);
  
  this.update = function() {
    this.pos.x += this.vel.x;
    
    if(this.pos.x - 50 > width) this.pos.x = -50;
  }
  
  this.render = function() {
    image(cloud,this.pos.x, this.pos.y);
  }
}
