function setup() {
  createCanvas(400, 300);
}

function draw() {
  background(0);
  fill('#f1f1f1');
  noStroke();
  frameRate(5);
  rectMode(CENTER);

  let amount = int(1 + mouseX * 0.1);
  let tileW = width / amount;
  let tileH = height / amount;
  translate(tileW / 2, tileH / 2);

  for (let x = 0; x < amount; x++) {
    for (let y = 0; y < amount; y++) {
      let posx = x * tileW;
      let posy = y * tileH;
      let w = tileW;
      let h = tileH;

      //random 값에 따라서 하나의 캔버스에 그려지는 그림이 달라지는 것을 이용함. -> 캔버스 자체를 쪼개서 그린다기 보다는 랜덤하게 정의되는 몇 가지의 모양들을 가지고 캔버스에 정의될 수 있는 하나의 모양의 크기를 줄여나가면서 정의하는 것.

      if (random(1) < 0.22) {
        push();
        translate(posx,posy);
        rect(0,0,w,h);
        pop();
      } else if (random(1) > 0.22 || random(1) < 0.44) {
        push();
        translate(posx - tileW / 2, posy + tileH / 2);
        arc(0, 0, w * 2, h * 2, radians(270), TWO_PI, PIE);
        pop();
      } else if (random(1) > 0.44 || random(1) < 0.66) {
        push();
        translate(posx + tileW / 2, posy + tileH / 2);
        arc(0, 0, w * 2, h * 2, radians(180), radians(270), PIE);
        pop();
      } else if (random(1) > 0.66 || random(1) < 0.88) {
        push();
        translate(posx + tileW / 2, posy - tileH / 2);
        arc(0, 0, w * 2, h * 2, radians(90), radians(180), PIE);
        pop();
      } else if (random(1) > 0.88) {
        push();
        translate(posx - tileW / 2, posy - tileH / 2);
        arc(0, 0, w * 2, h * 2, radians(0), radians(90), PIE);
        pop();
      }
    }
  }
}
