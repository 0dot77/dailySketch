let letter = '"NOTHING IS A MISTAKE"';
let c = [];
let cNum = 100;

function setup() {
  createCanvas(1000, 200);

  for (let i = 0; i < cNum; i++) {
    c.push(new circles(random(50, width - 50), random(50, height - 50), random(0.3, 3), random(TWO_PI), random(30, 100)));
  }
}

function draw() {

  blendMode(BLEND);
  background(0, 0, 100);

  textFont('Arial');
  textAlign(CENTER);
  noStroke();
  textSize(80);
  textStyle(ITALIC);
  blendMode(DIFFERENCE);
  for (let i = 0; i < cNum; i++) {
    c[i].update();
    c[i].show();
  }
  // blendMode(BLEND);
  fill(255, 0, 0);
  text(letter, width / 2 - 5, height / 2 + 30);
}
class circles {
  constructor(x, y, speed, direction, size) {
    this.pos = createVector(x, y);
    this.vel = createVector(0, 0);
    this.vel.set(speed);
    this.vel.rotate(direction);
    this.size = size;
  }

  update() {
    this.pos.add(this.vel);

    if (this.pos.x > width - this.size / 2 || this.pos.x < 0 + this.size / 2 || this.pos.y > height - this.size / 2 || this.pos.y < 0 + this.size / 2) {
      this.vel.mult(-1);
    }
  }

  show() {
    fill(0, 200, 200);
    noStroke();
    ellipse(this.pos.x, this.pos.y, this.size, this.size);
  }
}
