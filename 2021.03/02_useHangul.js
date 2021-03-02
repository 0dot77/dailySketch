let words = 'ㄱㄴㄷㄹㅁㅂㅅㅇㅈㅊㅋㅌㅍㅎ';

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(0);
  let tileX = 10;
  let tileY = 14;

  let tileW = width / tileX;
  let tileH = height / tileY;
  fill('#f1f1f1');
  let m = map(sin(frameCount / 50), -1, 1, 10, 30);
  translate(tileW / 2, tileH / 2);
  for (let x = 0; x < tileX; x++) {
    for (let y = 0; y < tileY; y++) {
      textAlign(CENTER, CENTER);
      textSize(easeInElastic(map(sin(frameCount / 30), -1, 1, 1, 1.8)));
      text(words.charAt(y), x * tileW, y * tileH);
    }
  }
}

function easeInElastic(t) {
  const c4 = (2 * Math.PI) / 3;

  return t === 0 ?
    0 :
    t === 1 ?
    1 :
    -pow(2, 10 * t - 10) * sin((t * 10 - 10.75) * c4);
}
