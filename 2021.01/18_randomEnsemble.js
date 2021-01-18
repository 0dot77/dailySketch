function setup() {
  createCanvas(400, 400);

  noStroke();
  rect(0, 0, 400, 100);
  fill(50,88,250);
  rect(0, 100, 400, 200);
  fill(255);
  rect(0, 300, 400, 100);

  push();
  fill(0, 200);
  // rotate(random(radians(360)));
  fill(200,250,100);
  ellipse(random(50, 350), random(100, 300), 100);
  square(random(50, 350), random(100, 300), 50);
  stroke(200,250,100);
  strokeWeight(4);
  line(random(0, 400), random(100, 300), random(0, 400), random(100, 300));
  pop();
}

function draw() {
  if(mouseIsPressed) {
    saveCanvas();
  }
}
