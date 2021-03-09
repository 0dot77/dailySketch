let pg;
  let x = 20;
  let speed = 2;
let y = 0;
let circleSize = 30;
function setup() {
  createCanvas(400, 400);
  pg = createGraphics(160,160);
  
}

function draw() {
  background(255,map(sin(frameCount/50),-1,1,50,100),0);
  pg.rectMode(CENTER);
  
  pg.fill(0,100,200);
  pg.noStroke();
  pg.ellipse(0,0,160,160);
  
  pg.fill(255);
  pg.ellipse(x,y,circleSize,circleSize);
  
  y = map(sin(frameCount/100),-1,1,circleSize/2,80 - circleSize/2);
  x += speed;
  
  if(x + circleSize/2 > 80 || x - circleSize/2 < 0) {
    speed *= -1;
  }
  
  let tileCount = 5;
  let tileW = width/tileCount;
  let tileH = height/tileCount;
  
  for(let gridY = 0; gridY < tileCount; gridY++) {
    for(let gridX = 0; gridX < tileCount; gridX ++) {
      let px = gridX * tileW;
      let py = gridY * tileH;
      let angle = atan2(mouseY-py, mouseX-px);
      push();
      translate(px,py);
      rotate(angle);
      // imageMode(CENTER);
      image(pg,0,0);
      pop();
    }
  }
}
