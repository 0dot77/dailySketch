// ***** MADE BY @Carfree.sun (TaeYang Yoo) ***** //

//----------------------//
// INSPIRE || REFERENCE //
//                      //
//----------------------//


//----------------------//
// **    PRELOAD    **  //
//----------------------//

function preload() {
  
}

//----------------------//
// START MY GLOBAL SET  //
//----------------------//

// using Loop tool
let percent;
let totalFrames = 60;

//----------------------//
// **     SET UP     ** //
//----------------------//

function setup() {
  createCanvas(400, 400);
  rectMode(CENTER);
}

//----------------------//
// **      DRAW      ** //
//----------------------//

function draw() {
  background(52, 107, 107);
  translate(width/2, height/2);
  percent = (1*(frameCount-1)/totalFrames)%1;
  let r = map(mouseX,0,width,0,360);
  rotate(radians(r));
  //outer
  
  push();
  noFill();
  stroke(220);
  strokeWeight(10);
  ellipse(0,0, width,height);
  pop();
  //inner
  
  push();
  noStroke();
  fill(220);
  for(let i = 0; i <16; i++) {
  rotate(radians(360/16));
    fill(220);
    rect(100,0,200,50);
    fill(3, 24, 43);
  ellipse(100, 0, 200,30);
 }
  pop();
  
  push();
  stroke(220);
  fill(3, 24, 43);
  strokeWeight(20);
  ellipse(0,0, 100,100);
  pop();
  
  push();
  fill(220);
  noStroke();
  ellipse(0,0, 20,20);
  pop();
  
  push();
  rotate(radians(25));
  noStroke();
    for(let i = 0; i <6; i++) {
    rotate(360/49);
    fill(220);
    ellipse(28,0,20,20);
  }
  pop();
}




















