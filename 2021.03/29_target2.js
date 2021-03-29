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
let randomColor;
let r;
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
  noStroke();
  
  r = random(2, 10);
}

//----------------------//
// **      DRAW      ** //
//----------------------//

function draw() {
  background(0);
  
  let tileX = 5;
  let tileY = 5;
  
  let tileW = width/tileX;
  let tileH = height/tileY;
  
  // translate(tileW/2, tileH/2);
  for(let x = 0; x < tileX; x++) {
    for(let y = 0; y < tileY; y++) {
      let px = x * tileW + tileW/2;
      let py = y * tileH + tileH/2;
      // translate(px,py);
      push();
      ellipse(px,py, width/10, height/10);
      pop();
      
      push();
      translate(px,py);
      rotate(radians(frameCount * (x+y * 0.25)));
      fill(255,255,0);
      stroke(0);
      line(0,0,20,0);
      noStroke();
      triangle(25,0, 35,- 10, 35, 10);
      pop();
    }
  }
}


















