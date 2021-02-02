function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(0,0,0);
  
  stroke(100,240,100);
  strokeWeight(3);
  translate(width/2, height/2);
  for (let x = -400; x < 400; x += 10) {
    let pr = 100;
    let px = pr * cos(x);
    let py = pr * sin(x);
    line(x, map(sin(x + frameCount / 100), -1, 1, -400, 400), px,py);
  }


  beginShape();
  fill(0,255,160,100);
  push();
  for (let i = 0; i < 25; i++) {
    let r = 100;
    let vx = r * cos(i);
    let vy = r * sin(i);
    
    vertex(vx, vy);
  }
  endShape(CLOSE);
  pop();
}
