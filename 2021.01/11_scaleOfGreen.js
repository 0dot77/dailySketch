function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(0);

  for (var x = 0; x <= width; x += 5) {
    stroke(100, 200, 100);
    line(x, 0, x, height);
  }

  push();
  translate(width / 2, height / 2);

  for (var i = 0; i < 100; i += 3) {
    var leftXn = -49;
    var rightXn = 49;
    var heightYn = 0;
    line(leftXn - i, heightYn - i, rightXn - i, heightYn + i);
    line(leftXn + i, heightYn + i, rightXn + i, heightYn - i);
    line(leftXn - i, heightYn + i, rightXn - i, heightYn + i);
    line(leftXn + i, heightYn + i, rightXn + i, heightYn + i);
  }
}
