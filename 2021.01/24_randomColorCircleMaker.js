let randomArr = new Array(3);

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(0);

  noStroke();
  fill(0, 100, 200);
  translate(width / 2, height / 2);

  let rotateAngle = 90;
  let circleX;

  fill(randomArr[0], randomArr[1], randomArr[2], 200);
  ellipse(0, 0, 300);

  for (let angle = 0; angle < 360; angle += 15) {
    push();
    rotate(radians(angle));
    fill(randomArr[1], randomArr[0], 0);
    ellipse(30, 30, map(sin(angle / rotateAngle + frameCount / 10), -1, 1, 0, 30));
    ellipse(60, 60, map(sin(angle / rotateAngle + frameCount / 10), -1, 1, 0, 30));
    ellipse(90, 90, map(cos(angle / rotateAngle - frameCount / 10), 1, -1, 0, 30));
    ellipse(120, 120, map(cos(angle / rotateAngle - frameCount / 10), 1, -1, 0, 30));
    pop();
    rotateAngle++;
  }
}

function mousePressed() {
  randomArr = [floor(random(255)), floor(random(255)), floor(random(255))];
  // console.log(randomArr);
  
  saveCanvas();
}
