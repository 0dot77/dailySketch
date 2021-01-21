let myFont;
let letter = "바다";
let letterArray;

function preload() {
  myFont = loadFont('asset/hanna.otf');
}

function setup() {
  createCanvas(400, 400);
  letterArray = myFont.textToPoints(letter, width / 2 - 70, height / 2 + 30, 100, {
    sampleFactor: 0.3
  })
}

function draw() {
  background(0, 100, 200, 100);

  noStroke();
  fill(250, 135, 0);
  for (let i = 0; i < letterArray.length; i++) {
    let points = letterArray[i];
    let rad = 30 * cos(i);
    circle(points.x, points.y, map(noise(frameCount / rad), 0, 1, 5, 20));
  }
}
