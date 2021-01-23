let p1,
  bar1,
  clicked,
  newCanvas;

function setup() {
  createCanvas(400, 400);
  p1 = createVector(width / 2, 100);
  bar1 = createVector(width / 2, height / 2);
  clicked = false;

  newCanvas = createCanvas(400, 400);
}


function draw() {
  newCanvas.background(0);
  // background(0,100);
  noStroke();
  fill(100, 255, 50);
  ellipse(p1.x, p1.y, p1.y);

  let from = color(255, 255, 255);
  let to = color(0, 0, 255);
  let pct = map(p1.y, 400, 0, 0, 1);
  let c = lerpColor(from, to, pct);

  fill(c, 100);
  rect(bar1.x - 15, height, 30, -map(p1.y, 0, 400, 400, 0) + 50);

  let textOutput = (height - p1.y) - 50;
  push();
  fill(255, 0, 0, 100);
  stroke(255);
  strokeWeight(random(50));
  textAlign(CENTER);
  textStyle(ITALIC);
  if (textOutput < 0 || textOutput > 400) {
    textSize(20);
    newCanvas.text('Out of Range, please checkout your value', width / 2, height/2 + 25);
  } else {
    textSize(100);
    newCanvas.text(textOutput, width / 2, height / 2 + 25);
  }
  pop();

  fill(255);
  strokeWeight(3);
  // strokeWeight(map(noise(100 + frameCount/10),0,1,0,255));
  stroke(random(255), random(255), 0);
  if (textOutput < 0 || textOutput > 400) {
    text('Out of Range, please checkout your value', width / 2 - 40, height - 30);
  } else {
    text(textOutput, bar1.x - 10, height - 30);
  }
}

function mouseReleased() {
  clicked = false;
}

function mouseDragged() {
  if (clicked == true) {
    p1.y = mouseY;
  }
}

function mousePressed() {
  let d = dist(mouseX, mouseY, p1.x, p1.y);

  if (d < p1.y/2) {
    clicked = true;
  }
}
