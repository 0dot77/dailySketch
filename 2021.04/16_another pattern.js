let obX, obY;

function setup() {
  createCanvas(400, 400);
  noCursor();
  rectMode(CENTER);

  obX = 100;
  obY = 200;
}

function draw() {
  background(0);

  let d1 = dist(mouseX, mouseY, obX, obY);
  let d2 = dist(mouseX, mouseY, obX + 200, obY);
  push();
  translate(obX, obY);
  if (d1 < 75) {
    scale(2);
    ellipse(0, 0, 50, 50);
  } else {
    ellipse(0, 0, 50, 50);
  }
  pop();

  push();
  translate(obX + 200, obY);
  
  if (d2 < 75) {
    scale(2);
    ellipse(0, 0, 150, 150);
  } else {
    ellipse(0, 0, 150, 150);
  }
  pop();
  //microscope

  push();
  blendMode(BLEND);
  translate(mouseX, mouseY);

  for (let num = 0; num < 6; num++) {
    rotate(radians(360 / 6));
    //첫 번째 값을 스케일에 대응되도록
    blendMode(DIFFERENCE);
    rect(map(sin(frameCount / 50), -1, 1, 30, 50), 0, 100, 20);
  }
  pop();

  push();
  noFill();
  ellipse(mouseX, mouseY, 150, 150);
  pop();

}
