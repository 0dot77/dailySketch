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
}

//----------------------//
// **      DRAW      ** //
//----------------------//

function draw() {
  background(230, 232, 118);
  
  push();
  translate(width/2, height/2);
  stroke(84, 60, 28);
  strokeWeight(10);
  ellipse(0,0,width,height);
  ellipse(0,0,300,300);
  push();
  strokeWeight(5);
  line(0,-200,0,200);
  line(-200,0,200,0);
  pop();
  
  push();
  for(let i = 0; i < 2; i++) {
    rotate(PI);
    strokeWeight(5);
    line(-25,-25,-25,-200);
    line(-25,-25,-200,-25);
    
    line(25,-25,25,-200);
    line(25,-25,200,-25);
  }
  pop();
  
  push();
  for(let i = 0; i < 4; i++) {
    rotate(radians(360/4));
    strokeWeight(5);
    line(50,-50,140,-140);
  }
  pop();
  
  push();
  rectMode(CENTER);
  strokeWeight(5);
  noFill();
  rect(0,0,100,100);
  pop();
  
  pop();
  
  
  let doorOpen = map(sin(1 - frameCount/50),-1,1,200,0);
  push();
  noStroke();
  fill(200);
  rect(0 - doorOpen,0,200,400);
  rect(width/2 +doorOpen,0,200,400);
  pop();
  
  percent = (1*(frameCount-1)/totalFrames)%1;
  
  translate(width/2- 40, height/2 - 40);
  push();
  scale(0.2,0.2);
  translate(width/2, height/2);
  stroke(84, 60, 28);
  strokeWeight(10);
  ellipse(0,0,width,height);
  ellipse(0,0,300,300);
  push();
  strokeWeight(5);
  line(0,-200,0,200);
  line(-200,0,200,0);
  pop();
  
  push();
  for(let i = 0; i < 2; i++) {
    rotate(PI);
    strokeWeight(5);
    line(-25,-25,-25,-200);
    line(-25,-25,-200,-25);
    
    line(25,-25,25,-200);
    line(25,-25,200,-25);
  }
  pop();
  
  push();
  for(let i = 0; i < 4; i++) {
    rotate(radians(360/4));
    strokeWeight(5);
    line(50,-50,140,-140);
  }
  pop();
  
  push();
  rectMode(CENTER);
  strokeWeight(5);
  noFill();
  rect(0,0,100,100);
  pop();
  
  pop();
}















