/*
---------------------------------------------
https://www.youtube.com/watch?v=VWfXiSUDquw&feature=youtu.be

Refer : simple String Animation
---------------------------------------------
*/

let myFont;
let word = '타'
let dots = [],
  pos,
  target,
  vel,
  spring,
  speed;

let animate = false;
let open = false;

function preload() {
  myFont = loadFont('IropkeBatangM.otf');
}

function setup() {
  createCanvas(400, 300);
  background(0);
  colorMode(HSB, 100);
  noStroke();
  translate(width / 2, height / 2);

  pos = createVector(0, 0);
  target = createVector(0, 0);
  vel = createVector(0, 0);
  spring = 0.70;
  speed = 0.1;

  let maxDots = 7;
  let startHue = 55;

  for (let i = 0; i < maxDots; i++) {
    let offSetAngle = 2 * PI / maxDots;
    let angle = offSetAngle;
    let radius = 100;

    target = createVector(radius * sin(angle * i), radius * cos(angle * i));
    dot = new Dot(pos.x, pos.y, target, startHue + (i * 6));
    dots.push(dot);
    dot.render();
  }
}

function draw() {
  if (animate == true) {
    fill(0, 0, 0, 50);
    translate(width / 2, height / 2);
    rect(-width / 2, -height / 2, width, height);

    for (let i = 0; i < dots.length; i++) {
      let p = dots[i];

      if (open) {
        target.set(0, 0);
      } else {
        target.set(p.target.x, p.target.y);
      }

      pos.set(p.posX, p.posY);
      vel.set(p.velX, p.velY);
      vel.mult(spring);

      let diff = target.sub(pos);
      diff.mult(speed);
      vel.add(diff);
      pos.add(vel);

      p.posX = pos.x;
      p.posY = pos.y;
      p.velX = vel.x;
      p.velY = vel.y;

      p.render();
    }
  }

  textSize(30);
  text('마우스 클릭!', width / 2, height / 2 + 80);
}

function flip() {
  if (!animate) {
    animate = true;
  } else {
    if (!open) {
      open = true;
    } else if (open) {
      open = false;
    }
  }
}

function Dot(posx, posy, t, h) {
  this.posX = posx;
  this.posY = posy;

  this.target = createVector(0, 0);
  this.target.set(t);
  this.velX = 0;
  this.velY = 0;
  this.size = 65;
  this.hue = h;

  this.render = function() {
    fill(h, map(sin(frameCount / 10), -1, 1, 50, 100), 100);
    textSize(map(sin(this.size + frameCount / 50), -1, 1, 30, 60));
    textAlign(CENTER, CENTER);
    text(word, this.posX, this.posY);
  }
}

function mousePressed() {
  flip();
}
