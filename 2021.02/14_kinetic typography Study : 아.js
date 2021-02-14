let myFont;
let word = "아";

function preload() {
  myFont = loadFont('IropkeBatangM.otf');

}

function setup() {
  createCanvas(400, 300);
  colorMode(HSB, width, height, 100);
}

function draw() {
  background('#000000');

  let mx = constrain(mouseX, 32, width);
  let my = constrain(mouseY, 25, height);
  let stepX = mx;
  let stepY = my;

  textFont(myFont);
  textSize(mx);
  textAlign(CENTER, CENTER);
  for (let gridY = 12; gridY < height; gridY += stepY) {
    for (let gridX = 15; gridX < width; gridX += stepX) {
      fill(gridX - 12, (height - gridY) - 12, 100);
      text(word, gridX + mouseX/2.5, gridY + mouseY/2.5);
    }
  }
  // console.log(mouseX, mouseY);

}

function keyPressed() {
  saveCanvas();
}
