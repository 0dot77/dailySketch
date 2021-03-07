let tileCount = 10;
let tileW;
let tileH;
let actSeedRandom = 0;
function setup() {
  createCanvas(400, 400);
  tileW = width/tileCount;
  tileH = height/tileCount;
  
}

function draw() {
  blendMode(BLEND);
  background(255);
  
  randomSeed(actSeedRandom);
  
  for(let ey = 0; ey < tileCount; ey++) {
    for(let ex = 0; ex < tileCount; ex++) {
      let pex = ex * tileW + tileW/2;
      let pey = ey * tileH + tileH/2;
      
      fill(0);
      strokeWeight(1);
      
      let shiftX = random(-1,1) * mouseX / 40;
      let shiftY = random(-1,1) * mouseY / 40;
      ellipse(pex + shiftX,pey + shiftY,30,30);
    }
  }
  blendMode(DIFFERENCE);
  for(let y = 0; y < tileCount; y++) {
    for(let x = 0; x < tileCount; x++) {
      let px = x * tileW + tileW/2;
      let py = y * tileH + tileH/2;
      
      textSize(30);
      strokeWeight(5);
      textAlign(CENTER, CENTER);
      
      let angle = atan2(mouseY - py, mouseX - px);
      push();
      fill(0,255,0);
      translate(px,py);
      rotate(angle);
      text('가',0,0);
      pop();
    }
  }
}

function mousePressed() {
  actSeedRandom = random(100000);
}

function keyPressed() {
  saveCanvas();
}
