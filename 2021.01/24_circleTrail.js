let trail = [];
let trailBoolean = false;

function setup() {
  createCanvas(400, 400);
  background(55, 188, 98);
  noStroke();
  rectMode(CENTER);
}

function draw() {

  if (trailBoolean) {
    for (let i = 0; i < trail.length; i++) {
      if (trail.length > 30) {
        trail.splice(i, 1);
      }
      let from = color(11, 10, 60);
      let to = color(120, 88, 187);
      let pct = map(i, trail.length, 0, 0.55, 0);
      let trailColor = lerpColor(from, to, pct);
      fill(trailColor);
      let size = i * 60 / trail.length;
      let pts = trail[i];
      ellipse(pts.x, pts.y, size, size);
    }
  } else {
    for (let i = 0; i < trail.length; i++) {
      trail.splice(i, 1);
    }
  }
}

function keyPressed() {
  saveCanvas();
}
function mouseReleased() {
  trailBoolean = false;
}

function mouseDragged() {
  trailBoolean = true;
  trail.push(new p5.Vector(mouseX, mouseY));
}
