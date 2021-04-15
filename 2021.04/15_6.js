function setup() {
  createCanvas(400, 400);
}

function draw() {
  blendMode(BLEND);
  background(0);
  blendMode(DIFFERENCE);

  translate(width / 2, height / 2);

  //main circle

  strokeWeight(10);
  stroke(255,255,0);
  fill(0);
  ellipse(0, 0, 300, 300);

  push();
  noStroke();
  fill(255);
  rotate(radians(frameCount));
  triangle(150, -300, 0, 0, 600, -150);
  pop();
  
  push();
  noStroke();
  textAlign(CENTER, CENTER);
  fill(255);
  textSize(250);
  text('6',0,0);
  pop();
}
