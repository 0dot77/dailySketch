let myFont;
let word = '카캬커켜코쿄쿠큐크킈'

function preload() {
  myFont = loadFont('IropkeBatangM.otf');
}

function setup() {
  createCanvas(400, 300);
}

function draw() {
  background(0);
  textSize(30);
  textAlign(CENTER, CENTER);
  for (let gridY = 10; gridY < height; gridY += 20) {
    for (let gridX = 10; gridX < width; gridX += 20) {
      noFill();
      stroke(50);
      text('ㅋ', gridX, gridY);
    }
  }
  noFill();
  beginShape();
  for (let x = 0; x <= width; x += 40) {
    let yoff = 0;
    let inc = 0.1;
    let num = map(noise(x, yoff, frameCount / 50), 0, 1, 0, word.length);
    let c = word.charAt(num);
    let y = map(noise(x, yoff, frameCount / 50), 0, 1, 50, 250);
    fill(255);
    text(c, x + 20, y);
    fill(200);
    text(c, x + 20, y + 30);
    fill(150);
    text(c, x + 20, y + 60);
    fill(100);
    text(c, x + 20, y + 90);
    // vertex(x,y);
    yoff += inc;
  }
  endShape();
}

function keyPressed() {
  saveCanvas();
}
