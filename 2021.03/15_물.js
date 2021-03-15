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
let myFont;
let points;
let bounds;


//----------------------//
// **    PRELOAD    **  //
//----------------------//

function preload() {
  myFont = loadFont('NanumBarunGothicBold.otf');
}

//----------------------//
// **     SET UP     ** //
//----------------------//

function setup() {
  createCanvas(400, 400);
  
  points = myFont.textToPoints('물',width/2, height/2, 50, {
    sampleFactor : 0.5
  })
  
  bounds = myFont.textBounds('물',width/2, height/2, 100);

}

//----------------------//
// **      DRAW      ** //
//----------------------//

function draw() {
  background(0,100,188);
  percent = (1*(frameCount-1)/totalFrames)%1;
  
  push();
  translate(-bounds.x * width / bounds.w, -bounds.y * height / bounds.h);
  beginShape();
  for(let i = 0; i < points.length-1; i++) {
    let p = points[i];
    
    noStroke();
    fill(255);
    circle(p.x * width/bounds.w + 100 + sin(50+frameCount/10 + (p.y*2) * width/bounds.w), p.y * height / bounds.h - 80 + sin(frameCount/30 + p.x * width/bounds.w),map(sin(frameCount/50),-1,1,3,i%15));
  }
  endShape(CLOSE);
  pop();
}
















