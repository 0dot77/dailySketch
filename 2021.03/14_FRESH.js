let waterSwitch = false;
let waters = [];

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(200);
  operate(width/2, height/3);
  
  push();
  translate(width/2, height/2);
  if(waterSwitch) {
    for(let i = 0; i < 2; i++) {
      waters.push(new water(random(110,290),random(150,180),createVector(0,3)));
    }
  }
  pop();
  
  
  for(let i = 0; i < waters.length; i++) {
    waters[i].applyForce(createVector(0,random(0.2,0.9)));
    waters[i].update();
    waters[i].render();
    
    if(waters[i].finished()) {
      waters.splice(i,1);
    }
  }
  
  push();
  fill(0);
  rectMode(CENTER);
  rect(width/2, height/3, 200,100,30,30);
  pop();
  
  push();
  
  if(waterSwitch) {
    fill(255,0,0);
  } else {
    noFill();
  }
  stroke(255,0,0);
  textStyle(BOLD);
  textSize(35);
  textAlign(CENTER,CENTER);
  text('R', width/2, height/3);
  ellipse(width/2 -50, height/3, 30,30);
  ellipse(width/2  + 50, height/3, 30, 30);
  pop();
  
}

function water(x,y,speed) {
  //포지션은 랜덤한 위치에서 발생 (사각형의 틀 범위 내에서)
  this.pos = createVector(x,y);
  this.vel = p5.Vector.random2D();
  this.vel.set(speed);
  this.acc = createVector(0,0);
  this.size = random(5,10);
  
  this.applyForce = function(force) {
    this.acc.mult(force);
  }
  
  this.update = function() {
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.set(0,0);
  }
  
  this.render = function() {

    noStroke();
    fill(0,100,200);
    circle(this.pos.x, this.pos.y, this.size);
  }
  
  this.finished = function() {
    return this.pos.y > height - this.size/2;
  }
}

function operate(x,y) {
  let distance = dist(mouseX,mouseY,x,y);
  
  if(distance < 70) {
    waterSwitch = true;

  } else {
    waterSwitch = false;
  }
}
