let words = 'REPEAT';

function setup() {
  createCanvas(400, 400);
  rectMode(CENTER);
  noStroke();
}

function draw() {
  let m = map(mouseX, 0, width, 0, 255);
  background(-m, m, 100);
  translate(width / 2, height / 2);

  push();
  rotate(radians(-10));
  textSize(80);
  textStyle(ITALIC);
  for (let i = 0; i < 4; i++) {
    text('REPEAT', -120 + i * 3, 140 + i * 5);
  }
  pop();

  for (let angle = 0; angle < 100; angle++) {
    let r = 100;
    let x = r * cos(angle);
    let y = r * sin(angle);
    rect(x, y, 50, 25);
  }


  push();
  for (let i = 0; i < 15; i++) {
    rotate(radians(10));
    rect(0, 0, 30, 30);
  }
  pop();

  push();
  for (let i = 0; i < words.length; i++) {
    textSize(50);
    rotate(radians(360 / map(mouseX, 0, width, 1, 10)));
    text(words[i], 45, 0);
  }
  pop();

  push();
  textSize(80);
  textStyle(ITALIC);
  text('REPEAT', -170, -100);
  pop();
}
