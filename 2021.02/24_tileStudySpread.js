let pg;
let fireWorks = [];
let num = 50;

function setup() {
  createCanvas(400, 300);
  pg = createGraphics(width, height);

}

function draw() {
  background(0);

  let tileX = 5;
  let tileY = 5;

  let tileW = int(width / tileX);
  let tileH = int(height / tileY);

  for (let i = 0; i < fireWorks.length; i++) {
    let f = fireWorks[i];
    f.update();
    f.render();
    if (f.pos.x > width || f.pos.x < 0 || f.pos.y > height || f.pos.y < 0) fireWorks.splice(i, 1);
  }

  for (let y = 0; y < tileY; y++) {
    for (let x = 0; x < tileX; x++) {
      let wave = floor(map(cos(frameCount / 50 * (x + y)), -1, 1, 0,150));

      let sx = x * tileW;
      let sy = y * tileH + wave;
      let sw = tileW;
      let sh = tileH;

      let dx = x * tileW;
      let dy = y * tileH;
      let dw = tileW;
      let dh = tileH;

      copy(pg, sx, sy, sw, sh, dx, dy, dw, dh);
    }
  }
  
  fill(255);
  textAlign(CENTER,CENTER);
  text('PRESS THS MOUSE BUTTON', width/2, height/2 + 130);
}

function mousePressed() {
  for (let i = 0; i < num; i++) {
    fireWorks[i] = new fireWork(mouseX, mouseY, random(5, 10), random(TWO_PI), random(1, 10),random(0,255));
  }
}

function fireWork(x, y, speed, direction, size, colors) {
  this.pos = createVector(x, y);
  this.vel = createVector(0, 0);
  this.vel.set(speed);
  this.vel.rotate(direction);
  this.size = size;
  this.c = colors;

  this.applyForce = function(force) {
    this.vel.add(force);
  }

  this.update = function() {
    this.pos.add(this.vel);
  }

  this.render = function(colors) {
    push();
    pg.fill(this.c);
    pg.noStroke();
    pg.circle(this.pos.x, this.pos.y, this.size);
    pop();
  }
}
