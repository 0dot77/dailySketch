// ***** MADE BY @Carfree.sun (TaeYang Yoo) ***** //

//----------------------//
// INSPIRE || REFERENCE //
// korean traditional patterns
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
let interactiveBool = false;
let interactiveSlider;
let activeSwitch = false;
let strokeInteraction = 5;
let switchCount = 0;

//----------------------//
// **     SET UP     ** //
//----------------------//

function setup() {
  createCanvas(400, 400);
  // interactiveSlider = createSlider(0,1,0.5,0.1);
  // interactiveSlider.position(width/2 -65, height/2 + 200);
}

//----------------------//
// **      DRAW      ** //
//----------------------//

function draw() {
  background(36, 40, 117);

  //INTERACTIVE//
  
  if(interactiveBool) {
    percent = (1*(frameCount-1)/totalFrames)%1;
    strokeInteraction = map(tan(percent),0,1,5,30);
    
    if(int(strokeInteraction) == 5) {
      switchCount += 1;
      
      if(switchCount == 2) {
        interactiveBool = false;
        switchCount = 0;
        percent = 0;
      }
    }
  }
  
  
  translate(width/2, height/2);
  noFill();
  
  // background Circle
  push();
  strokeWeight(2);
  ellipse(0,0,width,height);
  pop();
  
  // inner Circle
  push();
  strokeWeight(strokeInteraction);
  let innerCircleWidth = width/1.11;
  let innerCircleHeight = height/1.11;
  ellipse(0,0,innerCircleWidth, innerCircleHeight);
  pop();
  
  //standard rect
  // rectMode(CENTER);
  // rect(0,0,30,30);
  
  
  //inner Pattern 
  
  for(let i = 0; i < 2; i++) {
  rotate(radians(360/2));
  push();
  strokeWeight(strokeInteraction);
  
  //outer
  line(-15,-15,-15,-177);
  line(-15,-15,-177,-15);
  
  strokeWeight(5);
  line(-30,-50,-30,-177);
  line(-30,-50,-170,-50);
  
  strokeWeight(3);
  line(-40,-70,-40,-177);
  line(-40,-70,-165,-70);
  pop();
  }
  push();
  strokeWeight(strokeInteraction);
  
  for(let i= 0; i < 2; i++) {
  //outer
  rotate(radians(360/2));
  push();
    
  line(15,-15,15,-177);
  line(15,-15,177,-15);
  
  strokeWeight(5);
  line(30,-50,30,-177);
  line(30,-50,170,-50);
  
  strokeWeight(3);
  line(40,-70,40,-177);
  line(40,-70,165,-70);
  pop();
  }
}

function mouseReleased() {
  interactiveBool = true;
}




















