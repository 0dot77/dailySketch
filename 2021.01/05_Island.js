let r;
let n;
let radiusSpeed;

function setup() {
  createCanvas(400, 400);
  r = 100;
  n = 1;
  radiusSpeed = 0;
}

function draw() {
  background(255,100,0,10);
  translate(width / 2, height / 2);
  
  fill(0,200,255,10);
  ellipse(0,0, 200 * sin(millis()/1000));

  beginShape();
  noStroke();
  fill(0);
  for (let angle = 0; angle < TWO_PI; angle += 0.1) {
    let x = r * cos(angle + millis() / 1000);
    let y = map(noise(angle), 0, 1, -200, 200);
    vertex(x,y);
    rotate(millis()/100000);
  }
  endShape(CLOSE);
  
  if(mouseIsPressed) {
    saveCanvas();
  }
}
