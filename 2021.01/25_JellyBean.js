let randomArr = new Array(3);

function setup() {
  createCanvas(400, 400);
}

function draw() {
  blendMode(BLEND);
  background(255);
  blendMode(MULTIPLY);
  
  noStroke();
  fill(0, 100, 200);
  translate(width / 2, height / 2);

  let rotateAngle = 90;
  let circleX;

  fill(randomArr[0], randomArr[1], randomArr[2], 200);
  ellipse(0, 0, 300);

  fill(100, 0, 150);
  for (let angle = 0; angle < 30; angle += 1) {
    let rotateAnimation = angle + frameCount/10;
    push();
    rotate(radians(rotateAnimation));
    fill(randomArr[1], randomArr[0], 0);
    circles(angle, rotateAngle);
    pop();
    rotateAngle++;

    push();
    rotate(radians(rotateAnimation + 180));
    fill(randomArr[0], randomArr[1], 0);
    circles(angle, rotateAngle);
    pop();

    push();
    rotate(radians(rotateAnimation + 90));
    fill(0, randomArr[1], randomArr[0]);
    circles(angle, rotateAngle);
    pop();

    push();
    rotate(radians(rotateAnimation - 90));
    fill(randomArr[1], randomArr[1], randomArr[0]);
    circles(angle, rotateAngle);
    pop();
  }
}

function mousePressed() {
  randomArr = [floor(random(255)), floor(random(255)), floor(random(255))];
  // console.log(randomArr);
}

function circles(a, r) {
  let cA = ellipse(30, 30, map(sin(a / r + frameCount / 10), -1, 1, 0, 40));
  let cB = ellipse(60, 60, map(sin(a / r + frameCount / 10), -1, 1, 0, 30));
  let cC = ellipse(90, 90, map(cos(a / r - frameCount / 10), 1, -1, 0, 30));
  let cD = ellipse(120, 120, map(cos(a / r - frameCount / 10), 1, -1, 40, 30));
}
