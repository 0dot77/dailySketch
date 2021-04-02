let words = 'WHEREWEGO'
function setup() {
  createCanvas(400, 400);
  textSize(50);
  textAlign(CENTER, CENTER);
}

function draw() {
  background(0);
  translate(width / 2, height / 2);
  
  push();
  noStroke();
  fill(255,0,0,100);
  ellipse(0,0,300,300);
  pop();
  
  push();
  rotate(radians(frameCount/25));
  for(let i = 0; i < words.length; i++) {
    rotate(radians(180/words.length));
    fill(255);
    text(words[i], 160, 0);
    fill(255,100);
    text(words[i], 165,5);
  }
  pop();
  
  push();
  pop();
  //compass
  push();
  rotate(radians(frameCount));
  noStroke();
  beginShape();
  vertex(0, -50);
  vertex(50, 50);
  vertex(0, 25);
  vertex(-50, 50);
  vertex(0, -50);
  endShape();
  pop();

  //mountain
  push();
  // noStroke();
  strokeWeight(5);
  stroke(0,200,0);
  fill(0,230,150);
  triangle(-50, -100, 0, -180, 50, -100);
  pop();

  //sea

  push();
  noFill();
  strokeWeight(3);
  stroke(0,0,255);
  //curve(p1,p2,p3,p4);
  curve(-50, 250, 110, -10, 180, -10, 200, -250);
  curve(-50, 250, 110, 0, 180, 0, 200, -250);
  curve(-50, 250, 110, 10, 180, 10, 200, -250);
  pop();
  
  
  //road
  push();
  strokeWeight(5);
  stroke(200,100,0);
  line(-80,50,-180,50);
  pop();
}
