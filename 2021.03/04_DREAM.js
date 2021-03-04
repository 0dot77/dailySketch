let words = ['effort', 'ambition', 'precision', 'constant'];
let count = 0;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(255);
  translate(width / 2, height / 2);

  let subTextX = 90;
  let subTextY = 8;


  let tileY = 10;
  let tileH = height / tileY;
  if (count == 0) {
    push();
    background(252, 161, 3);
    for (let i = 0; i < tileY; i++) {
      backgroundText(words[0], 75, i * tileH - 180);
    }
    subText(words[0], subTextX, subTextY);
    pop();
  } else if (count == 1) {
    push();
    background(252, 61, 3);
    for (let i = 0; i < tileY; i++) {
      backgroundText(words[1], 75, i * tileH - 180);
    }
    subText(words[1], subTextX + 50, subTextY);
    pop();
  } else if (count == 2) {
    push();
    background(18, 67, 150);
    for (let i = 0; i < tileY; i++) {
      backgroundText(words[2], 75, i * tileH - 180);
    }
    subText(words[2], subTextX + 50, subTextY);
    pop();
  } else if (count == 3) {
    push();
    background(0, 0, 0);
    fill(255);
    for (let i = 0; i < tileY; i++) {
      backgroundText(words[3], 75, i * tileH - 183);
    }
    subText(words[3], subTextX + 46, subTextY);
    pop();
  }

  push();
  textAlign(RIGHT, CENTER);
  textSize(50);
  if (count == 3) {
    fill(255);
  } else {
    fill(0);
  }
  text('DREAM', 0, 0);
  text('.', 10, 0);
  pop();
}

function mouseClicked() {
  count += 1;

  if (count == 4) {
    count = 0;
  }
}

function backgroundText(word, x, y) {
  textSize(50);
  if (count == 3) {
    fill(255, 100);
  } else {
    fill(0, 100);
  }
  textStyle(ITALIC);
  textAlign(CENTER, CENTER);
  text(word, x, y);
}

function subText(word, x, y) {
  textSize(30);
  if (count == 3) {
    fill(255);
  } else {
    fill(0);
  }
  textAlign(RIGHT, CENTER);
  text(word, x, y);
}
