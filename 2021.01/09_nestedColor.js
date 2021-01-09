function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(random(255), random(255), random(255));
  translate(width / 2, height / 2);
  for (let n = 0; n < 30; n++) {
    stroke(random(255), random(255), random(255));
    for (let i = 0; i < 300; i += 2) {
      var x = random(50, 100);
      var xx = random(150, 300);

      push();
      strokeWeight(4);
      strokeCap(ROUND);
      rotate(radians(i));
      line(x, 0, xx, 0);
      pop();
    }
  }
}
//nested loop를 좀 더 적극적으로 활용해주기. 컬러의 경우에는 더 다이나믹한 이미지를 만들어낼 수 있다.
