let pos;
let prev;
let count = 0;

function setup() {
  createCanvas(400, 400);
  background(0);
  pos = createVector(200, 200);
  prev = pos.copy();
}

function draw() {
  // background(220);
  blendMode(BLEND);
  let step = p5.Vector.random2D();
  strokeWeight(3);
  //point(pos.x, pos.y);
  line(pos.x, pos.y, prev.x, prev.y);

  //set으로 이후 pos의 값을 가져온다. set이 없으면 처음 copy한 값을 그대로 사용한다.
  prev.set(pos);


  blendMode(DIFFERENCE);
  let r = random(100);
  if (r < 2) {
    count += 1;
    stroke(random(255), random(255), random(255));
    step.mult(25);

    if (count > 10) {
      noFill();
      for (let i = 0; i < 400; i += 20) {
        ellipse(pos.x, pos.y, 100 + i, 100 + i);
      }
      noLoop();
    }
  } else {
    stroke(255);
    step.setMag(2);
  }
  // step.mult(1);
  pos.add(step);
}
