let myFont;

function preload() {
  myFont = loadFont('/BMHANNA_11yrs_otf.otf');
}
function setup() {
  createCanvas(400, 400);
}

function draw() {
  blendMode(BLEND);
  background(240, 100, 100);

  blendMode(DIFFERENCE);
  
  translate(10,0);
  for (let i = 0; i < 100; i += 10) {
    rect(width / 2, height / 2, i, i);
    rect(width / 2 - 100, height / 2, i, i);
    rect(width / 2 - 100, height / 2 - 100, i, i);
  }

  textFont(myFont);
  fill(255);
  textSize(125);
  text('M', width / 2, height / 2 -15);
}
