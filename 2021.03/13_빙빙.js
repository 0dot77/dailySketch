let ells = [];
let c1, c2;

function setup() {
  createCanvas(400, 400);
  c1 = color(42, 57, 199);
  c2 = color(248, 255, 41);
}

function draw() {
  background(255);
  
  if(frameCount%60 == 29) {
    ells.push(new ell1(width/2, height/2, 30));

  }
  
  if(frameCount%60 == 59) {
        ells.push(new ell2(width/2, height/2, 30));
  }

  for(let i = 0; i < ells.length; i++) {
    
    ells[i].update();
    ells[i].render();
    
    //splice로 배열의 것들을 없애 줄 때, index가 앞으로 땡겨지면서 바뀌던 색깔이 자리를 바꾸게 된다.
    if(ells[i].finished()) {
      ells.splice(i,1);
    }
  }
  
  push();
  for(let i = 1; i < 5; i++) {
    textSize(50);
    textAlign(CENTER, CENTER);
    let m =constrain(mouseX,50,width - 50);
    
    if(i%2 == 1) {
      fill(c1);
    } else {
      fill(c2);
    }
    text('빙빙',m + i * 2, height/2 + i*2); 
  }
  pop();
}

function ell1(x,y,size) {
  this.pos = createVector(x,y);
  this.size = size;
  this.sizeUp = 2;
  this.update = function() {
    this.size += this.sizeUp;
  }
  
  this.render = function() {
    fill(c1);
    noStroke();
    ellipse(this.pos.x, this.pos.y, this.size);
  }
  
  this.finished = function() {
    return this.size > width * 2.5;
  }
}
  function ell2(x,y,size) {
  this.pos = createVector(x,y);
  this.size = size;
  this.sizeUp = 2;
  this.update = function() {
    this.size += this.sizeUp;
  }
  
  this.render = function() {
    fill(c2);
    noStroke();
    ellipse(this.pos.x, this.pos.y, this.size);
  }
  
  this.finished = function() {
    return this.size > width * 2.5;
  }
}
