let actRandomSeed = 0;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  noLoop();
  background(12, 18, 1);
  randomSeed(actRandomSeed);
  let tileX = 5;
  let tileY = 5;

  let tileW = width / tileX;
  let tileH = height / tileY;

  translate(tileW / 2, tileH / 2);
  for (let x = 0; x < tileX; x++) {
    for (let y = 0; y < tileY; y++) {
      fill(219, 64, 44);
      // push();
      // stroke(255);
      // noFill();
      // rect(x * tileW, y * tileH, tileW, tileH);
      // pop();
      //여기서 생성되는 난수 값은 x,y의 nested 루프 안에서 생성되는 것이기 때문에 반복에 따라서 다양하게 생성된다. 0 - 1 사이로 생성
      if (random() < 0.075) {
        noStroke();
        ellipse(x * tileW, y * tileH, tileW, tileH);
      } else if (random() > 0.075 && random() < 0.155) {
        fill(219, 64, 44);
        rectMode(CENTER);
        for (let i = 0; i < 2; i++) {
          if (i == 0) {
            rect(x * tileW - 15, y * tileH, 10, tileH);
          } else if (i == 1) {
            rect(x * tileW + 15, y * tileH, 10, tileH);
          }
        }
      } else if (random() > 0.155 && random() < 0.355) {
        push();
        // translate(tileW / 2, tileH / 2);
        rotate(radians(90));
        fill(219, 64, 44);
        rect(x * tileW, y * tileH, 10, tileH);
        pop();
      } else if (random() > 0.355 && random() < 0.555) {
        for (let i = 0; i < 3; i++) {
          fill(219, 64, 44);
          if (i == 0) {
            ellipse(x * tileW, y * tileH - 30, 10, 10);
          } else if (i == 1) {
            ellipse(x * tileW, y * tileH, 10, 10);
          } else if (i == 2) {
            ellipse(x * tileW, y * tileH + 30, 10, 10);
          }
        }

      } else if (random() > 0.555 && random() < 0.777) {
        fill(219, 64, 44);
        rect(x * tileW, y * tileH, 10, tileH);
      } else if (random() > 0.35) {
        fill(219, 64, 44);
        rect(x * tileW, y * tileH, 50, 50);
      }
    }
  }
}

function mouseReleased() {
  // console.log(random());
  //randomSeed를 설정해놓으면 값이 어디로 튈지 걱정하지 않아도 된다.
  // 시드값을 설정해서 값이 튀지 않도록 설정하는 것!
  actRandomSeed = random(100000);
  loop();
}
