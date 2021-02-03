function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(0);
  rectMode(CENTER);

  translate(width / 2, height / 2);
  beginShape();
  for (let angle = 1; angle < 20; angle++) {
    let angleV = 0.01;
    let r = 100;
    let x = r * map(cos(angle + frameCount / 100), -1, 1, -2, 2);
    let y = r * sin(angle - frameCount / 100);
    strokeWeight(2);
    stroke(255, 0, 0);
    fill(0, 250, 120);
    vertex(x, y - 100);
    vertex(x, y);
    vertex(x, y + 100);
    push();
    noStroke();
    fill(255, 0, 0);
    rect(x, y, 30, 30);
    pop();
  }
  endShape(CLOSE);

  push();
  strokeWeight(5);
  textFont('Arial');
  textSize(50);
  for (let i = 0; i < 5; i++) {
    text('MIRROR', -150, i * 30);
  }
  pop();


}
