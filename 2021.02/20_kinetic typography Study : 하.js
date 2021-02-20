let myFont;
let word = '하';
let fireWorksWord = [];
let spliceWord = false;

function preload() {
  myFont = loadFont('IropkeBatangM.otf');
}

function setup() {
  createCanvas(400, 300);
  textFont(myFont);
  textAlign(CENTER, CENTER);
  noCursor();
}

function draw() {
  background(0, 50);
  fill(255);
  
  push();
  textSize(30);
  fill(map(sin(frameCount/10),-1,1,0,255));
  text('MOUSE CLICK!!', width/2, height/2);
  pop();
  
  push();
  fill(100);
  noStroke();
  ellipse(mouseX,mouseY,15,15);
  pop();

  //splice 함수를 사용할 때는 배열 자체에 splice 함수를 사용하기. 하나씩 정의하려고 [i] 등의 인덱스를 참조해주지 않아도 괜찮다.
  
  for (let i = 0; i < fireWorksWord.length; i++) {
    fireWorksWord[i].update();
    // fireWorksWord[i].spin();
    fireWorksWord[i].render();
    fireWorksWord[i].edge();
    if (spliceWord) fireWorksWord.splice(i,1);
  }
}

function hahaha(x, y, speed, direction) {
  this.pos = createVector(x, y);
  this.vel = createVector(0, 0);
  this.vel.set(speed);
  this.vel.rotate(direction);

  this.update = function() {
    this.pos.add(this.vel);
  }
  
  // this.spin = function() {
  //   push();
  //   translate(this.pos.x, this.pos.y);
  //   this.pos.heading(frameCount);
  //   pop();
  // }

  this.render = function() {
    text(word, this.pos.x, this.pos.y);
  }

  this.edge = function() {
    if (this.pos.x > width || this.pos.x < 0) spliceWord = true;
    else {
      spliceWord = false;
    }
    if (this.pos.y > height || this.pos.y < 0) spliceWord = true;
    else {
      spliceWord = false;
    }
  }
}

function mouseClicked() {
  for (let i = 0; i < 50; i++) {
    fireWorksWord.push(new hahaha(mouseX, mouseY, random(0, 2), random(TWO_PI)));
  }
}
