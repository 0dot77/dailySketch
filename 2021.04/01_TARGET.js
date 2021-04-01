let angle = 0;
function setup() {
  createCanvas(400, 400);
}

function draw() {
  blendMode(BLEND);
  background(100,0,0);
      translate(width/2, height/2);
  blendMode(DIFFERENCE);
  //sub Circle
  
  push();
  fill(255,0,255);
  for(let i = 150; i > 0; i -= 10) {
    rotate(radians(map(sin(frameCount/100-1),-1,1,-100,100)))
    rectMode(CENTER);
    noStroke();
    rect(i,0,i,i);
    ellipse(i,0, i, i);
    
  }
  pop();

  // main Circle 
  
  push();
  noStroke();
  fill(100,0,0);
  
  for(let i = 0; i < 400; i+= 10) {
  ellipse(0,0,i,i);
  }
  pop();
  
}
