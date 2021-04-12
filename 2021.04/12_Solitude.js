let s;
let trBool = false;
let count = 0;

function setup() {
  createCanvas(400, 400);
  s = new Solitude(width / 2, height / 2);
}

function draw() {
  background(255, 0, 0);
  // s.update();

  if (!trBool) {
    blendMode(DIFFERENCE);
  } else {
    blendMode(BLEND);
  }
  s.tr();
  s.show();

  if (count >= 10) {
    blendMode(BLEND);
    fill(255);
    textSize(80);
    textAlign(CENTER, CENTER);
    text('SOLITUDE', width / 2, height / 2 + 50);
  }
}

function mousePressed() {
  trBool = false;
  count += 1;

  if (count == 11) {
    count = 0;
  }
  s.sizeUpdate(50)
}

function mouseReleased() {
  trBool = true;
}

function Solitude(x, y) {
  this.pos = createVector(x, y);
  this.radius = 10;

  this.sizeUpdate = function(sizeUp) {
    this.radius += sizeUp;
  }

  this.tr = function() {
    if (trBool) {
      this.pos.x += random(-count, count);
      this.pos.y += random(-count, count);
    }
  }

  this.show = function() {
    fill(0);
    noStroke();
    ellipse(this.pos.x, this.pos.y, this.radius, this.radius);
  }
}
