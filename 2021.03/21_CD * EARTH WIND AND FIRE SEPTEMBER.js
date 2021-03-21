// ***** MADE BY @Carfree.sun (TaeYang Yoo) ***** //

//----------------------//
// INSPIRE || REFERENCE //
//                      //
//----------------------//

//----------------------//
// START MY GLOBAL SET  //
//----------------------//

// using Loop tool
let playCount = 0;
let p;
let cloud;

//----------------------//
// **    PRELOAD    **  //
//----------------------//

function preload() {
  cloud = loadImage('cloud.svg');
}


//----------------------//
// **     SET UP     ** //
//----------------------//

function setup() {
  createCanvas(400, 400);
  p = new playButton(0,0,40);
  textAlign(CENTER,CENTER);
  cloud.resize(30,60);
}

//----------------------//
// **      DRAW      ** //
//----------------------//

function draw() {
  //CD background
  background(235, 151, 113,100);
  
  //CD
  /*
  CD 표면에 shape을 입혀야하기 때문에 constrain을 사용해서 값을 제한해줘야 함
  */
  translate(width/2, height/2);
  
  
  push();
  fill(255,50);
  stroke(187,0,0);
  ellipse(0,0, width,height);
  pop();
  
  push();
  let tx = -150;
  let ty = -120;
  if(playCount == 1) {
  rotate(radians(frameCount));
  }
  for(let i = 0; i < 10; i++) {
    textSize(50);
    stroke(244,0,0, 255 - i * 25);
    translate(i,0);
    scale(0.8);
    noFill();
    text('S',tx,ty - 40);
    text('E',tx,ty);
        text('P',tx,ty + 40);
        text('T',tx,ty + 80);
        text('E',tx -2, ty + 120);
        text('M',tx + 3,ty + 160);
        text('B',tx,ty + 200);
        text('E',tx - 2,ty + 240);
        text('R',tx -1 ,ty + 280);
  }
  
  pop();
  
  push();
  textStyle(ITALIC);
  noFill();
  textSize(20);
  strokeWeight(3);
  stroke(255);
  text('EARTH WIND AND FIRE', 0,150);
  pop();
  
  
    // inner CD circle
  push();
  noFill();
  stroke(255,0,0);
  ellipse(0,0, 100,100);
  pop();
  
  push();
  //CD player 돌아가는 부분 관리
  if(playCount == 1 && p.playBack()){
  rotate(radians(frameCount));
  } else if (playCount == 2) {
  rotate(0);
  }
  for(let i = 0; i < 6; i++) {
  stroke(0);
  rotate(radians(360/6));
  push();
  rotate(radians(60));
  noStroke();
  fill(255);
    image(cloud, 30,-10);
  // rect(30,-10,10,20);
  pop();
    }
  pop();

  
  // play
  push();
//   // let playButton = map(sin(LoopStart+ frameCount/50),-1,1,20,255);
  
      
  //플레이 버튼을 눌러서 원이 커질 때
  if(playCount == 1) {
    p.playBack();
    p.colors();
    p.run();
  //플레이 버튼을 다시 누를 때, -> 정지 시킬 때
  } else if (playCount == 2){
    p.playDrop();
    p.colors();
    p.stop();
    
    //초기 상태
  } else if (playCount == 0) {
    p.colors();
    p.init();
  }
  
//   if(playCount == 1) {
//     p.update();
//   }
  pop();
  
  // console.log(playCount);
}

function mousePressed() {
  // CD 플레이 정지 및 동작 카운트로 관리
  playCount += 1;
  if(playCount == 3) {
    playCount = 0;
  }
}

function playButton(x,y,size) {
  this.pos = createVector(x,y);
  this.stopSize = 400;
  this.updateSize = 5;
  this.startSize = size;
  this.maxSize = 400;
  this.minSize = 40;
}



//playButton color
playButton.prototype.colors = function() {
  let c = map(this.startSize, 40, 400,255,0);
  fill(255, 0, 0,c);
}

//playBack, playDrop은 원이 커졌다가 작아졌다의 애니메이션을 관리함
playButton.prototype.playBack = function() {
  this.startSize += this.updateSize;
  if(this.startSize <= this.maxSize) {
    this.updateSize = 5;
  } else if (this.startSize >= this.maxSize) {
    this.updateSize = 0;
  }
  
  return this.startSize;
}

playButton.prototype.playDrop = function() {
  this.startSize += this.updateSize;
  if(this.startSize >= this.minSize) {
    this.updateSize = -5;
  } else if (this.startSize <= this.minSize) {
    this.updateSize = 0;
  }
}

//playButton의 초기 상태
playButton.prototype.init = function() {
  noStroke();
  ellipse(this.pos.x, this.pos.y, this.startSize);
}
playButton.prototype.run = function() {
  noStroke();
  ellipse(this.pos.x, this.pos.y, this.startSize);
}

playButton.prototype.stop = function() {
  noStroke();
  ellipse(this.pos.x, this.pos.y,this.startSize);
}



















