let myFont;
let letter = "양";
let letterArray;

function preload() {
  myFont = loadFont('asset/BMHANNA_11yrs_otf.otf');
}

function setup() {
  createCanvas(400, 400);
  letterArray = myFont.textToPoints(letter, width / 2 - 115, height / 2 + 85, 300, {
    sampleFactor: 0.5
  })
}

function draw() {
  background(0, 160, 100);

  noStroke();
  fill(170);
  beginShape();
  for (let i = 0; i < letterArray.length; i++) {
    let points = letterArray[i];
    let rad = 30 * cos(i);
    vertex(points.x + map(sin(i + frameCount / 10), -1, 1, -5, 5), points.y + map(cos(i + frameCount / 10),-1,1,-5,5));
    }
    endShape(CLOSE);
  }
