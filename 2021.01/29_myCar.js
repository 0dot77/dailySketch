// let myCars = [];
let myCar;
let carNum = 10;
let wheel1Angle = 10;
let wheel2Angle = 10;
let carAnimate = false;

function setup() {
  createCanvas(400, 400);

  //want to display cars?

  // for (let i = 0; i < carNum; i++) {
  //   myCars[i] = new car(width/2, height/2);
  // }

  myCar = new car(width / 2, height / 2, 2);
}

function draw() {
  background(0, 200, 100);

  let mouseDeep = map(mouseX, 0, 400, 0, 1);


  // for(let i = 0; i < myCars.length; i++) {
  //   let myCar = myCars[i];
  //   push();
  //   scale(i/9);
  //   myCar.body();
  //   myCar.wheel();
  //   pop();
  // }
  myCar.body();
  push();
  myCar.wheel1();
  pop();
  push();
  myCar.wheel2();
  pop();


  if (myCar.pos.x - 150 > width) {
    carAnimate = true;
  }

  if (!carAnimate) {
    myCar.action();
  } else {
    myCar.pos.x = -150;
    carAnimate = false;
  }
}

class car {
  constructor(x, y, speed) {
    this.pos = createVector(x, y);
    this.vel = createVector(0, 0);
    this.vel.set(speed);
  }

  action() {
    this.pos.add(this.vel);
  }

  body() {
    noStroke();
    fill(255);
    rect(this.pos.x - 70, this.pos.y, 150, 30);
    rect(this.pos.x - 150, this.pos.y + 30, 300, 80);
    fill(0);
    arc(this.pos.x - 70, this.pos.y + 110, 50, 50, PI, 0, OPEN);
    arc(this.pos.x + 70, this.pos.y + 110, 50, 50, PI, 0, OPEN);
  }

  wheel1() {
    let wheel1Size = 45;
    fill(255);
    ellipse(this.pos.x - 70, this.pos.y + 115, wheel1Size, wheel1Size);

    stroke(0);

    translate(this.pos.x - 70, this.pos.y + 115);
    rotate(radians(wheel1Angle));
    push();
    strokeWeight(2);
    for (let angle1 = 0; angle1 <= 360; angle1 += 10) {
      rotate(radians(angle1));
      line(0, 0, wheel1Size / 2 - 20, wheel1Size / 2);
    }
    wheel1Angle++;
    pop();

    rotate(radians(wheel1Angle));
    push();
    strokeWeight(map(sin(frameCount / 10), -1, 1, 0.5, 2));
    stroke(random(255), random(255), random(255));
    for (let angle2 = 0; angle2 <= 360; angle2 += 1) {
      rotate(radians(angle2));
      line(140, 0, wheel1Size / 2 - 20, wheel1Size / 2);
    }
    wheel1Angle++;
    pop();
  }

  wheel2() {
    let wheel2Size = 45;
    fill(255);
    ellipse(this.pos.x + 70, this.pos.y + 115, wheel2Size, wheel2Size);

    stroke(0);
    translate(this.pos.x + 70, this.pos.y + 115);
    rotate(radians(wheel2Angle));
    push();
    strokeWeight(2);
    for (let angle3 = 0; angle3 <= 180; angle3 += 10) {
      rotate(radians(angle3));
      line(0, 0, wheel2Size / 2 - 20, wheel2Size / 2);
    }
    wheel2Angle++;
    pop();

    rotate(radians(wheel2Angle));
    push();
    strokeWeight(map(sin(frameCount / 10), -1, 1, 0.5, 2));
    stroke(random(255), random(255), random(255));
    for (let angle4 = 0; angle4 <= 180; angle4 += 1) {
      rotate(radians(angle4));
      line(140, 0, wheel2Size / 2 - 20, wheel2Size / 2);
    }
    wheel2Angle++;
    pop();
  }
}
