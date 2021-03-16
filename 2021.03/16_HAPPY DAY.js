// ***** MADE BY @Carfree.sun (TaeYang Yoo) ***** //

//----------------------//
// INSPIRE || REFERENCE //
//                      //
//----------------------//

//----------------------//
// START MY GLOBAL SET  //
//----------------------//

// using Loop tool
let percent;
let totalFrames = 60;
let pushSwitch = false;
let count = 0;
let elSize = 50;
let wordCount = 0;
let words = 'HAPPYDAY';
let backgroundCircles = [];
let backgroundCirclesNum = 30;
let colorPicker = 0;
let rSize;
//----------------------//
// **    PRELOAD    **  //
//----------------------//

function preload() {
  
}


//----------------------//
// **     SET UP     ** //
//----------------------//

function setup() {
  createCanvas(400, 400);
  rectMode(CENTER);
  textAlign(CENTER, CENTER);
  
  for(let i = 0; i < backgroundCirclesNum; i++) {
    backgroundCircles.push( new backgroundCircle(random(width),random(height),random(10,50),random(50,200)));
  }
}

//----------------------//
// **      DRAW      ** //
//----------------------//

function draw() {
  background(255);
  
  percent = (1*(frameCount-1)/totalFrames)%1;
  
  //background
  push();
  noStroke();
  fill(0,200);
  for(let i = 0; i < backgroundCircles.length; i++) {
    let b = backgroundCircles[i];
    b.render();
  }
  pop();
  
  //switch
  if(mouseIsPressed) {
    if(mouseX > width/2 + 50 && mouseX < width/2 + 150 && mouseY > height/2 + 90 && mouseY < height/2 + 110) {
      pushSwitch = true;
    } 
  }
  
  //push pipe
  
  push();
  let linePush = map(cos(frameCount/30),1,-1,100,150);
  let lineY = height/2 + 100;
  if(pushSwitch) {
    lineY   +=  -100 + linePush;
    if(floor(linePush) == 100) {
      count += 1;
      if(count == 2) {
        pushSwitch = false;
        count = 0;
      }
    }
  } else {
  }
  stroke(0);
  line(width/2 + 100, lineY, width/2 + 100, height); 
  noStroke();
  fill(255,0,0);
  rect(width/2+100, lineY, 100,20);
  pop();
  
  //line
  push();
  beginShape();
  for(let i = 0; i < 50; i++) {
    noFill();
    vertex(width/2 + map(sin(i + frameCount/10),-1,1,-5,5), height/2 + (i * 10));
  }
  endShape();
  pop();
  
  //bullon
  push();
  if(count == 1) {
    elSize += 10;
    wordCount += 1;
  if(wordCount > 8) {
        wordCount = 0;
      }
  }
  constrain(elSize,50,width);
  noStroke();
  fill(0);
  ellipse(width/2 + map(sin(frameCount/50),-1,1,-5,5), height/2, elSize, elSize);
  textSize(elSize);
  fill(255);
  text(words.charAt(wordCount), width/2 +  map(sin(frameCount/50),-1,1,-5,5), height/2 - 2);
  pop();
  
 // console.log(count);
  
  push();
  translate(0,map(sin(frameCount/50),-1,1,5,15));
  fill(0);
  text('CLICK THIS BUTTON!', width/2 + 100, height/2 + 30);
  line(width/2 + 100, height/2 + 70, width/2 + 100, height/2 + 40);
  line(width/2 + 100, height/2 + 70, width/2 + 90, height/2 + 50);
  line(width/2 + 100, height/2 + 70, width/2 + 110, height/2 + 50);
  pop();
}

function backgroundCircle(x,y,size,alpha) {
  this.pos = createVector(x,y);
  this.size = size;
  this.a = alpha;
  
  this.render = function() {
    fill(0, this.a);
    circle(this.pos.x, this.pos.y, this.size);
  }
}












