let n1 = 0.3;
let n2 = 0.3;
let n3 = 0.3;
let m = 1 / 6;
let a = 1;
let b = 1;


function setup() {
  createCanvas(400, 400);
}

function superShape(theta) {

  let part1 = (1 / a) * cos(theta * m / 4);
  part1 = abs(part1);
  part1 = pow(part1, n2);

  let part2 = (1 / b) * sin(theta * m / 4);
  part2 = abs(part2);
  part2 = pow(part2, n3);

  let part3 = pow(part1 + part2, 1 / n1);

  if (part3 === 0) {
    return 0;
  }

  return (1 / part3);
}

function draw() {
  m = map(sin(frameCount / 10000), -1, 1, 0, 30);
  background(0);
  stroke(255);
  noFill();
  translate(width / 2, height / 2);
  let radius = mouseX;
  let total = 100;
  let increment = TWO_PI / total;
  beginShape();
  for (let angle = 0; angle < PI * 12; angle += increment) {
    let r = superShape(angle);
    let x = radius * r * cos(angle);
    let y = radius * r * sin(angle);
    vertex(x, y);
  }
  endShape(CLOSE);

  beginShape();
  fill(27,122,88);
  for (let angle = 0; angle < PI * 12; angle += increment) {
    let r = superShape(angle);
    let x = radius * r * cos(angle);
    let y = radius * r * sin(angle);
    vertex(-x -20, y);
  }
  endShape(CLOSE);

}
