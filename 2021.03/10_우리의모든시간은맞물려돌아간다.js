let words = '우리의모든시간은맞물려돌아간다'
let cloud;
let cloudX = 180;
let speed;
let cloudsNum = 6;
let clouds = [];
function preload() {
  cloud = loadImage('/W_cloud.svg');
}
function setup() {
  createCanvas(400, 400);
  speed = random(0.05, 0.1);
  
  for(let i = 0; i < cloudsNum; i++) {
    clouds.push(new c(cloudX,0,random(0.05,0.1)));
  }
}

function draw() {
  background(0);
  
  push();
  translate(width/2, height/2);

  textSize(15);
  fill(255);
  rotate(radians(frameCount/10));
  for(let i = 0; i < words.length; i++) {
    rotate(radians(360/15));
    text(words.charAt(i), 70,0); 
  }
  pop();
  
  push();
  translate(width/2, height/2);
  rotate(radians(frameCount/10));
  for(let i = 0; i < 6; i++) {
    rectMode(CENTER);
    rotate(radians(60));
    rect(130,0,80,20);
  }
  pop();
  
  push();
  translate(width/2, height/2);
  rotate(radians(frameCount/10));
  rotate(radians(30));
  for(let i = 0; i < 6; i++) {
    rectMode(CENTER);
    rotate(radians(60));
    fill(0,100,200);
    rect(180,0,150,135,45,45);
    imageMode(CENTER);
    clouds[i].update();
    clouds[i].render();
  }
  pop();
}

function c (x,y,speed) {
  this.pos = createVector(x,y);
  this.vel = createVector(0,0);
  this.vel.set(speed);
  
  this.update = function() {
    this.pos.x += this.vel.x;
    
    if(this.pos.x + 25 > 255) this.pos.x = 150;
  }
  
  this.render = function() {
    image(cloud,this.pos.x, this.pos.y);
  }
}
