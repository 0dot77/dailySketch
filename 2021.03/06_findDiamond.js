let tileCount = 10;
let tileW;
let tileH;
let maxDist;
let shapeAngle = 0;

function setup() {
  createCanvas(400, 400);
  tileW = width / tileCount;
  tileH = height / tileCount;
maxDist = sqrt(pow(width,2) + pow(height,2));
  rectMode(CENTER);
}

function draw() {
  clear();
  background(0);
  
  for(let y = 0; y < tileCount; y++) {
    for(let x = 0; x < tileCount; x++) {
      let px = tileW * x + tileW /2;
      let py = tileH * y + tileH /2;
      
      
      //standard points
      strokeWeight(2);
      fill(0);
      point(px,py);
      
      //마우스 커서에 각도를 맞추는 방법 (자주 사용할 수 있도록 해보자)
      let angle = atan2(mouseY - py, mouseX - px);
      
      push();
      translate(px,py);
      rotate(angle);
      let colors = map(dist(mouseX,mouseY,px,py),0,400,0,255);
      let elSize = map(dist(mouseX,mouseY,px,py),0,400,5,30);
      strokeWeight(5);
      stroke(50,colors,colors);
      fill(colors,colors,100);
      rect(0,0,elSize,elSize);
      pop();
    }
  }
}

function keyPressed() {
  saveCanvas();
}
