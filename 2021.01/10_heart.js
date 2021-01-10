let angle = 0;
let randomV;

function setup() {
  createCanvas(400, 400);
  randomV = random(0, 360);
}

function draw() {
  background(55);
  // let from = color(130,48,22);
  // let to = color(200,150,177);
  // let per = map(mouseX,0,width,0,1);
  // let c = lerpColor(from,to,per);
  

  noFill();
  stroke(255,0,0,50);
  rectMode(CENTER);
  for (var sqarSize = 0; sqarSize < 1000; sqarSize += 1) {
    push();
    translate(width / 2, height / 2);
    rotate(radians(sqarSize));
    translate(50,135);
    square(0, 0, sqarSize)
    angle += 0.1;
    
    pop();
  }
  
  if(mouseIsPressed) {
    saveCanvas();
  }
}
