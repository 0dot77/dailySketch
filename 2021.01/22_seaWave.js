let myFont;
let letter = "물결";
let letterArray;
let letterboolean;

function preload() {
  myFont = loadFont('asset/BMHANNA_11yrs_otf.otf');
}

function setup() {
  createCanvas(400, 400);
  letterBoolean = [];
  letterArray = myFont.textToPoints(letter, width / 2 - 155, height / 2 + 60, 200, {
    sampleFactor: 0.1
  })

  for (let i = 0; i < letterArray.length; i++) {
    letterBoolean[i] = false;
  }
}

function draw() {
  background(0, 100, 200);

  noStroke();
  for (let i = 0; i < letterArray.length; i++) {
    let points = letterArray[i];
    let rad = 30 * cos(i);
    ellipse(points.x + map(sin(i + frameCount / 10), -1, 1, -5, 5), points.y - map(sin(i + frameCount / 10), -1, 1, -2, 2), 10, 10);
  }
  
  if(mouseIsPressed) {
    saveCanvas();
  }
}

function mouseReleased() {
  for (let i = 0; i < letterArray.length; i++) {
    letterBoolean[i] = false;
  }
}

function mouseDragged() {
  for (let i = 0; i < letterArray.length; i++) {
    if (letterBoolean[i] == true) {
      letterArray[i].x = mouseX;
      letterArray[i].y = mouseY;
    }
  }
}

function mousePressed() {
  for (let i = 0; i < letterArray.length; i++) {
    let d = dist(mouseX, mouseY, letterArray[i].x, letterArray[i].y);

    if (d < 10) {
      letterBoolean[i] = true;
      break;
    }
  }
}
