let randomPos = [];
let colorPicks = [];
let ellipseMinSize = 30;
let ellipseMaxSize = 100;
let mousePressedSwitch = false;
let randomColorPicker;
let convertSwitch = false;

let appear = {
  x: 60,
  y: 100
};

function setup() {
  createCanvas(400, 400);
  colorPicks = [color(223, 252, 3), color(252, 173, 3), color(112, 156, 51), color(0)];
}

function draw() {
  background(255);
  // blendMode(BLEND);

  if (mousePressedSwitch) {
    for (let i = 0; i < 5; i++) {
      let r = new randomCircle(randomPos[i].x, randomPos[i].y, 30 + easeInBack(map(sin(frameCount / 50), -1, 1, 1, 5)), randomColorPicker);
      r.edge();
      r.render();

      let d = dist(randomPos[i].x, randomPos[i].y, appear.x, appear.y);

      if (d < 100) {
        convertSwitch = false;
      } else if (d > 101) {
        convertSwitch = true;
      }
    }
  } else {
    fill(0);
    textSize(25);
    textStyle(BOLD);
    textAlign(CENTER, CENTER);
    text('IF YOU LEFT CLICKED,\nAPPEAR AND DISAPPEAR', width / 2, height / 2);
  }

  if (convertSwitch) {
    textAlign(RIGHT, CENTER);
    textSize(50);
    fill(0);
    textStyle(BOLD);
    text('DISAPPEAR', 380, 300);
  } else {
    textAlign(LEFT, CENTER);
    textSize(50);
    fill(255);
    textStyle(ITALIC);
    text('APPEAR', 60, 100);
  }
}

function easeInBack(t) {
  const c1 = 1.70158;
  const c3 = c1 + 1;

  return c3 * t * t * t - c1 * t * t;
}

function mouseClicked() {
  mousePressedSwitch = true;
  randomColorPicker = int(random(0, 3));
  for (let i = 0; i < 5; i++) {
    randomPos.push(createVector(random(width), random(height)));
  }
}

function mouseReleased() {
  mousePressedSwitch = false;
  for (let i = 0; i < 5; i++) {
    randomPos.splice(i, 1);
  }
}

function randomCircle(x, y, size, c) {
  this.x = x;
  this.y = y;
  this.size = size;
  this.randomColor = c;

  this.edge = function() {
    if (this.x > width + this.size / 2 || this.y > height + this.size / 2) {
      this.x = this.x - (this.size / 2 + 10);
      this.y = this.y - (this.size / 2 + 10);
    }
    if (this.x < 0 - this.size / 2 || this.y < 0 - this.size / 2) {
      this.x = this.x + (this.size / 2 + 10);
      this.y = this.y + (this.size / 2 + 10);
    }
  }
  this.render = function() {
    noStroke();
    fill(colorPicks[this.randomColor]);
    circle(this.x, this.y, this.size);
  }
}
