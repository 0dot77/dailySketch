let xoff,
  yoff,
  zoff;

let startBool = false;

function setup() {
  createCanvas(400, 400);
  background(0, 0, 0);
  xoff = 50;
  yoff = 30;
  zoff = 5;
}

function draw() {
  let r = map(noise(xoff, yoff, zoff), 0, 1, 0, 150);

  if (r > 100) {
    push();
    textSize(15);
    fill(255);
    textAlign(CENTER, CENTER);
    text('THIS IS YOUR NOISE FLOWER', width / 2, height / 2 + 170);
    pop();
    noLoop();

    startBool = false;
  } else {
    startBool = true;
  }

  if (startBool) {
    noFill();
    translate(width / 2, height / 2);
    stroke(random(255));
    strokeWeight(map(sin(frameCount / 50), -1, 1, 0.1, 0.5));
    beginShape();
    for (var angle = 0; angle < TWO_PI * 2; angle += 1) {
      let x = r * cos(angle);
      let y = r * sin(angle);
      ellipse(x, y, r);
    }
    zoff += 0.01;
    endShape(CLOSE);
  }
}
