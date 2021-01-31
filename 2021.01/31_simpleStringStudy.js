/*
REFERENCE

Coding train Guest Tutorial #3 : Spring Animations and p5.js with Val Head

url : https://www.youtube.com/watch?v=VWfXiSUDquw&feature=youtu.be

*/

let dots = [],
  pos,
  target,
  vel,
  spring,
  speed;

let myFont;
let letters1 = ['M'];

let animate = false,
  open = false;

function preload() {
  myFont = loadFont('/grotesk.otf');
}

function setup() {
  createCanvas(400, 400);
  background(0);
  colorMode(HSB, 100);
  noStroke();

  translate(width / 2, height / 2);

  pos = createVector(0, 20);
  // target = createVector(0, 0); // 33과 함께 있고 없고의 차이? -> intializing의 차원에서 설정을 해주는 것 같은데 딱히 큰 차이는 없어보인다. 
  vel = createVector(0, 0);
  spring = 0.70;
  speed = 0.1;

  let maxDots = 7;
  let startHue = 55;

  for (let i = 0; i < maxDots; i++) {
    let offsetAngle = TWO_PI / maxDots;
    let angle = offsetAngle;
    let radius = 150;

    target = createVector(radius * sin(angle * i), radius * cos(angle * i) + 30);
    dot = new Dot(pos.x, pos.y, target, startHue + (i * 6));


    dots.push(dot);
    dot.render();
  }
}

function draw() {
  // background(0);
  if (animate) {
    fill(0, 0, 0, 125);
    translate(width / 2, height / 2);
    noStroke();
    rect(-width / 2, -height / 2, width, height); //일종의 트릭 느낌인데, background의 컬러를 빼면서 초기의 출발 Dot이 존재할 수 있도록 만든다. DOT 자체는 셋업에 설정되어 있어서 background를 설정해버리면 처음에 없어져버린다. 

    for (let i = 0; i < dots.length; i++) {
      let p = dots[i];

      if (open) {
        target.set(0, 20);
      } else {
        target.set(p.target.x, p.target.y);
      }

      pos.set(p.pos.x, p.pos.y);
      vel.set(p.vel.x, p.vel.y);
      vel.mult(spring);

      let diff = target.sub(pos);
      diff.mult(speed);
      vel.add(diff);
      pos.add(vel);

      p.pos.x = pos.x;
      p.pos.y = pos.y

      p.vel.x = vel.x;
      p.vel.y = vel.y;

      p.render();
    }
  }
}

function flip() {
  if (!animate) { // 동작하지 않고 있으면,
    animate = true;
  } else {
    if (!open) { // 열려 있지 않으면,
      open = true;
    } else if (open) {
      open = false;
    }
  }
}

class Dot {
  constructor(posx, posy, t, h) {
    this.pos = createVector(posx, posy);
    this.target = createVector(0, 0);
    this.target.set(t);
    this.vel = createVector(0, 0);
    this.size = 100;
    this.hue = h;
  }

  render() {
    for (let i = 0; i < letters1.length; i++) {
      let letter = letters1[i];
      // letter.x = this.pos.x;
      // letter.y = this.pos.y;
      push();
      fill(255);
      textFont(myFont);
      textAlign(CENTER);
      textSize(this.size);
      text(letters1, this.pos.x + 4, this.pos.y + 3);
      pop();

      push();
      fill(this.hue, 100, 100);
      textFont(myFont);
      textAlign(CENTER);
      textSize(this.size);
      text(letters1, this.pos.x, this.pos.y);
      pop();
    }
  }
}

function mousePressed() {
  flip();
}
