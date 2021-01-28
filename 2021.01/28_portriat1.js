let img;
let bg;

function preload() {
  img = loadImage('/1.png');

}

function setup() {
  createCanvas(408, 612);
  img.resize(408, 612);
}

function draw() {
  background(0, 100, 200);
  push();
  // translate(width/2, height/2);
  image(img, 0, 0);
  pop();
  translate(width / 2, height / 2);
  beginShape();
  for (let angle = 0; angle < 100; angle += 0.1) {
    let loopDuration = frameCount / 10 + angle;
    let r = map(noise(loopDuration, frameCount / 10), 0, 1, 45, 100);
    let x = r * cos(angle);
    let y = r * sin(angle);

    let lineX = (r * 2) * cos(angle);
    let lineY = (r * 2) * sin(angle);

    push();
    strokeWeight(map(noise(frameCount / 100 + angle), 0, 1, 0, 5));
    stroke(255);
    fill(255);
    ellipse(lineX, lineY - 10, 30);
    pop();

    noStroke();
    // let from = color(0,100,200);
    // let to = color(0,255,150);
    // let pct = map(mouseX,0,400,0.11,0.55);
    // let c = lerpColor(from,to,pct);
    fill(100,0,200,90);
    vertex(x, y - 10);

  }
  endShape();

}
