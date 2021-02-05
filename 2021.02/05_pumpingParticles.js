let pumpingSwitch = false;
let rectPts = [];
let rectNum = 50;
let rectSize = 30;

function setup() {
  createCanvas(400, 400);
  rectMode(CENTER);
  
  //rectNum을 이용해서 사용할 파티클을 array에 저장해주기
  for (let i = 0; i < rectNum; i++) {
    rectPts.push(new rectParticle(0, 0, 3, random(TWO_PI)));
  }
}

function draw() {
  background(255, 10);
  strokeWeight(5);
  fill(255);
  
  //어떻게 원을 커졌다가 작아졌다가 하게 할 것인지?
  let pumping = map(sin(frameCount / 30), -1, 1, 30, 300);
  ellipse(width / 2, height / 2, pumping);

  //어떤 값을 가지고 커졌다가 작아졌다가하는지 확인할 때 사용하는 값
  //let pumpingParticle = round(pumping);

  //펌핑스위치를 만들어서 true 값을 받아올 때 파티클이 뿜어져 나갈 수 있도록 만들었음
  if (pumpingSwitch == true) {
    translate(width / 2, height / 2);
    push();
    for (let i = 0; i < rectPts.length; i++) {
      rotate(frameCount / 10);
      rectPts[i].update();
      rectPts[i].show();

      //edge를 생각했는데, 포지션 값을 활용해서 x,y값이 화면 바깥을 나가면 자연스럽게 파티클이 없어지도록 값을 구성했음
      if (rectPts[i].pos.x > 200 + rectSize || rectPts[i].pos.x < -200 - rectSize || rectPts[i].pos.y > 200 + rectSize || rectPts[i].pos.y < -200 - rectSize) {
        rectPts.splice(0, 1);
      }
    }
    pop();
  }

  //중심 원이 언제 최대 값을 가지는 지 확인하고자 할 때 사용할 변수
  if (pumpingParticle > 296) {
    pumpingSwitch = true;
  } else if (rectPts.length < 1) {
    pumpingSwitch = false;
    for (let i = 0; i < rectNum; i++) {
      rectPts.push(new rectParticle(0, 0, 3, random(TWO_PI)));
    }
  }
}

class rectParticle {
  constructor(x, y, speed, direction) {
    this.pos = createVector(x, y);
    this.vel = createVector(0, 0);
    this.vel.set(speed);
    this.vel.rotate(direction);
  }
  update() {
    this.pos.add(this.vel);
  }

  show() {
    strokeWeight(10);
    stroke(random(255), random(255), random(255));
    fill(random(255), random(255), random(255));
    rect(this.pos.x, this.pos.y, rectSize, rectSize);
  }
}

function mousePressed() {
  saveCanvas();
}
//지름이 300이 넘어가면 스위치가 온 되면서 파티클이 넘어가는 방식으로 바꿔보기

// 1. 300이 넘어가면 스위치가 온 되도록
// 2. 스위치 온이 되면 파티클이 입력되도록
// 3. 파티클이 엣지를 넘어가면 사라지도록
// 3. 파티클이 없어지면 다시 스위치가 꺼지도록
